import { useEffect, useState } from "react";

import LoginForm from "./components/LoginForm";
import Typography from "@mui/material/Typography";
import "./style/Login.css";

export default function Login() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/users")
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(err => {
                console.log(err);
            })
        document.title = "Login | GenshinDex";
    }, [])


    return (
        <div>
            <Typography variant="h3" component="h2" sx={{ mb: 6 }}>GenshinDex</Typography>
            <img src={"/paimonSmile.png"} id="paimonImg" />
            <LoginForm />
            {users.map((data) => {
                return <p>{data.Username}</p>
            })}
        </div>
    )
}