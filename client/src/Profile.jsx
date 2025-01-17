import { useEffect } from "react";

import ProfileDisplay from "./components/ProfileDisplay";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function Profile() {

    useEffect(() => {
        document.title = "Your Profile | GenshinDex";
    }, []);

    return (
        <div>
            <Typography variant="h3" component="h2" sx={{ mb: 6 }}>Your Profile</Typography>
            <Stack direction="row" justifyContent="center" >
                <ProfileDisplay />
            </Stack>
        </div>
    )
}