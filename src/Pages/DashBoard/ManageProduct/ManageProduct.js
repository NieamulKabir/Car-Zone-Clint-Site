
import React, { useEffect, useState } from 'react';



import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';

const ManageProduct = () => {
    const [manageProducts, setManageProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/car")
            .then(res => res.json())
            .then(data => setManageProducts(data));
    }, [])


    const handleDelete = id => {
        const proceed = window.confirm('Are You sure ,You wnt To Delete?!');
        if (proceed) {
            const url = `http://localhost:5000/car/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully ');
                        const remainingProduct = manageProducts.filter(pd => pd._id !== id);
                        setManageProducts(remainingProduct);

                    }
                })
        }
    }


    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                        <h1 className="text-success p-4">Manage Products</h1>
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            manageProducts?.map(pd =>


                                <Grid item xs={4} sm={4} md={4}>
                                    <Card sx={{ minWidth: 300, minHeight: 400, border: 0, boxShadow: 1, backgroundColor: "#BDBBB8" }}>
                                        <CardMedia
                                            component="img"
                                            style={{ width: 'auto', height: '140px', weight: '160px', margin: '10px auto' }}
                                            image={pd?.img}
                                            alt="carImage"
                                        />
                                        <CardContent>
                                            <Typography variant="h4" component="div">
                                                {pd?.title}
                                            </Typography>
                                            <Typography variant="h6" component="div">
                                                Amount:{pd?.ammount}
                                            </Typography>
                                            <Typography variant="body2" color="black">
                                                Description:{pd?.description}
                                            </Typography>
                                        </CardContent>
                                        <Button onClick={() => handleDelete(pd._id)} className="mb-2" variant="contained" style={{ backgroundColor: '#2D5C4C' }}>DELETE</Button>
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

export default ManageProduct;