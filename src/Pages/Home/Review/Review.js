import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Card, CardContent, Container, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Review = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 400, m: 4 }} variant="h4" component="div">
                    <h1 className="text-success p-4"> Clint Reviews </h1>
                </Typography>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews?.map(rv =>


                            <Grid item xs={4} sm={4} md={4}>
                                <Card sx={{ minWidth: 300, minHeight: 400, border: 0, boxShadow: 1, backgroundColor: "#BDBBB8" }}>

                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                           <h3 className="text-primary"> {rv?.name}</h3>
                                        </Typography>
                                        <Typography variant="h6" component="div">
                                            {rv?.review}
                                        </Typography>
                                        <br />
                                        <Typography sx={{ textAlign: 'left' }} variant="body" color="black">
                                            <strong><Stack spacing={1}>
                                            Rating : <Rating name="half-rating" defaultValue={rv?.rating} precision={.5} readOnly />

                                            </Stack></strong>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>


                        )
                    }
                </Grid>
            </Container>
        </Box>

    );
};

export default Review;