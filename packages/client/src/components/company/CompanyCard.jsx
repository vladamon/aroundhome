import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CardHeader from './CardHeader'
import CardSelectedSlot from './CardSelectedSlot'
import CardSlotList from './CardSlotList'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CompanyCard({ company }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <CardHeader company={company}></CardHeader>
        <CardSelectedSlot></CardSelectedSlot>
        <CardSlotList slots={company.time_slots}></CardSlotList>
      </CardContent>
      <CardActions>
        <Button size="small">Remove Company</Button>
      </CardActions>
    </Card>
  );
}
