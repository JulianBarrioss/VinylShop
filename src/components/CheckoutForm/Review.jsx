import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Review = () => {
    return (
        <>
            <Typography variant='h6' gutterBottom>
                Order sumary
            </Typography>
            <List disablePadding>
                {checkoutToken.live.line_items.map((product) => (
                    <ListItem style={{padding: '10px 0'}} key={product.name}>
                        <ListItemText primary={product.name} secondary={` Quanity: ${product.quanity}` }/>
                        <Typograbhy
                    </ListItem>
                ))}
            </List>   
        </>
    )
}

export default Review
