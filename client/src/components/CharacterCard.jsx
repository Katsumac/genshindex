import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import RarityStars from './RarityStars';
import colorSelector from '../js/colourSelector';

export default function CharacterCard() {

    const [characterData, setCharacterData] = useState("");
    const [characterIcon, setCharacterIcon] = useState("");

    useEffect(() => {
        fetch("https://genshin.jmp.blue/characters/eula")
        .then(response => response.json())
        .then(data => setCharacterData(data))
        .catch(e => `Error: ${e}`);

        fetch("https://genshin.jmp.blue/characters/eula/icon-big")
        .then(response => response.blob())
        .then(blob => setCharacterIcon(URL.createObjectURL(blob)))
        .catch(e => `Error: ${e}`);

        document.title = "Characters | Genshindex";
    }, []);


        return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt={characterData.name}
            height="250"
            image={characterIcon}
            sx={{bgcolor: colorSelector(characterData.vision)}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {characterData.name}
            </Typography>
            <RarityStars rarity={Number(characterData.rarity)} />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {characterData.vision}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {characterData.weapon}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {characterData.description}
            </Typography>
          </CardContent>
        </Card>
      );
    }