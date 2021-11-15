import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Card, CardContent, Container, Typography } from '@mui/material';;

const ManageAllorder = () => {
    const [allOrder, setAllOrder] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/order`)
            .then(res => res.json())
            .then(data => setAllOrder(data));
    }, [])
    return (
        <div>
            <h1 className="text-center text-primary p-4">All Order</h1>

            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            allOrder?.map(all =>


                                <Grid item xs={6} sm={6} md={6}>
                                    <Card sx={{border: 0, boxShadow: 4, }}>
                                        <CardContent>
                                            <Typography variant="h4" component="div">
                                                {all?.email}
                                            </Typography>
                                            <Typography variant="h6" component="div">
                                              Car Name : {all?.title}
                                            </Typography>

                                        </CardContent>
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

export default ManageAllorder;