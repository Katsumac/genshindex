import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography';
import FoodCard from "./components/FoodCard"
import EasterEggCard from './components/EasterEggCard';
import SearchBar from './components/SearchBar';
import "./style/Paragraph.css"

export default function Foods() {

    const [foodList, setFoodList] = useState([]);

    useEffect(() => {
        fetch("https://genshin.jmp.blue/consumables/food")
        .then(response => response.json())

        .then(data => setFoodList(data))
        .catch(e => console.log(`Error: ${e}`));

        document.title = "Food | GenshinDex"
    }, [])

    const searchFood = (query) => {
        fetch("https://genshin.jmp.blue/consumables/food")
        .then(response => response.json())
        .then(data => {
            for (const key in data) {
                if (!key.includes(query)) {
                    delete data[key];
                }
            }
            setFoodList(data);
        })
        .catch(e => `Error: ${e}`);
    }

    return(
        <>
            <Typography variant="h3" component="h2" sx={{mb: 6}}>Food</Typography>
            <div className="searchBar">
                <SearchBar runQuery={searchFood} />
            </div>
            <div className="paragraph">
                <Typography variant="body2" component="h2" sx={{mt: 3, mb: 6, maxWidth: 900}}>
                    For "Pile 'Em Up", please search by "pile-em-up" &#40;without quotations&#41;.
                    If a food's name has two or more words, you may need use a dash in place of a space.
                    For example: "almond-tofu", or "egg-roll".
                    Of course, you may search with part of their names instead.</Typography>
            </div>            
            <Grid
                container
                columnSpacing={{xs: 1, sm: 1, md: 1}}
                rowSpacing={{xs: 2, md: 5}}
                columns={{xs: 2, sm: 6, md: 12}}
                justifyContent={"space-evenly"}
                sx={{mb: 6}}>
                    {(Object.keys(foodList).length) !== 0 ? Object.keys(foodList).map((food, i) => {
                        if (food === "id") return <EasterEggCard />
                        return <Grid key={i} size={{xs: 1, sm: 2, md: 3}} display="flex" justifyContent={'center'}>
                                    <FoodCard foodName={food} />
                               </Grid>
                        }) : <Typography variant="body2" component="h2" sx={{mt: 3, mb: 6, maxWidth: 900}}> No food found. </Typography>
                    }
                    
            </Grid>
        </>
    )
}