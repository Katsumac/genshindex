import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "../style/SearchBar.css";

export default function SearchBar({runQuery}) {

        const [searchQuery, setSearchQuery] = useState("");
    
        const handleSearchBarChange = (evt) => {
            setSearchQuery(evt.target.value);
        }

    return (
        <Stack direction="row">
            <TextField fullWidth id="outlined-basic" name="search" value={searchQuery} label="Search" variant="outlined" size="medium" sx={{backgroundColor: "white"}} onChange={handleSearchBarChange} />
            <Button variant="contained" sx={{backgroundColor: "#ffc000"}} onClick={() => runQuery(searchQuery)}> Search </Button>
        </Stack>
    )
}