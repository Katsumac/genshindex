import Typography from '@mui/material/Typography';
import "./style/NotFound.css"

export default function NotFound() {
    return (
        <div>
            <Typography variant="h3" component="h2" sx={{mb: 6}}>Uh oh! Paimon couldn't find the page!</Typography>
            <img src="./src/img/surprisedPaimon.png" id="surprisedPaimon"/>
            <Typography variant="body1" component="h2" sx={{mt: 4}}>How about we explore the page ahead of us later?</Typography>
        </div>
    )
}