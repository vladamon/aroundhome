import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import SlotGroup from '../shared/SlotGroup'

import * as actions from '../../store/companies/actions'

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

export default function CardSlotList ({ company }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const selectedSlots = useSelector(state => state.companies.selectedSlots)

  const handleOnClick = data => {
    dispatch(actions.selectSlotForCompany(data))
  }

  const renderSlotGroups = (timeSlotGroups, company) => {
    return Object.entries(timeSlotGroups).map(([date, slots]) => (
      <SlotGroup
        groupName={date}
        slots={slots}
        id={company._id}
        onClick={handleOnClick}
        selectedSlots={selectedSlots}
      />
    ))
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          Available slots
        </Typography>
        {renderSlotGroups(company.groupedTimeSlots, company)}
      </CardContent>
    </Card>
  )
}
