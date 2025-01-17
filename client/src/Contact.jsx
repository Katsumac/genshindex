import { useEffect } from "react";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack"
import "./style/Contact.css"

export default function Contact() {

    useEffect(() => {
        document.title = "Contact | GenshinDex"
    })

    return (
        <div>
            <Typography variant="h3" component="h2" sx={{mb: 6}}>Contact</Typography>
            <img src={"./src/img/justin.jpg"} id="profilePhoto" />
            <Typography variant="h4" component="h2" sx={{mt: 3}}>Justin Ng</Typography>
            <Typography variant="h6" component="h2" color="textSecondary" sx={{mb: 8}}>Front-End Developer</Typography>
            <Stack direction="row" justifyContent="center" spacing={2}>
                <a href="mailto:justinng58@hotmail.com" title="Email" target="_blank"><img src={"./src/img/email.png"} className="contactIcon" /></a>
                <a href="https://justincng.netlify.app" title="Portfolio Site" target="_blank"><img src={"./src/img/web.png"} className="contactIcon" /></a>
                <a href="https://www.linkedin.com/in/justin-ng-79921b240" title="LinkedIn" target="_blank"><img src={"./src/img/linkedin.png"} className="contactIcon" /></a>
                <a href="https://github.com/Katsumac" title="Github" target="_blank"><img src={"./src/img/github.png"} className="contactIcon" /></a>
            </Stack>
            <Typography variant="h6" component="h2" sx={{my: 3}}>Genshin UID: 611258286</Typography>
        </div>
    )
}