import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import RarityStars from './RarityStars';
import StarButton from './StarButton';
import "../style/Card.css"
import "../style/StarButton.css"

export default function EasterEgg() {
  return (
    <Card sx={{ maxWidth: 250, m: 1 }} className="box">
      <a href={`#`} className="cardLink box">
        <CardMedia
          component="img"
          alt="Paimon"
          height="250"
          image="../src/img/emergencyfood.jpg"
        />
      </a>
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Typography gutterBottom variant="h6" component="div">
            Emergency Food
          </Typography>
          <StarButton />
        </Stack>
        <RarityStars rarity={6} />
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
          ???
        </Typography>
      </CardContent>
    </Card>
  );
}