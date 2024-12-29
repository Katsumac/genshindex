import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CharacterCard() {

    const [characterData, setCharacterData] = useState("");
    const [characterIcon, setCharacterIcon] = useState("");

    useEffect(() => {
        fetch("https://genshin.jmp.blue/characters/albedo")
        .then(response => response.json())
        .then(data => {
            setCharacterData(data);
            document.title = `${data.name} | GenshinDex`;
        })
        .catch(e => `Error: ${e}`);

        fetch("https://genshin.jmp.blue/characters/albedo/icon-big")
        .then(response => response.blob())
        .then(blob => setCharacterIcon(URL.createObjectURL(blob)))
        .catch(e => `Error: ${e}`);
    }, []);


        return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={characterIcon}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      );
    }