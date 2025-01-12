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

export default function WeaponCard({weaponName}) {

    const [weaponData, setWeaponData] = useState("");
    const [weaponIcon, setWeaponIcon] = useState("");

    useEffect(() => {
        fetch(`https://genshin.jmp.blue/weapons/${weaponName}`)
        .then(response => response.json())
        .then(data => setWeaponData(data))
        .catch(e => `Error: ${e}`);

        fetch(`https://genshin.jmp.blue/weapons/${weaponName}/icon`)
        .then(response => response.blob())
        .then(blob => setWeaponIcon(URL.createObjectURL(blob)))
        .catch(e => `Error: ${e}`);

    }, []);

        return (
        <Card sx={{ maxWidth: 250, m: 1 }} className="box">
          <a href={`./weapons/${weaponName}`} className="cardLink box">
          <CardMedia
            component="img"
            alt={weaponData.name}
            height="250"
            image={weaponIcon}
            sx={{bgcolor: rarityColourSelector(weaponData.rarity)}}
          />
          </a>
          <CardContent>
            <Stack direction="row" justifyContent="space-between">
              <Typography gutterBottom variant="h6" component="div">
                {weaponData.name}
              </Typography>
              <StarButton />
            </Stack>
            <RarityStars rarity={weaponData.rarity} entityName={weaponData.name} />
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                {weaponData.type}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {weaponData.subStat}
            </Typography>
          </CardContent>
        </Card>
      );
    }