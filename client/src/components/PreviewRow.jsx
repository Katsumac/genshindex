import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CharacterCard from "./CharacterCard";
import WeaponCard from "./WeaponCard";
import ArtifactCard from "./ArtifactCard";
import FoodCard from "./FoodCard";
import "../style/PreviewRow.css";

export default function PreviewRow({ title, destination, dataList }) {
    return (
        <div>
            <Grid container justifyContent={"space-between"}>
                <Typography variant="h5" sx={{ ml: 3, mb: 3 }}>{title}</Typography>
                <Link href={destination} variant="h5" className="rowLink" underline="none" sx={{ mr: 3 }} >View More</Link>
            </Grid>

            <Grid
                container
                columnSpacing={{ xs: 1, sm: 1, md: 1 }}
                rowSpacing={{ xs: 2, md: 5 }}
                columns={{ xs: 2, sm: 6, md: 12 }}
                justifyContent={"space-evenly"}
                sx={{ mb: 12 }}>
                {dataList.map((data, i) => {
                    // Depending on which data is used, render a different card
                    return <Grid key={i} size={{ xs: 1, sm: 2, md: 3 }} display="flex" justifyContent={"center"}>
                        {title === "Characters" && <CharacterCard characterName={data} key={data + "Card"} />}
                        {title === "Weapons" && <WeaponCard weaponName={data} key={data + "Card"} />}
                        {title === "Artifacts" && <ArtifactCard artifactName={data} key={data + "Card"} />}
                        {title === "Food" && <FoodCard foodName={data[0]} key={data + "Card"} />}
                    </Grid>
                })}
            </Grid>
        </div>
    )
}