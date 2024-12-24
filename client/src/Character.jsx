import { useEffect, useState } from "react";

import Navbar from './components/navbar';
import Typography from "@mui/material/Typography";
import "./style/Character.css"

export default function Character() {
        const [characterData, setCharacterData] = useState("");
        const [characterIcon, setCharacterIcon] = useState("");


        const fetchCharacterData = () => {

        }
        // const fetchCharacterIcon = async() => {
            // fetch("https://genshin.jmp.blue/characters/albedo/icon")
            // .then(response => response.blob())
            // .then(blob => setCharacterIcon(URL.createObjectURL(blob)))
            // .catch(e => `Error: ${e}`);
        // }

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

                <Typography variant ="h4" component="h2" sx={{mt: 3}}>Talents</Typography>

                <Typography variant ="body2" component="h2" style={{whiteSpace: "pre-wrap"}}>Normal Attack: { characterData && characterData.skillTalents[0].name } - { characterData && characterData.skillTalents[0].description }</Typography>
                <Typography variant ="body2" component="h2" style={{whiteSpace: "pre-wrap"}}>Elemental Skill: { characterData && characterData.skillTalents[1].name } - { characterData && characterData.skillTalents[1].description }</Typography>
                <Typography variant ="body2" component="h2" style={{whiteSpace: "pre-wrap"}}>Elemental Burst: { characterData && characterData.skillTalents[2].name } - { characterData && characterData.skillTalents[2].description }</Typography>
                {characterData && characterData.passiveTalents.map((talent) =>
                    <Typography variant ="body2" component="h2">Talent: { talent.name } - { talent.description }</Typography>
                )}
                    
                <Typography variant ="h4" component="h2" sx={{mt: 3}}>Constellations</Typography>

                {characterData && characterData.constellations.map((constellation) =>
                    <Typography variant ="body2" component="h2">Constellation: { constellation.name } - { constellation.description }</Typography>
                )}
  
            </div>
        )
}