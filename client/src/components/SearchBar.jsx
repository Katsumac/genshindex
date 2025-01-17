import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "../style/SearchBar.css";

export default function SearchBar({ runQuery }) {

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchBarChange = (evt) => {
        setSearchQuery(evt.target.value);
    }

    const isEnterEvent = (evt) => {
        if (evt.key === "Enter") {
            document.getElementById("searchButton").click();
        }
    }

    return (
        <Stack direction="row">
            <TextField fullWidth id="searchField" name="search" value={searchQuery} label="Search" variant="outlined" size="medium" sx={{ backgroundColor: "white" }} onChange={handleSearchBarChange} onKeyDown={isEnterEvent} />
            <Button id="searchButton" variant="contained" sx={{ backgroundColor: "#ffc000" }} onClick={() => runQuery(searchQuery.toLowerCase())}> Search </Button>
        </Stack>
    )
}