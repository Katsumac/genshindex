import { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";
import "./style/Login.css"

export default function Login() {
    // const [message, setMessage] = useState("");

    useEffect(() => {
        // fetch("http://localhost:8080/login")
        //     .then(response => response.json())
        //     .then(data => setMessage(data.message))
        //     .catch(e => `Error: ${e}`);
            document.title = "GenshinDex - Login";
    }, []);

    return (
        <div>
            <Typography variant="h2" gutterBottom> GenshinDex </Typography>
            <img src={"./src/img/paimonSmile.png"} />
            <LoginForm />
            {/* <h1>{ message }</h1> */}
        </div>
    )
}