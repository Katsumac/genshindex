import { useState } from 'react';

import FormButton from './FormButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
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
            return { ...currentData };
        })
    }

    return (
        <div>
            <Card sx={{ maxWidth: 700 }} style={{ textAlign: "center", margin: "auto" }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>Edit Profile</Typography>
                    <div id="editEmailInput">
                        <TextField
                            id="editEmail"
                            name="editEmail"
                            label="Email"
                            variant="standard"
                            sx={{ minWidth: 300, maxWidth: 700, pb: 2 }}
                            onChange={handleInputChange} />
                    </div>
                    <div id="editUsernameInput">
                        <TextField
                            id="editUsername"
                            name="editUsername"
                            label="Username"
                            variant="standard"
                            sx={{ minWidth: 300, maxWidth: 700, pb: 5 }}
                            onChange={handleInputChange} />
                    </div>
                    <div id="updateButton">
                        <FormButton text="Update" />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}