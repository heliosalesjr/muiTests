import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import classes from './BasicCard.module.css';

export default function BasicCard(props) {

  return (
    <Card sx={{ minWidth: 275 }} className={classes.card}>
      <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.text}
        </Typography >
        <Typography variant="h5" component="div" >
          {props.wordz}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          {props.definition}
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}