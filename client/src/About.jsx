import { useEffect } from "react";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import "./style/Paragraph.css"

export default function About() {

    useEffect(() => {
        document.title = "About | GenshinDex"
    }, [])

    return (
        <div>
            <Typography variant="h3" component="h2" sx={{mb: 6}}>About GenshinDex</Typography>
            <img src={"/paimonSmile.png"} id="paimonImg" />
            <div className="paragraph">
                <Typography variant="body1" sx={{my: 6, maxWidth: 900}} >
                    Hello, and welcome to GenshinDex! Browse the characters, weapons, artifacts, and foods of Hoyoverse's hit open-world, anime-style game Genshin Impact!
                    Feel free to select your favourites as well. If you have time, why not try to hunt down the Easter egg I've placed in one of the data pages?
                </Typography>
            </div>
            <div className="paragraph">
                <Typography variant="body1" sx={{mb: 6, maxWidth: 900}} >
                    This is a personal project to practice using the basics of ReactJS and Node.js together. Currently working on the back-end. I would like to acknowledge that <Link href="https://genshin.hoyoverse.com/en/" underline="none">Genshin Impact </Link> is the intellectual property
                    of Hoyoverse, not mine.
                    The <Link href="https://www.flaticon.com/free-icon/email_3178158" underline="none">email, </Link>
                    <Link href="https://www.flaticon.com/free-icon/web_3178162" underline="none">web, </Link>
                    <Link href="https://www.flaticon.com/free-icon/linkedin_1384014" underline="none">LinkedIn, </Link>
                    and <Link href="https://www.flaticon.com/free-icon/github_2111425" underline="none">GitHub </Link>
                    images are found on <Link href="https://www.flaticon.com" underline="none">Flaticon. </Link>
                    The image found here, the login page, navbar, and the favicon belong to Hoyoverse, and edited by user ☆Souki☆ on the <Link href="https://www.hoyolab.com/article/7007341" underline="none">Hoyolab site. </Link>
                    The easter egg card image belongs to Hoyoverse, and screenshotted by user Felix_o0u on the <Link href="https://www.hoyolab.com/article/30095421" underline="none">Hoyolab site. </Link>
                    The easter egg info image belongs to Hoyoverse, and screenshotted by a deleted user on <Link href="https://www.reddit.com/r/Genshin_Impact/comments/j32so2/paimon_will_always_be_emergency_food_until_the/" underline="none">Reddit. </Link>
                    The surprised Paimon image &#40;now where is it? :&#41;&#41;, found on the <Link href="https://genshin-impact.fandom.com/wiki/Chat/Gallery?file=Icon_Emoji_Paimon%27s_Paintings_01_Paimon_5.png" underline="none">Genshin Impact Fandom Wiki, </Link> belongs to Hoyoverse.
                    The data used is from the api established by <Link href="https://github.com/genshindev/api" underline="none">genshindev. </Link>
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