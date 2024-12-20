import { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import '../style/Form.css'

export default function RegistrationForm() {
    const [inputData, setInputData] = useState({
        registrationEmail: "",
        registrationPassword: "",
        confirmRegistrationPassword: ""
    });

    // Handle input changes for both email and password
    const handleInputChange = (e) => {
        const fieldName = e.target.name;
        const value = e.target.value;
        
        setInputData(currentData => {
            currentData[fieldName] = value;
            return {...currentData};
        })
    }

    return (
        <div>
            <Box component="section" className="box" sx={{ p: 4, mt: 4, width: 300, border: 1, borderColor: "grey.500" }}>
                <Typography variant="h5" gutterBottom>Registration</Typography>
                <div id="emailInput">
                    <TextField
                        id="registrationEmail"
                        name="registrationEmail"
                        label="Email"
                        variant="standard"
                        sx={{width: 300, pb: 2}}
                        onChange={handleInputChange} />
                </div>
                <div id="passwordInput">
                    <TextField
                        id="registrationPassword"
                        name="registrationPassword"
                        label="Password"
                        variant="standard"
                        sx={{width: 300, pb: 2}}
                        onChange={handleInputChange} />
                </div>
                <div id="confirmRegistrationPasswordInput">
                    <TextField
                        id="confirmRegistrationPassword"
                        name="confirmRegistrationPassword"
                        label="Confirm Password"
                        variant="standard"
                        sx={{width: 300, pb: 5}}
                        onChange={handleInputChange} />
                </div>
                <div id="registerButton">
                    <Button variant="contained" align="center" sx={{mb: 2}}>Register</Button>
                </div>
                <div id="loginLink">
                    <Typography variant="body1" gutterBottom>Looking for the login page? <Link href="./login">Click here!</Link></Typography>
                </div>
            </Box>
        </div>
    )
}