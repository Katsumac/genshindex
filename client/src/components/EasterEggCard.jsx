import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import RarityStars from './RarityStars';
import "../style/Card.css"
import "../style/StarButton.css"

export default function EasterEggCard() {
  return (
    <Card sx={{ maxWidth: 250, m: 1 }} className="box">
      <a href={"/paimon"} className="cardLink box">
        <CardMedia
          component="img"
          alt="Paimon"
          height="250"
          image="/emergencyfood.jpg"
        />
      </a>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Paimon
        </Typography>
        <RarityStars rarity={6} />
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
          Emergency Food
        </Typography>
      </CardContent>
    </Card>
  );
}