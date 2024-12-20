import { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import '../style/LoginForm.css'

export default function LoginForm() {
    const [inputData, setInputData] = useState({
        email: "",
        password: "",
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
                <div id="emailInput">
                    <TextField id="email" name="email" label="Email" variant="standard" sx={{width: 300, pb: 2}} onChange={handleInputChange} />
                </div>
                <div id="passwordInput">
                    <TextField id="password" name="password" label="Password" variant="standard" sx={{width: 300, pb: 5}} onChange={handleInputChange} />
                </div>
                <div id="loginButton">
                    <Button variant="contained" align="center" sx={{mb: 2}}>Log In</Button>
                </div>
                <div id="registrationLink">
                    <Link href="./registration">Don't have an account? Click here!</Link>
                </div>
            </Box>
        </div>
    )
}