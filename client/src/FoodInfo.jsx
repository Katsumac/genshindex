import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import StarButton from "./components/StarButton";
import SummaryTable from "./components/SummaryTable";
import RarityStars from "./components/RarityStars";
import Typography from "@mui/material/Typography";
import "./style/Info.css"

export default function FoodInfo() {
        const [foodData, setFoodData] = useState("");
        const [foodIcon, setFoodIcon] = useState("");
        const foodName = useParams().name;

        useEffect(() => {
            fetch(`https://genshin.jmp.blue/consumables/food`)
            .then(response => response.json())
            .then(data => {
                setFoodData(data);
                document.title = `${data[foodName].name} | GenshinDex`;
            })
            .catch(e => `Error: ${e}`);

            fetch(`https://genshin.jmp.blue/consumables/food/${foodName}`)
            .then(response => response.blob())
            .then(blob => setFoodIcon(URL.createObjectURL(blob)))
            .catch(e => `Error: ${e}`);
        }, []);

        const summaryData = [
            {category: "Rarity", description: <RarityStars rarity={foodData && foodData[foodName].rarity} entityName={foodData && foodData[foodName].name} />},
            {category: "Type", description: foodData && foodData[foodName].type},
            {category: "Effect", description: foodData && foodData[foodName].effect},
            {category: "Description", description: foodData && foodData[foodName].description},
            {category: "Recipe", description: foodData && foodData[foodName].recipe},
        ];

        return (
            <div>
                <Typography variant="h3" component="h2" sx={{mb: 6}}>{foodData && foodData[foodName].name }</Typography>
                <img src={foodData && foodIcon} id="icon" />
    
                <Typography variant ="h6" component="h2" sx={{mt: 3, mb: 1}} >Favourite 
                </Typography>

                <div id="starDiv"><StarButton /></div>

                <Typography variant ="h4" component="h2" sx={{mt: 6, mb: 1}}>Info</Typography>
                
                <SummaryTable summaryData={summaryData}/>
  
            </div>
        )
}