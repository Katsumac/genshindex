import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import StarButton from "./components/StarButton";
import SummaryTable from "./components/SummaryTable";
import AbilityTable from "./components/AbilityTable";
import RarityStars from "./components/RarityStars";
import Typography from "@mui/material/Typography";
import "./style/Info.css";

export default function CharacterInfo() {

    const [characterData, setCharacterData] = useState("");
    const [characterIcon, setCharacterIcon] = useState("");
    // Gets the character name via the "name" param
    const characterName = useParams().name;

    useEffect(() => {
        // Fetch information regarding the character
        fetch(`https://genshin.jmp.blue/characters/${characterName}`)
            .then(response => response.json())
            .then(data => {
                setCharacterData(data);
                document.title = `${data.name} | GenshinDex`;
            })
            .catch(e => `Error: ${e}`);

        // Fetch the image of the character
        fetch(`https://genshin.jmp.blue/characters/${characterName}/icon-big`)
            .then(response => response.blob())
            .then(blob => setCharacterIcon(URL.createObjectURL(blob)))
            .catch(e => `Error: ${e}`);
    }, []);

    // Data to be passed to the summary table
    const summaryData = [
        { category: "Rarity", description: <RarityStars rarity={characterData.rarity} entityName={characterData.name} /> },
        { category: "Vision", description: characterData.vision },
        { category: "Weapon", description: characterData.weapon },
        { category: "Constellation Name", description: characterData.constellation },
        { category: "Gender", description: characterData.gender },
        { category: "Birthday", description: new Date(characterData.birthday).toLocaleString("default", { month: "long", day: "numeric" }) },
        { category: "Nation", description: characterData.nation },
        { category: "Affiliation", description: characterData.affiliation },
        { category: "Title", description: characterData.title },
        { category: "Description", description: characterData.description },
        { category: "Release Date", description: new Date(characterData.release).toLocaleString("default", { year: "numeric", month: "long", day: "numeric" }) }
    ];

    return (
        <div>
            <Typography variant="h3" component="h2" sx={{ mb: 6 }}>{characterData.name}</Typography>
            <img src={characterIcon} id="icon" />

            <Typography variant="h6" component="h2" sx={{ mt: 3, mb: 1 }} >Favourite
            </Typography>

            <div id="starDiv"><StarButton /></div>

            <Typography variant="h4" component="h2" sx={{ mt: 6, mb: 1 }}>Bio</Typography>

            <SummaryTable summaryData={summaryData} />

            <Typography variant="h4" component="h2" sx={{ mt: 3, mb: 1 }}>Skills</Typography>
            {characterData && <AbilityTable abilityData={characterData.skillTalents} secondColName="Type" />}

            <Typography variant="h4" component="h2" sx={{ mt: 3, mb: 1 }}>Passive Talents</Typography>
            {characterData && <AbilityTable abilityData={characterData.passiveTalents} secondColName="Requirement" />}

            <Typography variant="h4" component="h2" sx={{ mt: 3, mb: 1 }}>Constellations</Typography>
            {characterData && <AbilityTable abilityData={characterData.constellations} secondColName="Level" />}

        </div>
    )
}