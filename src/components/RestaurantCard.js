import React from "react";
import { Card, CardContent, Typography } from '@mui/material/';
import { styled } from '@mui/material/styles';

const PREFIX = 'RCard';
const classes = {
  root: `${PREFIX}-root`,
  nameText: `${PREFIX}-name-text`,
  locationText: `${PREFIX}-location-text`,
}
const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    alignItems: 'center'
  },
  [`& .${classes.nameText}`]: {
    fontSize: '16px',
    marginBottom: '1%',
    fontWeight: 'bolder',
    textOverflow: 'ellipsis',
    color: '#000000',
  },
  [`& .${classes.locationText}`]: {
    fontSize: '15px',
    fontWeight: 'normal',
    color: '#4F4F4F',
  },
}))

export default function RestaurantCard({ name, locationLine1, locationLine2 }) {
    return (
    <Root className={classes.root}>
        <Card variant="outlined" className={classes.cardContainer}>
            <CardContent>
                <img style = {{width: 200, height: 200}} src={require('../imgs/restaurant.jpg')} />
                <Typography className={classes.nameText}>
                {name}
                </Typography>
                <Typography className={classes.locationText}>
                {locationLine1}
                </Typography>            
                <Typography className={classes.locationText}>
                {locationLine2}
                </Typography>              
            </CardContent>
        </Card>
    </Root>
    );
  }