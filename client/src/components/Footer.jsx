import Grid from '@mui/material/Grid2'
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import Link from "@mui/material/Link";
import "../style/Footer.css"

export default function Footer() {
    return (
        <div id="bottomDiv">
            <div id="footer">
                <Grid
                    container
                    columnSpacing={{ xs: 1, sm: 1, md: 1 }}
                    rowSpacing={{ xs: 2, md: 5 }}
                    columns={{ xs: 2, sm: 6, md: 12 }}
                    sx={{ mb: 4 }}>
                    <Grid size={{ xs: 1, sm: 2, md: 3 }} display="flex" justifyContent={'center'} sx={{mt: 2}}>
                        <Stack direction="column" spacing={2} justifyContent="center">
                            <Typography variant="h5" sx={{ ml: 3, mb: 3 }}>Data</Typography>
                            <Link href="/characters" className="footerLink" variant="body2" underline="none" sx={{ ml: 3, mb: 3 }}>Characters</Link>
                            <Link href="/weapons" className="footerLink" variant="body2" underline="none" sx={{ ml: 3, mb: 3 }}>Weapons</Link>
                            <Link href="/artifacts" className="footerLink" variant="body2" underline="none" sx={{ ml: 3, mb: 3 }}>Artifacts</Link>
                            <Link href="/food" className="footerLink" variant="body2" underline="none" sx={{ ml: 3, mb: 3 }}>Food</Link>
                        </Stack>
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