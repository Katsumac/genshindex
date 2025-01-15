import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import CharacterCard from "./components/CharacterCard";
import SearchBar from './components/SearchBar';
import "./style/Paragraph.css"

export default function Characters() {

    const [characterList, setCharacterList] = useState([]);
    const [filterChoices, setFilterChoices] = useState({
        rarity: "",
        vision: "",
        weapon: ""
    });

    useEffect(() => {
        fetch("https://genshin.jmp.blue/characters")
            .then(response => response.json())
            .then(data => setCharacterList(data))
            .catch(e => `Error: ${e}`);

        document.title = "Characters | Genshindex";
    }, [])

    const searchCharacters = (query) => {
        fetch("https://genshin.jmp.blue/characters")
            .then(response => response.json())
            .then(data => {
                setCharacterList(data.filter(name => name.includes(query)))
            })
            .catch(e => `Error: ${e}`);
    }

    const handleFilterChange = (evt) => {
        setFilterChoices((currFilterChoices) => {

            currFilterChoices[evt.target.name] = evt.target.value;
            return {...currFilterChoices};
        });
    }

    const filterCharacterList = () => {

    }

    const resetFilter = () => {

    }

    return (
        <>
            <Typography variant="h3" component="h2" sx={{ mb: 6 }}>Characters</Typography>
            <div className="searchBar">
                <SearchBar runQuery={searchCharacters} />
            </div>
            <div className="paragraph">
                <Typography variant="body2" component="h2" sx={{ mt: 3, mb: 6, maxWidth: 900 }}>
                    For the Kamisato siblings, please search by their first name.
                    If a character's name has two or more words, you may need use a dash in place of a space.
                    For example: "traveler-anemo", or "arataki-itto".
                    Of course, you may search with part of their names instead.</Typography>
            </div>
            <p>{filterChoices.rarity}</p>
            <p>{filterChoices.vision}</p>
            <p>{filterChoices.weapon}</p>
            <div id="filter">
                <Stack direction="row">
                    <FormControl sx={{minWidth: 100, mr: 2, backgroundColor: "white"}}>
                        <InputLabel id="charRarityLabel">Rarity</InputLabel>
                        <Select
                            labelId="charRarity"
                            id="charRarity"
                            value={filterChoices.rarity}
                            label="Rarity"
                            name="rarity"
                            onChange={handleFilterChange}
                        >
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{minWidth: 100, mr: 2, backgroundColor: "white"}}>
                        <InputLabel id="charVisionLabel">Vision</InputLabel>
                        <Select
                            labelId="charVision"
                            id="charVision"
                            value={filterChoices.vision}
                            label="Vision"
                            name="vision"
                            onChange={handleFilterChange}
                        >
                            <MenuItem value="Anemo">Anemo</MenuItem>
                            <MenuItem value="Cryo">Cryo</MenuItem>
                            <MenuItem value="Dendro">Dendro</MenuItem>
                            <MenuItem value="Electro">Electro</MenuItem>
                            <MenuItem value="Geo">Geo</MenuItem>
                            <MenuItem value="Hydro">Hydro</MenuItem>
                            <MenuItem value="Pyro">Pyro</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{minWidth: 100, backgroundColor: "white"}}>
                        <InputLabel id="charWeaponLabel">Weapon</InputLabel>
                        <Select
                            labelId="charWeapon"
                            id="charWeapon"
                            value={filterChoices.weapon}
                            label="Weapon"
                            name="weapon"
                            onChange={handleFilterChange}
                        >
                            <MenuItem value="Bow">Bow</MenuItem>
                            <MenuItem value="Catalyst">Catalyst</MenuItem>
                            <MenuItem value="Claymore">Claymore</MenuItem>
                            <MenuItem value="Polearm">Polearm</MenuItem>
                            <MenuItem value="Sword">Sword</MenuItem>
                        </Select>
                    </FormControl>
                    <Button id="filterButton" variant="contained" sx={{backgroundColor: "#ffc000"}} onClick={filterCharacterList}> Filter </Button>
                    <Button id="resetButton" variant="contained" sx={{backgroundColor: "#ffc000"}} onClick={resetFilter}> Reset </Button>
                </Stack>
            </div>
            <Grid
                container
                columnSpacing={{ xs: 1, sm: 1, md: 1 }}
                rowSpacing={{ xs: 2, md: 5 }}
                columns={{ xs: 2, sm: 6, md: 12 }}
                justifyContent={"space-evenly"}
                sx={{ my: 6 }}>
                {characterList.length !== 0 ? characterList.map((character, i) => {
                    return <Grid key={i} size={{ xs: 1, sm: 2, md: 3 }} display="flex" justifyContent={'center'}>
                        <CharacterCard characterName={character} key={character + "Card"} />
                    </Grid>
                }) : <Typography variant="body2" component="h2" sx={{ mt: 3, mb: 6, maxWidth: 900 }}> No characters found. </Typography>
                }
            </Grid>
        </>
    )
}