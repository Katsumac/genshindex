import { useState } from "react";

import FormButton from "./FormButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import "../style/Form.css";

export default function EditProfileForm() {

    const [inputData, setInputData] = useState({
        editEmail: "",
        editUsername: ""
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
            <Card sx={{ width:{xs: 300, md: 400}, mx: 2 }} style={{ textAlign: "center" }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>Edit Profile</Typography>
                    <div id="editEmailInput">
                        <TextField
                            id="editEmail"
                            name="editEmail"
                            label="Email"
                            value={inputData.editEmail}
                            variant="standard"
                            sx={{ width:{xs: 250, md: 350}, pb: 2 }}
                            onChange={handleInputChange} />
                    </div>
                    <div id="editUsernameInput">
                        <TextField
                            id="editUsername"
                            name="editUsername"
                            label="Username"
                            value={inputData.editUsername}
                            variant="standard"
                            sx={{ width:{xs: 250, md: 350}, pb: 5 }}
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