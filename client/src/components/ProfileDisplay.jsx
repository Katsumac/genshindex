import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ProfileDisplay() {
    return (
        <div>
            <Card sx={{ width:{xs: 300, md: 400}, mx: 2 }} style={{ textAlign: "center" }}>
                <CardContent>
                    <Typography variant="h4" sx={{ mb: 2 }}>Username</Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>Email</Typography>
                </CardContent>
                <a href="./editprofile"><Button variant="contained" sx={{ mb: 4 }}>Edit Profile</Button></a>
            </Card>
        </div>
    )
}