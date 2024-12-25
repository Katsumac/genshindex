import { useEffect, useState } from "react";

import Navbar from './components/navbar';
import CharacterDataTable from "./components/CharacterDataTable";
import Typography from "@mui/material/Typography";
import "./style/Character.css"

export default function Character() {
        const [characterData, setCharacterData] = useState("");
        const [characterIcon, setCharacterIcon] = useState("");

        useEffect(() => {
            fetch("https://genshin.jmp.blue/characters/albedo")
            .then(response => response.json())
            .then(data => setCharacterData(data))
            .catch(e => `Error: ${e}`);

            fetch("https://genshin.jmp.blue/characters/albedo/icon")
            .then(response => response.blob())
            .then(blob => setCharacterIcon(URL.createObjectURL(blob)))
            .catch(e => `Error: ${e}`);

            document.title = `${characterData.name} - GenshinDex`
        }, []);
    
        return (
            <div>
                <Navbar />
                <Typography variant="h3" component="h2">{ characterData.name }</Typography>
                <img src={characterIcon} id="characterIcon" />
                <Typography variant ="body2" component="h2">Title: { characterData.title }</Typography>
                <Typography variant ="body2" component="h2">Vision: { characterData.vision }</Typography>
                <Typography variant ="body2" component="h2">Weapon: { characterData.weapon }</Typography>
                <Typography variant ="body2" component="h2">Gender: { characterData.gender }</Typography>
                <Typography variant ="body2" component="h2">Nation: { characterData.nation }</Typography>
                <Typography variant ="body2" component="h2">Affiliation: { characterData.affiliation }</Typography>
                <Typography variant ="body2" component="h2">Rarity: { characterData.rarity }</Typography>
                <Typography variant ="body2" component="h2">Release Date: { characterData.release }</Typography>
                <Typography variant ="body2" component="h2">Constellation Name: { characterData.constellation }</Typography>
                <Typography variant ="body2" component="h2">Birthday: { characterData.birthday }</Typography>
                <Typography variant ="body2" component="h2">Description: { characterData.description }</Typography>

                <Typography variant ="h4" component="h2" sx={{mt: 3, mb: 1}}>Skills</Typography>
                {characterData && <CharacterDataTable abilityData={characterData.skillTalents}/>}

                <Typography variant ="h4" component="h2" sx={{mt: 3, mb: 1}}>Passive Talents</Typography>
                {characterData && <CharacterDataTable abilityData={characterData.passiveTalents}/>}
                    
                <Typography variant ="h4" component="h2" sx={{mt: 3, mb: 1}}>Constellations</Typography>
                {characterData && <CharacterDataTable abilityData={characterData.constellations}/>}
  
            </div>
        )
}