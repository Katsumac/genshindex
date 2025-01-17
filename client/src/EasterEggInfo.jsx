import { useEffect } from 'react';

import Typography from '@mui/material/Typography';
import "./style/EasterEggInfo.css"

export default function EasterEggInfo() {

    useEffect(() => {
        document.title = "Paimon | GenshinDex"
    }, [])

    return(
        <div>
            <Typography variant="h3" component="h2" sx={{mb: 6}}>Paimon</Typography>
            <img src="./src/img/angryPaimon.jpg" alt="Paimon is not Emergency Food!" id="angryPaimon" />
        </div>
    )
}