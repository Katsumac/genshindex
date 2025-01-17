import { useState, useEffect } from 'react';

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import RarityStars from "./RarityStars";
import StarButton from "./StarButton";
import artifactPieceSelector from "../js/artifactPieceSelector";
import rarityColourSelector from "../js/rarityColourSelector";
import "../style/Card.css"
import "../style/StarButton.css"

export default function ArtifactCard({ artifactName }) {

  const [artifactData, setArtifactData] = useState("");
  const [artifactIcon, setArtifactIcon] = useState("");

  useEffect(() => {
    // Fetch information regarding the artifact
    fetch(`https://genshin.jmp.blue/artifacts/${artifactName}`)
      .then(response => response.json())
      .then(data => setArtifactData(data))
      .catch(e => `Error: ${e}`);

    // Fetch the image of the artifact. Depending on the artifact, it may use the Flower of Life or Circlet of Logos image
    fetch(`https://genshin.jmp.blue/artifacts/${artifactName}/${artifactPieceSelector(artifactName)}`)
      .then(response => response.blob())
      .then(blob => setArtifactIcon(URL.createObjectURL(blob)))
      .catch(e => `Error: ${e}`);

  }, []);

  return (
    <Card sx={{ maxWidth: 250, m: 1 }} className="box">
      <a href={`./artifacts/${artifactName}`} className="cardLink box">
        <CardMedia
          component="img"
          alt={artifactData.name}
          height="250"
          image={artifactIcon}
          sx={{ bgcolor: rarityColourSelector(artifactData.max_rarity) }}
        />
      </a>
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Typography gutterBottom variant="h6" component="div">
            {artifactData.name}
          </Typography>
          <StarButton />
        </Stack>
        <RarityStars rarity={artifactData.max_rarity} entityName={artifactData.name} />
      </CardContent>
    </Card>
  );
}