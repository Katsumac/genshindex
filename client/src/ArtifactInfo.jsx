import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import StarButton from "./components/StarButton";
import SummaryTable from "./components/SummaryTable";
import RarityStars from "./components/RarityStars";
import Typography from "@mui/material/Typography";
import artifactPieceSelector from "./js/artifactPieceSelector";
import "./style/Info.css"

export default function ArtifactInfo() {

    const [artifactData, setArtifactData] = useState("");
    const [artifactIcon, setArtifactIcon] = useState("");
    // Gets the artifact name via the "name" param
    const artifactName = useParams().name;

    useEffect(() => {
        // Fetch information regarding the artifact
        fetch(`https://genshin.jmp.blue/artifacts/${artifactName}`)
            .then(response => response.json())
            .then(data => {
                setArtifactData(data);
                document.title = `${data.name} | GenshinDex`;
            })
            .catch(e => `Error: ${e}`);

        // Fetch the image of the artifact. Depending on the artifact, it may use the Flower of Life or Circlet of Logos image
        fetch(`https://genshin.jmp.blue/artifacts/${artifactName}/${artifactPieceSelector(artifactName)}`)
            .then(response => response.blob())
            .then(blob => setArtifactIcon(URL.createObjectURL(blob)))
            .catch(e => `Error: ${e}`);
    }, []);

    // Data to be passed to the summary table
    const summaryData = [
        { category: "Max Rarity", description: <RarityStars rarity={artifactData.max_rarity} entityName={artifactData.name} /> },
        { category: "1-Piece Bonus", description: artifactData["1-piece_bonus"] ? artifactData["1-piece_bonus"] : "-" },
        { category: "2-Piece Bonus", description: artifactData["2-piece_bonus"] ? artifactData["2-piece_bonus"] : "-" },
        { category: "4-Piece Bonus", description: artifactData["4-piece_bonus"] ? artifactData["4-piece_bonus"] : "-" }
    ];

    return (
        <div>
            <Typography variant="h3" component="h2" sx={{ mb: 6 }}>{artifactData.name}</Typography>
            <img src={artifactIcon} id="icon" />

            <Typography variant="h6" component="h2" sx={{ mt: 3, mb: 1 }} >Favourite
            </Typography>

            <div id="starDiv"><StarButton /></div>

            <Typography variant="h4" component="h2" sx={{ mt: 6, mb: 1 }}>Info</Typography>

            <SummaryTable summaryData={summaryData} />

        </div>
    )
}