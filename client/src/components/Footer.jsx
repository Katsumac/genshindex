import Grid from '@mui/material/Grid2'
import Typography from "@mui/material/Typography";
import "../style/Footer.css"

export default function Footer() {
    return (
        <div id="bottomDiv">
            <div style={{ backgroundColor: "green" }} id="footer">
                <Grid
                    container
                    columnSpacing={{ xs: 1, sm: 1, md: 1 }}
                    rowSpacing={{ xs: 2, md: 5 }}
                    columns={{ xs: 2, sm: 6, md: 12 }}
                    justifyContent={"space-evenly"}
                    sx={{ mb: 12 }}>
                    <Grid size={{ xs: 1, sm: 2, md: 3 }} display="flex" justifyContent={'center'}>
                        <Typography variant="h5" sx={{ ml: 3, mb: 3 }}>Hello</Typography>
                    </Grid>
                    <Grid size={{ xs: 1, sm: 2, md: 3 }} display="flex" justifyContent={'center'}>
                        <Typography variant="h5" sx={{ ml: 3, mb: 3 }}>Hello</Typography>
                    </Grid>
                    <Grid size={{ xs: 1, sm: 2, md: 3 }} display="flex" justifyContent={'center'}>
                        <Typography variant="h5" sx={{ ml: 3, mb: 3 }}>Hello</Typography>
                    </Grid>
                    <Grid size={{ xs: 1, sm: 2, md: 3 }} display="flex" justifyContent={'center'}>
                        <Typography variant="h5" sx={{ ml: 3, mb: 3 }}>Hello</Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}