import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import StarButton from "./components/StarButton";
import SummaryTable from "./components/SummaryTable";
import RarityStars from "./components/RarityStars";
import Typography from "@mui/material/Typography";
import "./style/Info.css"

export default function WeaponInfo() {

    const [weaponData, setWeaponData] = useState("");
    const [weaponIcon, setWeaponIcon] = useState("");
    const weaponName = useParams().name;

    useEffect(() => {
        fetch(`https://genshin.jmp.blue/weapons/${weaponName}`)
            .then(response => response.json())
            .then(data => {
                setWeaponData(data);
                document.title = `${data.name} | GenshinDex`;
            })
            .catch(e => `Error: ${e}`);

        fetch(`https://genshin.jmp.blue/weapons/${weaponName}/icon`)
            .then(response => response.blob())
            .then(blob => setWeaponIcon(URL.createObjectURL(blob)))
            .catch(e => `Error: ${e}`);
    }, []);

    const summaryData = [
        { category: "Rarity", description: <RarityStars rarity={weaponData.rarity} entityName={weaponData.name} /> },
        { category: "Type", description: weaponData.type },
        { category: "Base Atk", description: weaponData.baseAttack },
        { category: "Substat", description: weaponData.subStat },
        { category: "Passive", description: weaponData.passiveName },
        { category: "Passive Description", description: weaponData.passiveDesc },
        { category: "How to Obtain", description: weaponData.location }
    ];

    return (
        <div>
            <Typography variant="h3" component="h2" sx={{ mb: 6 }}>{weaponData.name}</Typography>
            <img src={weaponIcon} id="icon" />

            <Typography variant="h6" component="h2" sx={{ mt: 3, mb: 1 }} >Favourite
            </Typography>

            <div id="starDiv"><StarButton /></div>

            <Typography variant="h4" component="h2" sx={{ mt: 6, mb: 1 }}>Info</Typography>

            <SummaryTable summaryData={summaryData} />

        </div>
    )
}