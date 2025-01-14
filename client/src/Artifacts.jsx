import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography';
import ArtifactCard from "./components/ArtifactCard"
import SearchBar from './components/SearchBar';
import "./style/Paragraph.css"

export default function Artifacts() {

    const [artifactList, setArtifactList] = useState([]);

    useEffect(() => {
        fetch("https://genshin.jmp.blue/artifacts")
        .then(response => response.json())
        .then(data => setArtifactList(data))
        .catch(e => `Error: ${e}`);

        document.title = "Artifacts | Genshindex";
    }, [])

    const searchArtifacts = (query) => {
        fetch("https://genshin.jmp.blue/artifacts")
        .then(response => response.json())
        .then(data => {
            setArtifactList(data.filter(name => name.includes(query)))
        })
        .catch(e => `Error: ${e}`);
    }

    return (
        <>
        <Typography variant="h3" component="h2" sx={{mb: 6}}>Artifacts</Typography>
        <div className="searchBar">
            <SearchBar runQuery={searchArtifacts} />
        </div>
        <div className="paragraph">
            <Typography variant="body2" component="h2" sx={{mt: 3, mb: 6, maxWidth: 900}}>
                If an artifact's name has two or more words, or has an apostrophe, you may need use a dash in place of a space/apostrophe.
                For example: "archaic-petra", or "defender-s-will". Of course, you may search with part of their names instead.</Typography>
        </div>
        <Grid
            container
            columnSpacing={{xs: 1, sm: 1, md: 1}}
            rowSpacing={{xs: 2, md: 5}}
            columns={{xs: 2, sm: 6, md: 12}}
            justifyContent={"space-evenly"}
            sx={{mb: 6}}>
                {artifactList.length !== 0 ? artifactList.map((artifact, i) => {
                    return <Grid key={i} size={{xs: 1, sm: 2, md: 3}} display="flex" justifyContent={'center'}>
                                <ArtifactCard artifactName={artifact} key={artifact + "Card"}/>
                            </Grid>
                    }) : <Typography variant="body2" component="h2" sx={{mt: 3, mb: 6, maxWidth: 900}}> No artifacts found. </Typography>
                }
        </Grid>
    </>
    )
}