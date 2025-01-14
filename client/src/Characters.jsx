import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography';
import CharacterCard from "./components/CharacterCard";
import SearchBar from './components/SearchBar';
import "./style/Paragraph.css"

export default function Characters() {

    const [characterList, setCharacterList] = useState([]);
        
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

    return (
        <>
            <Typography variant="h3" component="h2" sx={{mb: 6}}>Characters</Typography>
            <div className="searchBar">
                <SearchBar runQuery={searchCharacters} />
            </div>
            <div className="paragraph">
                <Typography variant="body2" component="h2" sx={{mt: 3, mb: 6, maxWidth: 900}}>
                    For the Kamisato siblings, please search by their first name.
                    If a character's name has two or more words, you may need use a dash in place of a space.
                    For example: "traveler-anemo", or "arataki-itto".
                    Of course, you may search with part of their names instead.</Typography>
            </div>
            <Grid
                container
                columnSpacing={{xs: 1, sm: 1, md: 1}}
                rowSpacing={{xs: 2, md: 5}}
                columns={{xs: 2, sm: 6, md: 12}}
                justifyContent={"space-evenly"}
                sx={{my: 6}}>
                    {characterList.length !== 0 ? characterList.map((character, i) => {
                        return <Grid key={i} size={{xs: 1, sm: 2, md: 3}} display="flex" justifyContent={'center'}>
                                    <CharacterCard characterName={character} key={character + "Card"}/>
                                </Grid>
                        }) : <Typography variant="body2" component="h2" sx={{mt: 3, mb: 6, maxWidth: 900}}> No characters found. </Typography>
                    }
            </Grid>
        </>
    )
}