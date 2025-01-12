import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CharacterCard from "./components/CharacterCard";
import "./style/SearchBar.css";

export default function Characters() {

    const [characterList, setCharacterList] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchBarChange = (evt) => {
        setSearchQuery(evt.target.value);
    }

    const runQuery = () => {
        alert(searchQuery);
    }

    useEffect(() => {
        fetch("https://genshin.jmp.blue/characters")
        .then(response => response.json())
        .then(data => setCharacterList(data))
        .catch(e => `Error: ${e}`);

        document.title = "Characters | Genshindex";
    }, [])

    return (
        <>
            <Typography variant="h3" component="h2" sx={{mb: 6}}>Characters</Typography>
            <div className="searchBar">
                <Stack direction="row">
                    <TextField fullWidth id="outlined-basic" name="search" value={searchQuery} label="Search" variant="outlined" size="medium" sx={{backgroundColor: "white"}} onChange={handleSearchBarChange} />
                    <Button variant="contained" sx={{backgroundColor: "#ffc000"}} onClick={runQuery}> Search </Button>
                </Stack>
            </div>
            <Grid
                container
                columnSpacing={{xs: 1, sm: 1, md: 1}}
                rowSpacing={{xs: 2, md: 5}}
                columns={{xs: 2, sm: 6, md: 12}}
                justifyContent={"space-evenly"}
                sx={{my: 6}}>
                    {characterList.map((character, i) => {
                        return <Grid key={i} size={{xs: 1, sm: 2, md: 3}} display="flex" justifyContent={'center'}>
                                    <CharacterCard characterName={character} key={character + "Card"}/>
                                </Grid>
                    })}
            </Grid>
        </>
    )
}