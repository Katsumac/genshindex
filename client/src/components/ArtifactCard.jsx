import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import RarityStars from './RarityStars';
import "../style/Card.css"

import rarityColourSelector from '../js/rarityColourSelector';

export default function ArtifactCard({artifactName}) {

    const [artifactData, setArtifactData] = useState("");
    const [artifactIcon, setArtifactIcon] = useState("");
    
    const artifactPiece = () => {
        if (artifactName.substring(0, 7) === "prayers") {
            return "circlet-of-logos";
        }
        return "flower-of-life";
    }

    useEffect(() => {
        fetch(`https://genshin.jmp.blue/artifacts/${artifactName}`)
        .then(response => response.json())
        .then(data => setArtifactData(data))
        .catch(e => `Error: ${e}`);

        fetch(`https://genshin.jmp.blue/artifacts/${artifactName}/${artifactPiece()}`)
        .then(response => response.blob())
        .then(blob => setArtifactIcon(URL.createObjectURL(blob)))
        .catch(e => `Error: ${e}`);

        document.title = "Artifacts | Genshindex";
    }, []);

        return (
        <Card sx={{ maxWidth: 250, m: 1 }} className="box">
          <a href={`./artifacts/${artifactName}`} className="cardLink box">
          <CardMedia
            component="img"
            alt={artifactData.name}
            height="250"
            image={artifactIcon}
            sx={{bgcolor: rarityColourSelector(artifactData.max_rarity)}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {artifactData.name}
            </Typography>
            <RarityStars rarity={artifactData.max_rarity} entityName={artifactData.name} />
          </CardContent>
          </a>
        </Card>
      );
    }