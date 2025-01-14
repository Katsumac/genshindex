import { useState } from 'react';

import FormButton from './FormButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import "../style/Form.css"


export default function LoginForm() {
    const [inputData, setInputData] = useState({
        loginEmail: "",
        loginPassword: ""
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
                    <Typography variant="h5" gutterBottom>Log In</Typography>
                    <div id="loginEmailInput">
                        <TextField
                            id="loginEmail"
                            name="loginEmail"
                            label="Email"
                            variant="standard"
                            value={inputData.loginEmail}
                            sx={{ minWidth: 300, pb: 2 }}
                            onChange={handleInputChange} />
                    </div>
                    <div id="loginPasswordInput">
                        <TextField
                            id="loginPassword"
                            name="loginPassword"
                            label="Password"
                            type="password"
                            variant="standard"
                            value={inputData.loginPassword}
                            sx={{ minWidth: 300, pb: 5 }}
                            onChange={handleInputChange} />
                    </div>
                </CardContent>
                <div id="loginButton">
                    <FormButton text="Log In" />
                </div>
                <div id="registrationLink">
                    <Typography variant="body1" gutterBottom>Don't have an account? <Link href="./registration">Click here!</Link></Typography>
                </div>
            </Card>
        </div>
    )
}