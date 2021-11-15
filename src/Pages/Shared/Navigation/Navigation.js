import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';


import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';

import useAuth from '../../../hooks/useAuth';



export default function Navigation() {
    const { user, logout } = useAuth();
    const theme = useTheme()
    const useStyle = makeStyles({
        navItem: {
            color: "#fff",
            textDecoration: 'none',
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important',

            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important',

            }
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right'

            }
        },
        mobileNavItem: {
            textDecoration: 'none',
            color: '#000'
        }

    })

    const { navIcon, navItemContainer, navLogo, mobileNavItem } = useStyle()

    const [state, setState] = React.useState(false);




    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>

                <ListItem button>
                    <ListItemText>
                        <Link className={mobileNavItem} to="/login">Login</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText>
                        <Link className={mobileNavItem} to="/">Home</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText>
                        <Link className={mobileNavItem} to="/explore">Explore</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText>
                        <Link className={mobileNavItem} to="/purchase">Purchase</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
            </List>
        </Box>
    );

    return (
        <>
            <Box >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Car Zone
                        </Typography>

                        <Box className={navItemContainer}>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/"><Button color="inherit">Home</Button></NavLink >
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/explore"><Button color="inherit">Explore</Button></NavLink >
                            {/* <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/purchase"><Button color="inherit">Purchase</Button></NavLink > */}

                            {user?.email && <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                <Button color="inherit">Dashboard</Button>
                            </NavLink>}

                            {
                                user?.email ?
                                    <Button onClick={logout} color="inherit">Logout</Button>

                                    : <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                        <Button color="inherit">Login</Button>
                                    </NavLink>

                            }

                            {/* <Box> <strong> User:</strong> <a href="/login">{user?.displayName}</a>
                            </Box> */}


                      
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <React.Fragment>

                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
};

