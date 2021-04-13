import React from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { removeSelectedSlot } from '../../store/companies/actions'

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
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

export default function SimpleCard ({ company, selectedSlots }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const renderSlotData = () => {
    const { slot, date } = selectedSlots[company._id]
      ? selectedSlots[company._id]
      : { slot: '', date: '' }
    return slot && date ? `${date} : ${slot}` : ''
  }

  const renderDelete = () => {
    return (
      selectedSlots[company._id] && (
        <Button size='small' onClick={handleDelete}>
          Delete reservation
        </Button>
      )
    )
  }

  const handleDelete = () => {
    dispatch(removeSelectedSlot(company._id))
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          Reservation:
        </Typography>
        <Typography variant='h5' component='h2'>
          {renderSlotData()}
        </Typography>
      </CardContent>
      <CardActions>{renderDelete()}</CardActions>
    </Card>
  )
}
