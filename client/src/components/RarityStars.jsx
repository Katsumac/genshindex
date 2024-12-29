import StarIcon from '@mui/icons-material/Star';

export default function RarityStars({rarity}) {
    const stars = [];

    for (let i = 1; i <= rarity; i++) {
        stars.push(<StarIcon fontSize="medium" style={{color: "#ffc000"}} />);
    }
    return (
        <span>
            {stars.map((star) => star)}
        </span>
    )
}