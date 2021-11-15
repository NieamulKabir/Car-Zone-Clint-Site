import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import "../ChooseUs/ChooseUs.css"


const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 500,
    border:1,
    boxShadow: 1,
    color:'white',
}


const ChooseUs = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'center',boxShadow:1, }} xs={12} md={6}>
                    <Box className="environment" >
                        <Typography variant="h4"  style={{ marginTop: 60}}>
                            Our <br />
                           Environment
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 18, fontWeight: 300, color: 'white' }}>
                        Our experts can diagnose your vehicle’s condition right away.Our experts can diagnose your vehicle’s condition right away.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#2D5C4C' }}>Read More</Button>
                    </Box>
                </Grid>
                <Grid item style={{ ...verticalCenter, textAlign: 'center' }} xs={12} md={6}>
                    <Box className="choose">
                        <Typography variant="h4"  style={{ marginTop: 60}}
                      >
                            Why <br />
                            Choose Us
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 18, fontWeight: 300 }}>
                        We appreciate your trust and hope that you find our services helpful.We appreciate your trust and hope that you find our services.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#2D5C4C' }}>Read More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    );
};

export default ChooseUs;