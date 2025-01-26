import Typography from "@mui/material/Typography";
import "./style/EasterEggInfo.css";

export default function EasterEggInfo() {

    document.title = "Paimon | GenshinDex";

    return (
        <div>
            <Typography variant="h3" component="h2" sx={{ mb: 6 }}>Paimon</Typography>
            <img src="/angryPaimon.jpg" alt="Paimon is not Emergency Food!" id="angryPaimon" />
        </div>
    )
}