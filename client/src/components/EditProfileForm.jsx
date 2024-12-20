import { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../style/Form.css'

export default function EditProfileForm() {
    const [inputData, setInputData] = useState({
        editEmail: "",
        editUsername: ""
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
                <Typography variant="h5" gutterBottom>Edit Profile</Typography>
                <div id="editEmailInput">
                    <TextField
                        id="editEmail"
                        name="editEmail"
                        label="Email"
                        variant="standard"
                        sx={{width: 300, pb: 2}}
                        onChange={handleInputChange} />
                </div>
                <div id="editUsernameInput">
                    <TextField
                        id="editUsername"
                        name="editUsername"
                        label="Username"
                        variant="standard"
                        sx={{width: 300, pb: 5}}
                        onChange={handleInputChange} />
                </div>
                <div id="updateButton">
                    <Button variant="contained" sx={{mb: 2}}>Update</Button>
                </div>
            </Box>
        </div>
    )
}