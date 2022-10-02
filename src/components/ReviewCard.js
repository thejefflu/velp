import React from "react";
import { Card, CardContent, Typography } from '@mui/material/';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

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
  [`& .${classes.bigText}`]: {
    fontSize: '16px',
    marginBottom: '1%',
    fontWeight: 'bolder',
    textOverflow: 'ellipsis',
    color: '#000000',
  },
  [`& .${classes.smallText}`]: {
    fontSize: '15px',
    fontWeight: 'normal',
    color: '#4F4F4F',
  },
}))

export default function ReviewCard({ email, overallRating, paragraph, tags }) {  

  const tagsDisplay = tags.map((item) => (
    <Chip
        label = {item}
    />
    ));

    return (
    <Root className={classes.root}>
        <Card variant="outlined" className={classes.cardContainer}>
            <CardContent>
                <Typography className={classes.bigText}>
                {email}
                </Typography>
                <Typography className={classes.smallText}>
                Overall Rating: {overallRating}
                </Typography>
                <Stack>
                {tagsDisplay}
                </Stack>
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