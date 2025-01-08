import { useEffect, useState } from "react";

import Typography from "@mui/material/Typography";
import CharacterCard from "./components/CharacterCard";
import WeaponCard from "./components/WeaponCard";
import ArtifactCard from "./components/ArtifactCard";
import FoodCard from "./components/FoodCard";

export default function Home() {
    const [characterData, setCharacterData] = useState("");
    const [weaponData, setWeaponData] = useState("");
    const [artifactData, setArtifactData] = useState("");
    const [foodData, setFoodData] = useState("");

    useEffect(() => {
        fetch("https://genshin.jmp.blue/characters")
        .then(response => response.json())
        .then(data => setCharacterData(data))
        .catch(e => console.log(`Error: ${e}`));

        fetch("https://genshin.jmp.blue/weapons")
        .then(response => response.json())
        .then(data => setWeaponData(data))
        .catch(e => console.log(`Error: ${e}`));

        fetch("https://genshin.jmp.blue/artifacts")
        .then(response => response.json())
        .then(data => setArtifactData(data))
        .catch(e => console.log(`Error: ${e}`));

        fetch("https://genshin.jmp.blue/consumables/food")
        .then(response => response.json())
        .then(data => setFoodData(data))
        .catch(e => console.log(`Error: ${e}`));

        document.title = "GenshinDex";
    }, []);

    return (
        <div>
            <Typography variant="h3" component="h2" sx={{mb: 6}}>Welcome to GenshinDex!</Typography>
            <CharacterCard characterName="albedo" />
            <WeaponCard weaponName="harbinger-of-dawn" />
            <ArtifactCard artifactName="archaic-petra" />
            <FoodCard foodName="adeptus-temptation" />
        </div>
    )
}