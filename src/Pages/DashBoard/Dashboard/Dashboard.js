import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
// import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from './../../Login/AdminRoute/AdminRoute';
import MyOrders from '../MyOrder/MyOrders';
import AddReview from '../AddReviews/AddReview';
import Pay from '../Pay/Pay';
import ManageAllorder from '../ManageAllOrder/ManageAllorder';
import AddProduct from '../AddProducts/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import useAuth from '../../../hooks/useAuth';


const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />


            <Link to="/home"><Button color="inherit">Home</Button></Link> <br />
            <Link to={`${url}/myorder`}><Button color="inherit">My Order</Button></Link> <br />
            <Link to={`${url}/addreview`}><Button color="inherit">Reviews</Button></Link> <br />
            <Link to={`${url}/pay`}><Button color="inherit">Payment</Button></Link> <br />

            {
                admin && <Box>
                    <Link to={`${url}/manageallorder`}><Button color="inherit">Manage All Order</Button></Link>
                    <Link to={`${url}/addproduct`}><Button color="inherit">Add Product</Button></Link>
                    <Link to={`${url}/manageproducts`}><Button color="inherit">Manage Products</Button></Link>
                    <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                </Box>
            }
            <Button variant="contained" style={{ backgroundColor: '#2D5C4C' }}  onClick={logout} >Logout</Button>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>

                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}

            >

                <Toolbar />

                <Switch>
                    <Route path={`${path}/myorder`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/addreview`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>

                    <AdminRoute path={`${path}/manageallorder`}>
                        <ManageAllorder></ManageAllorder>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addproduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproducts`}>
                        <ManageProduct></ManageProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

export default Dashboard;
