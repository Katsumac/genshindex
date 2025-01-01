import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography';
import WeaponCard from "./components/WeaponCard"

export default function Weapons() {

    const [weaponList, setWeaponList] = useState([]);

    useEffect(() => {
        fetch("https://genshin.jmp.blue/weapons")
        .then(response => response.json())
        .then(data => setWeaponList(data))
        .catch(e => `Error: ${e}`);

        document.title = "Weapons | Genshindex";
    }, [])

    return (
        <>
        <Typography variant="h3" component="h2" sx={{mb: 6}}>Weapons</Typography>
        <Grid
            container
            columnSpacing={{xs: 1, sm: 1, md: 1}}
            rowSpacing={{xs: 2, md: 5}}
            columns={{xs: 2, sm: 6, md: 12}}
            justifyContent={"space-evenly"}
            sx={{mb: 6}}>
                {weaponList.map((weapon, i) => {
                    return <Grid key={i} size={{xs: 1, sm: 2, md: 3}} display="flex" justifyContent={'center'}>
                                <WeaponCard weaponName={weapon} key={weapon + "Card"}/>
                            </Grid>
                })}
        </Grid>
    </>
    )
}