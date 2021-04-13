import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'

import { DateTime } from 'luxon'
import { doSlotsOverlap } from '../../utils/timeManagement'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}))

export default function SlotList ({ slots, id, onClick, selectedSlots }) {
  const classes = useStyles()

  const handleOnClick = (e) => {
    const { id, slot, date, start, end } = e.currentTarget.dataset

    onClick({
      id,
      slot,
      date,
      start,
      end
    })
  }

  const isSelected = (id, slot, date) => {
    return selectedSlots[id] && selectedSlots[id].slot === slot && selectedSlots[id].date === date
  }

  const isDisabled = (id, slotStart, slotEnd, date) => {
    return Object.entries(selectedSlots).filter(([selectedSlotId, selectedSlotData]) => {
      return (selectedSlotId !== id && selectedSlotData.date === date && doSlotsOverlap(selectedSlotData, slotStart, slotEnd, date))
    }).length > 0
  }

  return (
    <div className={classes.root}>
      <List component='nav' aria-label='secondary mailbox folders'>
        {slots.map((item) => (
          <ListItem
            data-id={id}
            data-slot={item.slot}
            data-date={item.date}
            data-start={item.start_time_iso}
            data-end={item.end_time_iso}
            onClick={handleOnClick}
            selected={isSelected(id, item.slot, item.date)}
            button
            disabled={isDisabled(id, item.start_time_iso, item.end_time_iso, item.date)}
          >
            <ListItemText primary={item.slot} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
