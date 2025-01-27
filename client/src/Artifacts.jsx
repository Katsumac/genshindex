import { useState, useEffect } from "react";

import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import ArtifactCard from "./components/ArtifactCard"
import SearchBar from "./components/SearchBar";
import "./style/Paragraph.css";

export default function Artifacts() {

    const [artifactList, setArtifactList] = useState([]);
    const [filterChoices, setFilterChoices] = useState({
        max_rarity: ""
    });

    const [toggle, setToggle] = useState(0);
    // To enable/disable filter/reset buttons
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        // Fetch information regarding the artifact
        fetch("https://genshin.jmp.blue/artifacts")
            .then(response => response.json())
            .then(data => setArtifactList(data))
            .catch(e => `Error: ${e}`);

        // Reset the filter choices
        setFilterChoices((currFilterChoices) => {
            currFilterChoices["max_rarity"] = "";
            return { ...currFilterChoices };
        });

        document.title = "Artifacts | Genshindex";
    }, [toggle]) // Re-render when toggle changes

    // Search for artifacts
    const searchArtifacts = (query) => {
        fetch("https://genshin.jmp.blue/artifacts")
            .then(response => response.json())
            .then(data => {
                setArtifactList(data.filter(name => name.includes(query)))
            })
            .catch(e => `Error: ${e}`);
    }

    // Updates the filter choices
    const handleFilterChange = (evt) => {
        setFilterChoices((currFilterChoices) => {
            currFilterChoices[evt.target.name] = evt.target.value;
            return { ...currFilterChoices };
        });
    }

    // Filters artifactList based on filter choices 
    const filterArtifactList = () => {
        setIsDisabled(true);
        artifactList.map((artifact) => {
            fetch(`https://genshin.jmp.blue/artifacts/${artifact}`)
                .then(response => response.json())
                .then(data => {
                    // Checks if the rarity of the artifact matches the max_rarity of the filter choices.
                    // and if max_rarity has been changed from default. If both are no, then remove from artifactList
                    if (data.max_rarity !== filterChoices.max_rarity && filterChoices.max_rarity !== "") {
                        setArtifactList(currentArtifacts => {
                            return currentArtifacts.filter((a) => a !== artifact)
                        });
                    }
                }
                ).catch(e => `Error: ${e}`)
        })
    }

    // Triggers useEffect to reset artifactList and filters
    const resetFilter = () => {
        setIsDisabled(false);
        if (toggle === 0) {
            setToggle(1);
        } else {
            setToggle(0);
        }
    }

    return (
        <div>
            <Typography variant="h3" component="h2" sx={{ mb: 6 }}>Artifacts</Typography>
            <div className="searchBar" style={{width:"60%"}}>
                <SearchBar runQuery={searchArtifacts} />
            </div>
            <div className="paragraph">
                <Typography variant="body1" sx={{ mt: 3, mb: 6, width: {xs: 300, md: 900} }}>
                    If an artifact's name has two or more words, or has an apostrophe, you may need use a dash in place of a space or apostrophe.
                    For example: "archaic-petra", or "defender-s-will". Of course, you may search with part of their names instead.</Typography>
            </div>
            <div id="filter">
                <Stack direction="row" justifyContent="center" sx={{mb: 2}}>
                    <FormControl sx={{ minWidth: 150, backgroundColor: "white" }}>
                        <InputLabel id="maxRarityLabel">Max Rarity</InputLabel>
                        <Select
                            labelId="maxRarity"
                            id="maxRarity"
                            value={filterChoices.rarity}
                            label="MaxRarity"
                            name="max_rarity"
                            onChange={handleFilterChange}
                        >
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
                <Stack direction="row" justifyContent="center">
                    <Button id="filterButton" variant="contained" sx={{ backgroundColor: "#ffc000", mr: 1 }} onClick={filterArtifactList} disabled={isDisabled}> Filter </Button>
                    <Button id="resetButton" variant="contained" sx={{ backgroundColor: "#ffc000" }} onClick={resetFilter} disabled={!isDisabled}> Reset </Button>
                </Stack>
            </div>
            <Grid
                container
                columnSpacing={{ xs: 1, sm: 1, md: 1 }}
                rowSpacing={{ xs: 2, md: 5 }}
                columns={{ xs: 2, sm: 6, md: 12 }}
                justifyContent={"space-evenly"}
                sx={{ my: 6 }}>
                {artifactList.length !== 0 ? artifactList.map((artifact, i) => {
                    // If there are artifacts in artifactList, display cards. If not, display a message.
                    return <Grid key={i} size={{ xs: 1, sm: 2, md: 3 }} display="flex" justifyContent={"center"}>
                        <ArtifactCard artifactName={artifact} key={artifact + "Card"} />
                    </Grid>
                }) : <Typography variant="body2" component="h2" sx={{ mt: 3, mb: 6, maxWidth: 900 }}> No artifacts found. </Typography>
                }
            </Grid>
        </div>
    )
}