import { useEffect, useState } from "react";

import Typography from "@mui/material/Typography";
import CharacterCard from "./components/CharacterCard";
import WeaponCard from "./components/WeaponCard";
import ArtifactCard from "./components/ArtifactCard";
import FoodCard from "./components/FoodCard";

export default function Home() {
    const [characterList, setCharacterList] = useState([]);
    const [weaponList, setWeaponList] = useState([]);
    const [artifactList, setArtifactList] = useState([]);
    const [foodList, setFoodList] = useState([]);

    useEffect(() => {
        fetch("https://genshin.jmp.blue/characters")
        .then(response => response.json())
        .then(data => setCharacterList(data.slice(0, 4)))
        .catch(e => console.log(`Error: ${e}`));

        fetch("https://genshin.jmp.blue/weapons")
        .then(response => response.json())
        .then(data => setWeaponList(data.slice(0, 4)))
        .catch(e => console.log(`Error: ${e}`));

        fetch("https://genshin.jmp.blue/artifacts")
        .then(response => response.json())
        .then(data => setArtifactList(data.slice(0, 4)))
        .catch(e => console.log(`Error: ${e}`));

        fetch("https://genshin.jmp.blue/consumables/food")
        .then(response => response.json())
        .then(data => setFoodList(Object.entries(data).slice(0, 4)))
        .catch(e => console.log(`Error: ${e}`));

        document.title = "GenshinDex";
    }, []);

    return (
        <div>
            <Typography variant="h3" component="h2" sx={{mb: 6}}>Welcome to GenshinDex!</Typography>
            {characterList.map(character => {
                return <CharacterCard characterName={character} />
            })}
            {weaponList.map(weapon => {
                return <WeaponCard weaponName={weapon} />
            })}
            {artifactList.map(artifact => {
                return <ArtifactCard artifactName={artifact} />
            })}
            {foodList.map(food => {
                return <FoodCard foodName={food[0]} />
            })}
            {/* <CharacterCard characterName="albedo" />
            <WeaponCard weaponName="harbinger-of-dawn" />
            <ArtifactCard artifactName="archaic-petra" />
            <FoodCard foodName="adeptus-temptation" /> */}
        </div>
    )
}