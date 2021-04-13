import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Divider } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14,
    paddingTop: 12
  },
  pos: {
    marginBottom: 12
  }
})

export default function CardHeader ({ company }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h3' component='h2'>
          {company.name}
        </Typography>
        <Divider />
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          Type: {company.type}
        </Typography>
      </CardContent>
    </Card>
  )
}
