import RegistrationForm from "./components/RegistrationForm.jsx";
import Typography from "@mui/material/Typography";

export default function Registration() {

    document.title = "Registration | GenshinDex";

    return (
        <div>
            <Typography variant="h3" component="h2" sx={{ mb: 6 }}>GenshinDex</Typography>
            <RegistrationForm />
        </div>
    )
}