import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography';
import FoodCard from "./components/FoodCard"
import EasterEgg from './components/EasterEgg';

export default function Foods() {

    const [foodList, setFoodList] = useState([]);

    useEffect(() => {
        fetch("https://genshin.jmp.blue/consumables/food")
        .then(response => response.json())
        .then(data => setFoodList(data))
        .catch(e => console.log(`Error: ${e}`));

        document.title = "Food | GenshinDex"
    })

    return(
        <>
            <Typography variant="h3" component="h2" sx={{mb: 6}}>Food</Typography>
            <Grid
                container
                columnSpacing={{xs: 1, sm: 1, md: 1}}
                rowSpacing={{xs: 2, md: 5}}
                columns={{xs: 2, sm: 6, md: 12}}
                justifyContent={"space-evenly"}
                sx={{mb: 6}}>
                    {Object.entries(foodList).map((food, i) => {
                        if (food[0] === "id") return
                        return <Grid key={i} size={{xs: 1, sm: 2, md: 3}} display="flex" justifyContent={'center'}>
                                    <FoodCard foodName={food[0]} />
                               </Grid>
                    })}
                <EasterEgg />
            </Grid>
        </>
    )
}