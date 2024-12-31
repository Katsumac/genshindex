import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid2'
import CharacterCard from "./components/CharacterCard";

export default function Characters() {

    const [characterList, setCharacterList] = useState([]);

    useEffect(() => {
        fetch("https://genshin.jmp.blue/characters")
        .then(response => response.json())
        .then(data => setCharacterList(data))
        .catch(e => `Error: ${e}`);

        document.title = "Characters | Genshindex";
    }, [])

    return (
        <Grid
            container
            columnSpacing={{xs: 1, sm: 1, md: 1}}
            rowSpacing={{xs: 2, md: 5}}
            columns={{xs: 2, sm: 6, md: 12}}
            justifyContent={"space-evenly"}>
                {characterList.map((character, i) => {
                    return <Grid key={i} size={{xs: 1, sm: 2, md: 3}} display="flex" justifyContent={'center'}>
                                <CharacterCard characterName={character} key={character + "Card"}/>
                            </Grid>
                })}
        </Grid>
    )
}