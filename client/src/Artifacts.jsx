import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography';
import ArtifactCard from "./components/ArtifactCard"

export default function Artifacts() {

    const [artifactList, setArtifactList] = useState([]);

    useEffect(() => {
        fetch("https://genshin.jmp.blue/artifacts")
        .then(response => response.json())
        .then(data => setArtifactList(data))
        .catch(e => `Error: ${e}`);

        document.title = "Artifacts | Genshindex";
    }, [])

    return (
        <>
        <Typography variant="h3" component="h2" sx={{mb: 6}}>Artifacts</Typography>
        <Grid
            container
            columnSpacing={{xs: 1, sm: 1, md: 1}}
            rowSpacing={{xs: 2, md: 5}}
            columns={{xs: 2, sm: 6, md: 12}}
            justifyContent={"space-evenly"}
            sx={{mb: 6}}>
                {artifactList.map((artifact, i) => {
                    return <Grid key={i} size={{xs: 1, sm: 2, md: 3}} display="flex" justifyContent={'center'}>
                                <ArtifactCard artifactName={artifact} key={artifact + "Card"}/>
                            </Grid>
                })}
        </Grid>
    </>
    )
}