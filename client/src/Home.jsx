import { useEffect, useState } from "react";

import Typography from "@mui/material/Typography";
import PreviewRow from "./components/PreviewRow";

export default function Home() {

    const [characterList, setCharacterList] = useState([]);
    const [weaponList, setWeaponList] = useState([]);
    const [artifactList, setArtifactList] = useState([]);
    const [foodList, setFoodList] = useState([]);

    useEffect(() => {
        // Fetch information regarding the first 4 characters
        fetch("https://genshin.jmp.blue/characters")
            .then(response => response.json())
            .then(data => setCharacterList(data.slice(0, 4)))
            .catch(e => console.log(`Error: ${e}`));

        // Fetch information regarding the first 4 weapons
        fetch("https://genshin.jmp.blue/weapons")
            .then(response => response.json())
            .then(data => setWeaponList(data.slice(0, 4)))
            .catch(e => console.log(`Error: ${e}`));

        // Fetch information regarding the first 4 artifacts
        fetch("https://genshin.jmp.blue/artifacts")
            .then(response => response.json())
            .then(data => setArtifactList(data.slice(0, 4)))
            .catch(e => console.log(`Error: ${e}`));

        // Fetch information regarding the first 4 foods
        fetch("https://genshin.jmp.blue/consumables/food")
            .then(response => response.json())
            .then(data => setFoodList(Object.entries(data).slice(0, 4)))
            .catch(e => console.log(`Error: ${e}`));

        document.title = "GenshinDex";
    }, []);

    return (
        <div>
            <Typography variant="h3" component="h2" sx={{ mb: 6 }}>Welcome to GenshinDex!</Typography>
            <Typography variant="h5" component="h2" sx={{ mb: 12 }}>Enjoy browsing Genshin's characters, weapons, artifacts, and food~</Typography>

            <PreviewRow title="Characters" destination="/characters" dataList={characterList} />

            <PreviewRow title="Weapons" destination="/weapons" dataList={weaponList} />

            <PreviewRow title="Artifacts" destination="/artifacts" dataList={artifactList} />

            <PreviewRow title="Food" destination="/food" dataList={foodList} />
        </div>
    )
}