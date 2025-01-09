import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import "./style/About.css"

export default function About() {
    return (
        <div>
            <Typography variant="h3" component="h2" sx={{mb: 6}}>About GenshinDex</Typography>
            <img src={"./src/img/paimonSmile.png"} id="paimonImg" />
            <div className="paragraph">
                <Typography variant="body1" sx={{my: 6, maxWidth: 900}} >
                    Hello, and welcome to GenshinDex! Browse the characters, weapons, artifacts, and foods of Hoyoverse's hit open-world, anime-style game Genshin Impact!
                    Feel free to select your favourites as well. If you have time, why not try to hunt down the Easter egg I've placed in one of the data pages?
                </Typography>
            </div>
            <div className="paragraph">
                <Typography variant="body1" sx={{mb: 6, maxWidth: 900}} >
                    This is a personal project to practice using ReactJS and Node.js together. I would like to acknowledge that Genshin Impact is the intellectual property
                    of Hoyoverse, not mine. The image found here, the login page, and navbar belong to Hoyoverse, and edited by user ☆Souki☆ on the Hoyolab site. The surprised Paimon image
                    &#40; now where is it? :&#41; &#41; belongs to Hoyoverse. The data used is from the api established by <Link href="https://github.com/genshindev/api?tab=readme-ov-file" underline="none">{"genshindev."} &nbsp;</Link>
                    Please note that not all information may be up to date.
                </Typography>
            </div>
            <div className="paragraph">
                <Typography variant="body1" sx={{mb: 6, maxWidth: 900}} >
                    Please feel free to contact me, whether it's with regards to the project, or if it's about Genshin. I hope you enjoy browsing GenshinDex!
                </Typography>
            </div>
        </div>
    )
}