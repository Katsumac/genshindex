import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import WeaponCard from "./components/WeaponCard"
import SearchBar from './components/SearchBar';
import "./style/Paragraph.css"

export default function Weapons() {

    const [weaponList, setWeaponList] = useState([]);
    const [filterChoices, setFilterChoices] = useState({
        rarity: "",
        type: "",
        subStat: ""
    });

    const [toggle, setToggle] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        fetch("https://genshin.jmp.blue/weapons")
            .then(response => response.json())
            .then(data => setWeaponList(data))
            .catch(e => `Error: ${e}`);

        setFilterChoices((currFilterChoices) => {
            currFilterChoices["rarity"] = "";
            currFilterChoices["type"] = "";
            currFilterChoices["subStat"] = "";
            return { ...currFilterChoices };
        });

        document.title = "Weapons | GenshinDex";

    }, [toggle])

    const searchWeapons = (query) => {
        fetch("https://genshin.jmp.blue/weapons")
            .then(response => response.json())
            .then(data => {
                setWeaponList(data.filter(name => name.includes(query)));
            })
            .catch(e => `Error: ${e}`);
    }

    const handleFilterChange = (evt) => {
        setFilterChoices((currFilterChoices) => {
            currFilterChoices[evt.target.name] = evt.target.value;
            return { ...currFilterChoices };
        });
    }

    const filterWeaponList = () => {
        setIsDisabled(true);
        weaponList.map((weapon) => {
            fetch(`https://genshin.jmp.blue/weapons/${weapon}`)
                .then(response => response.json())
                .then(data => {
                    if (data.rarity !== filterChoices.rarity && filterChoices.rarity !== "") {
                        setWeaponList(currentWeapons => {
                            return currentWeapons.filter((w) => w !== weapon)
                        });
                    }
                    if (data.type !== filterChoices.type && filterChoices.type !== "") {
                        setWeaponList(currentWeapons => {
                            return currentWeapons.filter((w) => w !== weapon)
                        });
                    }
                    if (data.subStat !== filterChoices.subStat && filterChoices.subStat !== "") {
                        setWeaponList(currentWeapons => {
                            return currentWeapons.filter((w) => w !== weapon)
                        });
                    
                    }
                }
                ).catch(e => `Error: ${e}`)
        })
    }

    // Triggers useEffect to reset weaponList and filters
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
            <Typography variant="h3" component="h2" sx={{ mb: 6 }}>Weapons</Typography>
            <div className="searchBar">
                <SearchBar runQuery={searchWeapons} />
            </div>
            <div className="paragraph">
                <Typography variant="body2" component="h2" sx={{ mt: 3, mb: 6, maxWidth: 900 }}>
                    For "Amos' Bow", please search by "amos-bow".
                    If a weapon's name has two or more words, or has an apostrophe, you may need use a dash in place of a space/apostrophe.
                    For example: "a-thousand-floating-dreams", or "beginner-s-protector".
                    Of course, you may search with part of their names instead.</Typography>
            </div>
            <div id="filter">
                <Stack direction="row" justifyContent="center">
                    <FormControl sx={{ minWidth: 100, mx: 2, backgroundColor: "white" }}>
                        <InputLabel id="weaponRarityLabel">Rarity</InputLabel>
                        <Select
                            labelId="weaponRarity"
                            id="weaponRarity"
                            value={filterChoices.rarity}
                            label="Rarity"
                            name="rarity"
                            onChange={handleFilterChange}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ minWidth: 100, mr: 2, backgroundColor: "white" }}>
                        <InputLabel id="weaponTypeLabel">Type</InputLabel>
                        <Select
                            labelId="weaponType"
                            id="weaponType"
                            value={filterChoices.type}
                            label="Type"
                            name="type"
                            onChange={handleFilterChange}
                        >
                            <MenuItem value="Bow">Bow</MenuItem>
                            <MenuItem value="Catalyst">Catalyst</MenuItem>
                            <MenuItem value="Claymore">Claymore</MenuItem>
                            <MenuItem value="Polearm">Polearm</MenuItem>
                            <MenuItem value="Sword">Sword</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ minWidth: 100, mr: 2, backgroundColor: "white" }}>
                        <InputLabel id="weaponSubStatLabel">Substat</InputLabel>
                        <Select
                            labelId="weaponSubStat"
                            id="weaponSubStat"
                            value={filterChoices.subStat}
                            label="SubStat"
                            name="subStat"
                            onChange={handleFilterChange}
                        >
                            <MenuItem value="-">-</MenuItem>
                            <MenuItem value="ATK">ATK</MenuItem>
                            <MenuItem value="Attack">Attack</MenuItem>
                            <MenuItem value="CRIT DMG">CRIT DMG</MenuItem>
                            <MenuItem value="CRIT Rate">CRIT Rate</MenuItem>
                            <MenuItem value="DEF">DEF</MenuItem>
                            <MenuItem value="Elemental Mastery">Elemental Mastery</MenuItem>
                            <MenuItem value="Energy Recharge">Energy Recharge</MenuItem>
                            <MenuItem value="HP">HP</MenuItem>
                            <MenuItem value="Physical DMG Bonus">Physical DMG Bonus</MenuItem>
                        </Select>
                    </FormControl>
                    <Button id="filterButton" variant="contained" sx={{ backgroundColor: "#ffc000", mr: 1 }} onClick={filterWeaponList} disabled={isDisabled}> Filter </Button>
                    <Button id="resetButton" variant="contained" sx={{ backgroundColor: "#ffc000", mr: 2 }} onClick={resetFilter} disabled={!isDisabled}> Reset </Button>
                </Stack>
            </div>
            <Grid
                container
                columnSpacing={{ xs: 1, sm: 1, md: 1 }}
                rowSpacing={{ xs: 2, md: 5 }}
                columns={{ xs: 2, sm: 6, md: 12 }}
                justifyContent={"space-evenly"}
                sx={{ my: 6 }}>
                {weaponList.length !== 0 ? weaponList.map((weapon, i) => {
                    return <Grid key={i} size={{ xs: 1, sm: 2, md: 3 }} display="flex" justifyContent={'center'}>
                        <WeaponCard weaponName={weapon} key={weapon + "Card"} />
                    </Grid>
                }) : <Typography variant="body2" component="h2" sx={{ mt: 3, mb: 6, maxWidth: 900 }}> No weapons found. </Typography>
                }
            </Grid>
        </div>
    )
}