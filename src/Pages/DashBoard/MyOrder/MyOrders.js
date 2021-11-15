import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';


import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';




const MyOrders = () => {
    const { user } = useAuth();
    const [myOrder, SetMyOrder] = useState()

    useEffect(() => {
        // console.log('Myorder');
        let value = user?.email;
        console.log(user?.email);
        fetch(`http://localhost:5000/Order/${value}`)
            .then(res => res.json())
            .then(data => SetMyOrder(data));
    }, [user])


    const handleCancle = id => {
        const proceed = window.confirm('Are You sure ,You wnt To Cancle Your Order?!');
        if (proceed) {
            const url = `http://localhost:5000/Order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully ');
                        const remainingOrder = myOrder.filter(od => od._id !== id);
                        SetMyOrder(remainingOrder);

                    }
                })
        }
    }



    return (
        <div>

            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                        <h1 className="text-success p-4">My Order : {myOrder?.length} </h1>
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            myOrder?.map(od =>


                                <Grid item xs={4} sm={4} md={4}>
                                    <Card sx={{ minWidth: 300, minHeight: 400, border: 0, boxShadow: 1, backgroundColor: "#BDBBB8" }}>
                                        <CardMedia
                                            component="img"
                                            style={{ width: 'auto', height: '140px', weight: '160px', margin: '10px auto' }}
                                            image={od?.img}
                                            alt="carImage"
                                        />
                                        <CardContent>
                                            <Typography variant="h4" component="div">
                                                {od?.title}
                                            </Typography>
                                            <Typography variant="h6" component="div">
                                                Amount:{od?.ammount}
                                            </Typography>
                                            <Typography variant="body2" color="black">
                                                Description:{od?.description}
                                            </Typography>
                                        </CardContent>
                                        <Button onClick={() => handleCancle(od._id)} className="mb-2" variant="contained" style={{ backgroundColor: '#2D5C4C' }}>Cancle Order</Button>
                                        <br />
                                    </Card>

                                </Grid>


                            )
                        }
                    </Grid>
                </Container>
            </Box>


        </div>
    );
};

export default MyOrders;