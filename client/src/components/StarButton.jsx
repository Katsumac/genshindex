import { useState } from 'react';

import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import "../style/StarButton.css"

export default function StarButton() {
    const [isFilled, setIsFilled] = useState(false);

    const handleClick = () => {
        setIsFilled(!isFilled);
    }

    return (
        <>
        {isFilled ? <StarIcon className="star" fontSize="large" onClick={handleClick} /> : <StarOutlineIcon className="star" fontSize="large" onClick={handleClick} sx={{mx: "auto"}} />}
        </>
    )
}