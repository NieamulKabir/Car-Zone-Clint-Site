import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Explore = (props) => {
    const {_id, title, description, img } = props.explore;

    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 300, minHeight: 400, border: 0, boxShadow: 5, backgroundColor: "#CCFFCC" }}>
                <CardMedia
                    className="mt-2"
                    component="img"
                    style={{ width: 'auto', height: '160px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    
                    <Link to={`/purchase/${_id}`}>
                        <Button className="mt-3" variant="contained" style={{ backgroundColor: '#2D5C4C' }}>Buy Now</Button>
                    </Link>
                </CardContent>
            </Card>
            <br />
        </Grid>
       
    );
};

export default Explore;