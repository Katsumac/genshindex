import { useEffect, useState } from "react";

import ProfileDisplay from "./components/ProfileDisplay";
import Typography from "@mui/material/Typography";

export default function Profile() {
        const [message, setMessage] = useState("");
    
        useEffect(() => {
            // fetch("http://localhost:8080/profile")
            //     .then(response => response.json())
            //     .then(data => setMessage(data.message))
            //     .catch(e => `Error: ${e}`);
            document.title = "GenshinDex - Your Profile";
        }, []);
    
        return (
            <div>
                <Typography variant="h2" gutterBottom>Your Profile</Typography>
                <ProfileDisplay />
                {/* <h1>{ message }</h1> */}
            </div>
        )
}