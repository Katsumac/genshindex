import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import "../style/Footer.css";

export default function Footer() {
    return (
        <div id="bottomDiv">
            <div id="footer">
                <Grid
                    container
                    columnSpacing={{ xs: 1, sm: 1, md: 1 }}
                    rowSpacing={{ xs: 2, md: 5 }}
                    columns={{ xs: 1, sm: 9, md: 12 }}
                    sx={{ mb: 4 }}>
                    <Grid size={{ xs: 1, sm: 2, md: 3 }} display="flex" justifyContent={{ xs: "flex-start", md: "center" }} sx={{ mt: 2, ml: { xs: 2, md: 0 } }}>
                        <Stack direction={{ xs: "row", md: "column" }} spacing={3} alignItems="center" justifyContent="center">
                            <Link href="/" variant="h5" underline="none" id="footerSiteTitle" sx={{
                                ml: 3,
                                mb: 3,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem"
                            }} >GenshinDex</Link>
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 1, sm: 2, md: 3 }} display="flex" justifyContent={{ xs: "flex-start", md: "center" }} sx={{ mt: 2, ml: { xs: 2, md: 0 } }}>
                        <Stack direction={{ xs: "row", sm: "column" }} alignItems="center" justifyContent="flex-start">
                            <Typography variant="h5" sx={{ ml: 3, mb: 3 }}>Data</Typography>
                            <Link href="/characters" className="footerLink" variant="body2" underline="none" sx={{ ml: 3, mb: 3 }}>Characters</Link>
                            <Link href="/weapons" className="footerLink" variant="body2" underline="none" sx={{ ml: 3, mb: 3 }}>Weapons</Link>
                            <Link href="/artifacts" className="footerLink" variant="body2" underline="none" sx={{ ml: 3, mb: 3 }}>Artifacts</Link>
                            <Link href="/food" className="footerLink" variant="body2" underline="none" sx={{ ml: 3, mb: 3 }}>Food</Link>
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 1, sm: 2, md: 3 }} display="flex" justifyContent={{ xs: "flex-start", md: "center" }} sx={{ mt: 2, ml: { xs: 2, md: 0 } }}>
                        <Stack direction={{ xs: "row", sm: "column" }} alignItems="center" justifyContent="flex-start">
                            <Typography variant="h5" sx={{ ml: 3, mb: 3 }}>Profile</Typography>
                            <Link href="/profile" className="footerLink" variant="body2" underline="none" sx={{ ml: 3, mb: 3 }}>Your Profile</Link>
                            <Link href="/editprofile" className="footerLink" variant="body2" underline="none" sx={{ ml: 3, mb: 3 }}>Edit Profile</Link>
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 1, sm: 2, md: 3 }} display="flex" justifyContent={{ xs: "flex-start", md: "center" }} sx={{ mt: 2, ml: { xs: 2, md: 0 } }}>
                        <Stack direction={{ xs: "row", sm: "column" }} alignItems="center" justifyContent="flex-start">
                            <Typography variant="h5" sx={{ ml: 3, mb: 3 }}>Info</Typography>
                            <Link href="/about" className="footerLink" variant="body2" underline="none" sx={{ ml: 3, mb: 3 }}>About</Link>
                            <Link href="/contact" className="footerLink" variant="body2" underline="none" sx={{ ml: 3, mb: 3 }}>Contact</Link>
                        </Stack>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}