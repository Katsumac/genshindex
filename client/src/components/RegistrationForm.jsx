import { useState } from 'react';

import FormButton from './FormButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import '../style/Form.css'

export default function RegistrationForm() {
    const [inputData, setInputData] = useState({
        registrationEmail: "",
        registrationPassword: "",
        confirmRegistrationPassword: "",
        registrationUsername: ""
    });

    // Handle input changes for both email and password
    const handleInputChange = (e) => {
        const fieldName = e.target.name;
        const value = e.target.value;

        setInputData(currentData => {
            currentData[fieldName] = value;
            return { ...currentData };
        })
    }

    return (
        <div>
            <Card sx={{ maxWidth: 350, p: 4, mt: 4, mb: 12 }} className="card">
                <CardContent>
                    <Typography variant="h5" gutterBottom>Registration</Typography>
                    <div id="emailInput">
                        <TextField
                            id="registrationEmail"
                            name="registrationEmail"
                            label="Email"
                            variant="standard"
                            sx={{ minWidth: 300, pb: 2 }}
                            onChange={handleInputChange} />
                    </div>
                    <div id="passwordInput">
                        <TextField
                            id="registrationPassword"
                            name="registrationPassword"
                            label="Password"
                            type="password"
                            variant="standard"
                            sx={{ minWidth: 300, pb: 2 }}
                            onChange={handleInputChange} />
                    </div>
                    <div id="confirmRegistrationPasswordInput">
                        <TextField
                            id="confirmRegistrationPassword"
                            name="confirmRegistrationPassword"
                            label="Confirm Password"
                            type="password"
                            variant="standard"
                            sx={{ minWidth: 300, pb: 2 }}
                            onChange={handleInputChange} />
                    </div>
                    <div id="registerUsernameInput">
                        <TextField
                            id="registerUsername"
                            name="registerUsername"
                            label="Username"
                            variant="standard"
                            sx={{ minWidth: 300, pb: 5 }}
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