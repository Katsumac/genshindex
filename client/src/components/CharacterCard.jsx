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

import elementColourSelector from '../js/elementColourSelector';

export default function CharacterCard({ characterName }) {

  const [characterData, setCharacterData] = useState("");
  const [characterIcon, setCharacterIcon] = useState("");

  useEffect(() => {
    // Fetch information regarding the character
    fetch(`https://genshin.jmp.blue/characters/${characterName}`)
      .then(response => response.json())
      .then(data => setCharacterData(data))
      .catch(e => `Error: ${e}`);

    // Fetch the image of the character
    fetch(`https://genshin.jmp.blue/characters/${characterName}/icon-big`)
      .then(response => response.blob())
      .then(blob => setCharacterIcon(URL.createObjectURL(blob)))
      .catch(e => `Error: ${e}`);

  }, []);

  return (
    <Card sx={{ maxWidth: 250, m: 1 }} className="box">
      <a href={`./characters/${characterName}`} className="cardLink box">
        <CardMedia
          component="img"
          alt={characterData.name}
          height="250"
          image={characterIcon}
          sx={{ bgcolor: elementColourSelector(characterData.vision) }}
        />
      </a>
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Typography gutterBottom variant="h6" component="div">
            {characterData.name}
          </Typography>
          <StarButton />
        </Stack>
        <RarityStars rarity={characterData.rarity} entityName={characterData.name} />
        <Typography variant="body2" sx={{ color: elementColourSelector(characterData.vision), mt: 1 }}>
          {characterData.vision}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {characterData.weapon}
        </Typography>
      </CardContent>
    </Card>
  );
}