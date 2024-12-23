import { useEffect, useState } from "react";

import Navbar from './components/navbar';
import EditProfileForm from "./components/EditProfileForm";
import Typography from '@mui/material/Typography';

export default function EditProfile() {
        const [message, setMessage] = useState("");
    
        useEffect(() => {
            // fetch("http://localhost:8080/editprofile")
            //     .then(response => response.json())
            //     .then(data => setMessage(data.message))
            //     .catch(e => `Error: ${e}`);
            document.title = "GenshinDex - Edit Profile";
        }, []);
    
        return (
            <div>
                <Navbar />
                <Typography variant="h2" gutterBottom> Edit Profile </Typography>
                <EditProfileForm />
                {/* <h1>{ message }</h1> */}
            </div>
        )
}