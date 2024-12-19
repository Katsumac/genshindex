import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../style/LoginForm.css'

export default function LoginForm() {
    return (
        <div>
            <Box component="section" className="box" sx={{ p: 4, mt: 4, width: 300 }}>
                <div id="emailInput">
                    <TextField id="email" className="textInput" label="Email" variant="standard" sx={{width: 300, pb: 2}} />
                </div>
                <div id="passwordInput">
                    <TextField id="password" className="textInput" label="Password" variant="standard" sx={{width: 300, pb: 5}} />
                </div>
                <div id="loginButton">
                    <Button variant="contained" align="center">Log In</Button>
                </div>
            </Box>
        </div>
    )
}