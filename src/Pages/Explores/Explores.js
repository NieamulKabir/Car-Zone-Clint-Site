import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Explore from '../Explore/Explore';
import "./Explores.css";


const Explores = () => {
    const [explores, setExplores]= useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/car")
            .then(res => res.json())
            .then(data => setExplores(data));
    }, [])


    return (
        <Box sx={{ flexGrow: 1 }} >
        <Container>
            <Typography className="explores" sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                Our Services 
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    explores.map(explore => <Explore
                        key={explore.name}
                        explore={explore}
                    ></Explore>)
                }
            </Grid>
        </Container>
    </Box> 
    );
};

export default Explores;