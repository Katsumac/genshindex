import StarIcon from '@mui/icons-material/Star';

export default function RarityStars({rarity, characterName}) {
    const stars = [];

    for (let i = 1; i <= rarity; i++) {
        stars.push(<StarIcon fontSize="medium" key={characterName + "Star" + i} sx={{mb: 1}} style={{color: "#ffc000"}} />);
    }
    return (
        <span>
            {stars.map((star) => star)}
        </span>
    )
}