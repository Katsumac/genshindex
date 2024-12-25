import { useEffect, useState } from "react";

import Navbar from './components/navbar';
import BioTable from "./components/BioTable";
import AbilityTable from "./components/AbilityTable";
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

        const bioData = [
            {category: "Rarity", description: characterData.rarity},
            {category: "Vision", description: characterData.vision},
            {category: "Weapon", description: characterData.weapon},
            {category: "Constellation Name", description: characterData.constellation},
            {category: "Gender", description: characterData.gender},
            {category: "Birthday", description: new Date(characterData.birthday).toLocaleString("default", {month: "long", day: "numeric"})},
            {category: "Nation", description: characterData.nation},
            {category: "Affiliation", description: characterData.affiliation},
            {category: "Title", description: characterData.title},
            {category: "Description", description: characterData.description},
            {category: "Release Date", description: new Date(characterData.release).toLocaleString("default", {year: "numeric", month: "long", day: "numeric"})}
        ];

        return (
            <div>
                <Navbar />

                <Typography variant="h3" component="h2" sx={{mb: 6}}>{ characterData.name }</Typography>
                <img src={characterIcon} id="characterIcon" />

                <Typography variant ="h4" component="h2" sx={{mt: 6, mb: 1}}>Bio</Typography>
                
                <BioTable bioData={bioData}/>
                
                <Typography variant ="h4" component="h2" sx={{mt: 3, mb: 1}}>Skills</Typography>
                {characterData && <AbilityTable abilityData={characterData.skillTalents}/>}

                <Typography variant ="h4" component="h2" sx={{mt: 3, mb: 1}}>Passive Talents</Typography>
                {characterData && <AbilityTable abilityData={characterData.passiveTalents}/>}
                    
                <Typography variant ="h4" component="h2" sx={{mt: 3, mb: 1}}>Constellations</Typography>
                {characterData && <AbilityTable abilityData={characterData.constellations}/>}
  
            </div>
        )
}