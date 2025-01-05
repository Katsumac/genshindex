import { useEffect, useState } from "react";

import RegistrationForm from "./components/RegistrationForm.jsx";
import Typography from '@mui/material/Typography';

export default function Registration() {
        const [message, setMessage] = useState("");
    
        useEffect(() => {
            // fetch("http://localhost:8080/registration")
            //     .then(response => response.json())
            //     .then(data => setMessage(data.message))
            //     .catch(e => `Error: ${e}`);
            document.title = "Registration | Genshindex";
        }, []);
    
        return (
            <div>
                <Typography variant="h2" gutterBottom sx={{mt: 5}}> GenshinDex </Typography>
                <RegistrationForm />
                {/* <h1>{ message }</h1> */}
            </div>
        )
}