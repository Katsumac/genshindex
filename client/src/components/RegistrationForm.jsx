import { useState } from "react";

import FormButton from "./FormButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import "../style/Form.css";

export default function RegistrationForm() {

    const [inputData, setInputData] = useState({
        registrationEmail: "",
        registrationPassword: "",
        confirmRegistrationPassword: "",
        registrationUsername: ""
    });

    // Handle input changes for both email and password
    const handleInputChange = (e) => {
        setInputData(currentData => {
            currentData[e.target.name] = e.target.value;
            return { ...currentData };
        })
    }

    return (
        <div>
            <Card sx={{ width:{xs: 300, md: 400}, p:{xs: 1, md: 4}, mt: 4, mb: 12 }} className="card">
                <CardContent>
                    <Typography variant="h5" gutterBottom>Registration</Typography>
                    <div id="emailInput">
                        <TextField
                            id="registrationEmail"
                            name="registrationEmail"
                            label="Email"
                            variant="standard"
                            value={inputData.registrationEmail}
                            sx={{ width:{xs: 250, md: 350}, pb: 2 }}
                            onChange={handleInputChange} />
                    </div>
                    <div id="passwordInput">
                        <TextField
                            id="registrationPassword"
                            name="registrationPassword"
                            label="Password"
                            type="password"
                            variant="standard"
                            value={inputData.registrationPassword}
                            sx={{ width:{xs: 250, md: 350}, pb: 2 }}
                            onChange={handleInputChange} />
                    </div>
                    <div id="confirmRegistrationPasswordInput">
                        <TextField
                            id="confirmRegistrationPassword"
                            name="confirmRegistrationPassword"
                            label="Confirm Password"
                            type="password"
                            variant="standard"
                            value={inputData.confirmRegistrationPassword}
                            sx={{ width:{xs: 250, md: 350}, pb: 2 }}
                            onChange={handleInputChange} />
                    </div>
                    <div id="registerUsernameInput">
                        <TextField
                            id="registerUsername"
                            name="registrationUsername"
                            label="Username"
                            variant="standard"
                            value={inputData.registrationUsername}
                            sx={{ width:{xs: 250, md: 350}, pb: 5 }}
                            onChange={handleInputChange} />
                    </div>
                </CardContent>
                <div id="registerButton">
                    <FormButton text="Register" />
                </div>
                <div id="loginLink">
                    <Typography variant="body1" gutterBottom>Looking for the login page? <Link href="./login">Click here!</Link></Typography>
                </div>
            </Card>
        </div>
    )
}