import { useEffect, useState } from "react";

import StarButton from "./components/StarButton";
import BioTable from "./components/BioTable";
import AbilityTable from "./components/AbilityTable";
import Typography from "@mui/material/Typography";
import "./style/CharacterInfo.css"

export default function CharacterInfo() {
        const [characterData, setCharacterData] = useState("");
        const [characterIcon, setCharacterIcon] = useState("");

        useEffect(() => {
            fetch("https://genshin.jmp.blue/characters/albedo")
            .then(response => response.json())
            .then(data => {
                setCharacterData(data);
                document.title = `${data.name} | GenshinDex`;
            })
            .catch(e => `Error: ${e}`);

            fetch("https://genshin.jmp.blue/characters/albedo/icon-big")
            .then(response => response.blob())
            .then(blob => setCharacterIcon(URL.createObjectURL(blob)))
            .catch(e => `Error: ${e}`);
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
                <Typography variant="h3" component="h2" sx={{mb: 6}}>{ characterData.name }</Typography>
                <img src={characterIcon} id="characterIcon" />
    
                <Typography variant ="h6" component="h2" sx={{mt: 3, mb: 1}} >Favourite 
                </Typography>

                <div id="starDiv"><StarButton /></div>

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