import { useEffect } from "react";

import EditProfileForm from "./components/EditProfileForm";
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";

export default function EditProfile() {    
        useEffect(() => {
            document.title = "Edit Profile | GenshinDex";
        }, []);
    
        return (
            <div>
                <Typography variant="h3" component="h2" sx={{ mb: 6 }}>Edit Profile</Typography>
                <Stack direction="row" justifyContent="center" >
                    <EditProfileForm />                
                </Stack>
            </div>
        )
}