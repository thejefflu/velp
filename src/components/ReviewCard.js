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
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main
  },
  [`& .${classes.bigText}`]: {
    fontSize: '16px',
    marginBottom: '1%',
    fontWeight: 'bolder',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    color: '#000000',
  },
  [`& .${classes.smallText}`]: {
    fontSize: '15px',
    fontWeight: 'normal',
    color: '#4F4F4F',
  },
}))

export default function ReviewCard({ email, overallRating, paragraph, dishnamelist }) {
    return (
    <Root className={classes.root}>
        <Card variant="outlined" className={classes.cardContainer}>
            <CardContent>
                <Typography className={classes.bigText}>
                {email}
                </Typography>
                <Typography className={classes.bigText}>
                {dishnamelist}
                </Typography>
                <Typography className={classes.smallText}>
                Overall Rating: {overallRating}
                </Typography>
                <Typography className={classes.smallText}>
                {paragraph}
                </Typography>
                {/* <Typography className={classes.photo}>
                {photo}
                </Typography> */}
            </CardContent>
        </Card>
    </Root>
    );
  }