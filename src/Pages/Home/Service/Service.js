import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Service = ({ service }) => {
    const { _id, title, ammount, description, img } = service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 300, minHeight: 400, border: 0, boxShadow: 5, backgroundColor: "#CCFFCC" }}>
                <CardMedia
                    component="img"
                    sx={{backgroundColor: "#CCFFCC"}}
                    style={{ width: 'auto', height: '140px', weight: '160px', margin: '10px auto' }}
                    image={img}
                    alt="carImage"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="h6" component="div">
                        Amount:{ammount}
                    </Typography>
                    <Typography variant="body2" color="black">
                        Description:{description}
                    </Typography>



                    <Link to={`/purchase/${_id}`}>
                        <Button variant="contained" style={{ backgroundColor: '#2D5C4C' }}>Buy Now</Button>
                    </Link>


                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;