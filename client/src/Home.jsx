import { useEffect, useState } from "react";

import Grid from '@mui/material/Grid2'
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
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
<Grid
container justifyContent={"space-between"}>
<Typography variant="h5" sx={{ml: 3, mb: 3}}>Characters</Typography>
<Link href="/characters" variant="h5" underline="none" sx={{mr: 3}}>View More</Link>
</Grid>
            <Grid
                container
                columnSpacing={{xs: 1, sm: 1, md: 1}}
                rowSpacing={{xs: 2, md: 5}}
                columns={{xs: 2, sm: 6, md: 12}}
                justifyContent={"space-evenly"}
                sx={{mb: 6}}>
                    {characterList.map((character, i) => {
                        return <Grid key={i} size={{xs: 1, sm: 2, md: 3}} display="flex" justifyContent={'center'}>
                                    <CharacterCard characterName={character} key={character + "Card"}/>
                                </Grid>
                    })}
            </Grid>

            <Typography variant="h5" sx={{mb: 3}}>Weapons</Typography>
            {weaponList.map(weapon => {
                return <WeaponCard weaponName={weapon} />
            })}

            <Typography variant="h5" sx={{mb: 3}}>Artifacts</Typography>
            {artifactList.map(artifact => {
                return <ArtifactCard artifactName={artifact} />
            })}

            <Typography variant="h5" sx={{mb: 3}}>Food</Typography>            
            {foodList.map(food => {
                return <FoodCard foodName={food[0]} />
            })}
        </div>
    )
}