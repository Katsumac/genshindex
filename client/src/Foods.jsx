import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography';
import FoodCard from "./components/FoodCard"

export default function Foods() {
    return(
        <>
        <FoodCard foodName="adeptus-temptation" />
        </>
    )
}