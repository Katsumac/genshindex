import { useEffect } from "react";

import LoginForm from "./components/LoginForm";
import Typography from '@mui/material/Typography';
import "./style/Login.css"

export default function Login() {
    
    useEffect(() => {
            document.title = "Login | GenshinDex";
    }, []);

    return (
        <div>
            <Typography variant="h3" component="h2" sx={{mb: 6}}>GenshinDex</Typography>
            <img src={"./src/img/paimonSmile.png"} id="paimonImg" />
            <LoginForm />
        </div>
    )
}