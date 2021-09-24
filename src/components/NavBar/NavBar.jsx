import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/disc-vinyl-icon.png';
import useStyles from './styles'

const NavBar = ({ totalItems }) => {
    const classes = useStyles();
    return (
        <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography variant="h6" className={classes.title} color="inherit">
                    <img href='/' src={logo} alt="VinylShop" height="25px" className={classes.image}/>
                    <a href='/' className={classes.a}>VinylShop</a>
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton aria-label= "Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default NavBar;
