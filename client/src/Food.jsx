import { useState, useEffect } from "react";

import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import FoodCard from "./components/FoodCard"
import EasterEggCard from "./components/EasterEggCard";
import SearchBar from "./components/SearchBar";
import "./style/Paragraph.css";

export default function Food() {

    const [foodList, setFoodList] = useState([]);
    const [filterChoices, setFilterChoices] = useState({
        rarity: "",
        type: ""
    });

    const [toggle, setToggle] = useState(0);
    // To enable/disable filter/reset buttons
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        // Fetch information regarding the food (returns object, not array)
        fetch("https://genshin.jmp.blue/consumables/food")
            .then(response => response.json())
            .then(data => setFoodList(data))
            .catch(e => console.log(`Error: ${e}`));

        // Reset the filter choices
        setFilterChoices((currFilterChoices) => {
            currFilterChoices["rarity"] = "";
            currFilterChoices["type"] = "";
            return { ...currFilterChoices };
        });

        document.title = "Food | GenshinDex"
    }, [toggle]) // Re-render when toggle changes

    // Search for food
    const searchFood = (query) => {
        fetch("https://genshin.jmp.blue/consumables/food")
            .then(response => response.json())
            .then(data => {
                for (const key in data) {
                    if (key === "id") {
                        const easterEggName = "paimon";
                        if (!easterEggName.includes(query)) {
                            delete data[key];
                        }
                    } else if (!key.includes(query)) {
                        delete data[key];
                    }
                }
                setFoodList(data);
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

    // Filters foodList based on filter choices 
    const filterFoodList = () => {
        setIsDisabled(true);
        const newArr = { ...foodList };
        Object.keys(foodList).map((food) => {
            // Filters for the Easter egg. Deletes all foods except for "id", which is used to render the Easter egg
            if ((filterChoices.rarity === 6 && filterChoices.type === "Emergency Food") ||
                (filterChoices.rarity === 6 && filterChoices.type === "") ||
                (filterChoices.rarity === "" && filterChoices.type === "Emergency Food")) {
                Object.keys(newArr).forEach((food) => {
                    if (food !== "id") delete newArr[food];
                })
                return setFoodList({ ...newArr });
            }

            // Checks if a property of the food matches the corresponding filter choice.
            // and if the filter choice has been changed from default. If both are no, then remove from foodList

            if (foodList[food].rarity !== filterChoices.rarity && filterChoices.rarity !== "") {
                delete newArr[food];
                return setFoodList({ ...newArr });
            }
            if (foodList[food].type !== filterChoices.type && filterChoices.type !== "") {
                delete newArr[food];
                return setFoodList({ ...newArr });
            }
        }
        )
    }

    // Triggers useEffect to reset foodList and filters
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
            <Typography variant="h3" component="h2" sx={{ mb: 6 }}>Food</Typography>
            <div className="searchBar">
                <SearchBar runQuery={searchFood} />
            </div>
            <div className="paragraph">
                <Typography variant="body2" component="h2" sx={{ mt: 3, mb: 6, maxWidth: 900 }}>
                    For "Pile 'Em Up", please search by "pile-em-up" &#40;without quotations&#41;.
                    If a food's name has two or more words, you may need use a dash in place of a space.
                    For example: "almond-tofu", or "egg-roll".
                    Of course, you may search with part of their names instead.</Typography>
            </div>
            <div id="filter">
                <Stack direction="row" justifyContent="center">
                    <FormControl sx={{ minWidth: 100, mx: 2, backgroundColor: "white" }}>
                        <InputLabel id="foodRarityLabel">Rarity</InputLabel>
                        <Select
                            labelId="foodRarity"
                            id="foodRarity"
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
                            <MenuItem value={6}>6</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ minWidth: 100, mr: 2, backgroundColor: "white" }}>
                        <InputLabel id="foodTypeLabel">Type</InputLabel>
                        <Select
                            labelId="foodType"
                            id="foodType"
                            value={filterChoices.type}
                            label="Type"
                            name="type"
                            onChange={handleFilterChange}
                        >
                            <MenuItem value="Adventurer's Dish">Adventurer's Dish</MenuItem>
                            <MenuItem value="ATK-Boosting Dish">ATK-Boosting Dish</MenuItem>
                            <MenuItem value="DEF-Boosting Dish">DEF-Boosting Dish</MenuItem>
                            <MenuItem value="Recovery Dish">Recovery Dish</MenuItem>
                            <MenuItem value="Emergency Food">Emergency Food</MenuItem>
                        </Select>
                    </FormControl>
                    <Button id="filterButton" variant="contained" sx={{ backgroundColor: "#ffc000", mr: 1 }} onClick={filterFoodList} disabled={isDisabled}> Filter </Button>
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
                {(Object.keys(foodList).length) !== 0 ? Object.keys(foodList).map((food, i) => {
                    if (food === "id") return <EasterEggCard key="paimonEasterEgg" />
                    // If there are food in foodList, display cards. If not, display a message.                    
                    return <Grid key={i} size={{ xs: 1, sm: 2, md: 3 }} display="flex" justifyContent={"center"}>
                        <FoodCard foodName={food} />
                    </Grid>
                }) : <Typography variant="body2" component="h2" sx={{ mt: 3, mb: 6, maxWidth: 900 }}> No food found. </Typography>
                }
            </Grid>
        </div>
    )

}