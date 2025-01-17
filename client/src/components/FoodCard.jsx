import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import RarityStars from './RarityStars';
import StarButton from './StarButton';
import "../style/Card.css"
import "../style/StarButton.css"
import rarityColourSelector from '../js/rarityColourSelector';

export default function FoodCard({ foodName }) {

  const [foodData, setFoodData] = useState("");
  const [foodIcon, setFoodIcon] = useState("");

  useEffect(() => {
    fetch(`https://genshin.jmp.blue/consumables/food`)
      .then(response => response.json())
      .then(data => setFoodData(data))
      .catch(e => `Error: ${e}`);

    fetch(`https://genshin.jmp.blue/consumables/food/${foodName}`)
      .then(response => response.blob())
      .then(blob => setFoodIcon(URL.createObjectURL(blob)))
      .catch(e => console.log(`Error: ${e}`));


  }, [foodName]);

  return (
    <Card sx={{ maxWidth: 250, m: 1 }} className="box">
      <a href={`./food/${foodName}`} className="cardLink box">
        <CardMedia
          component="img"
          alt={foodData && foodData[foodName].name}
          height="250"
          image={foodIcon}
          sx={{ bgcolor: rarityColourSelector(foodData && foodData[foodName].rarity) }}
        />
      </a>
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Typography gutterBottom variant="h6" component="div">
            {foodData && foodData[foodName].name}
          </Typography>
          <StarButton />
        </Stack>
        <RarityStars rarity={foodData && foodData[foodName].rarity} entityName={foodData && foodData[foodName].name} />
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
          {foodData && foodData[foodName].type}
        </Typography>
      </CardContent>
    </Card>
  );
}