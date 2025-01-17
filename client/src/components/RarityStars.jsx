import StarIcon from '@mui/icons-material/Star';
import "../style/RarityStars.css"

export default function RarityStars({rarity, entityName}) {
    
    const stars = [];

    for (let i = 1; i <= rarity; i++) {
        stars.push(<StarIcon fontSize="medium" key={entityName + "Star" + i} className="rarityStar" />);
    }
    
    return (
        <span className="starsSpan">
            {stars.map((star) => star)}
        </span>
    )
}