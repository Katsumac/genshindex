import Typography from "@mui/material/Typography";
import "./style/Contact.css"

export default function Contact() {
    return (
        <div>
            <Typography variant="h3" component="h2" sx={{mb: 8}}>Contact</Typography>
            <img src={"./src/img/justin.jpg"} id="profilePhoto" />
            <Typography variant="h4" component="h2" sx={{mt: 3}}>Justin Ng</Typography>
            <Typography variant="h6" component="h2" color="textSecondary" sx={{mb: 3}}>Full-stack developer</Typography>
            <Typography variant="body2" component="h2" sx={{mb: 3}}>Justin Ng</Typography>
        </div>
    )
}