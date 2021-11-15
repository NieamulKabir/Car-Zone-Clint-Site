import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import '../Banner/Banner.css';




const Banner = () => {
    return (
        <Box className="box" sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20
                    
                }}>
                    <Box>
                        
                        <Typography variant="h2" style={{ color: 'white'}}>
                        QUALITY IN

                        </Typography>
                        <Typography variant="h2" style={{ color: 'white' }}>
                        
CAR MAINTENANCE
                        </Typography>
                    
                        <Typography variant="h5"   
                      style={{ color: 'white', fontSize: 20, fontWeight: 300,marginLeft: 300,
                      marginRight: 300 }}>
                      This means that we have new equipment for any type of examination, repair and customization service.This means that we have new equipment for any type of examination, repair and customization service.This means that we have new equipment for any type of examination, repair and customization service. 
                        </Typography>
                        <br/>
                        <Button variant="contained" style={{ backgroundColor: '#279F2C' }}>Read More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;
