import { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import '../style/Form.css'

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
            return {...currentData};
        })
    }

    return (
        <div>
            <Box component="section" className="box" sx={{ p: 4, mt: 4, width: 300, border: 1, borderColor: "grey.500" }}>
                <Typography variant="h5" gutterBottom>Log In</Typography>
                <div id="loginEmailInput">
                    <TextField
                        id="loginEmail"
                        name="loginEmail"
                        label="Email"
                        variant="standard"
                        sx={{width: 300, pb: 2}}
                        onChange={handleInputChange} />
                </div>
                <div id="loginPasswordInput">
                    <TextField
                        id="loginPassword"
                        name="loginPassword"
                        label="Password"
                        variant="standard"
                        sx={{width: 300, pb: 5}}
                        onChange={handleInputChange} />
                </div>
                <div id="loginButton">
                    <Button variant="contained" align="center" sx={{mb: 2}}>Log In</Button>
                </div>
                <div id="registrationLink">
                    <Typography variant="body1" gutterBottom>Don't have an account? <Link href="./registration">Click here!</Link></Typography>
                </div>
            </Box>
        </div>
    )
}