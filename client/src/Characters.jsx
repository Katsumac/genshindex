import { useState, useEffect } from 'react';

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
        <div>
            {characterList.map((character) => {
                return <CharacterCard characterName={character} key={character + "Card"}/>
            })}
        </div>
    )
}