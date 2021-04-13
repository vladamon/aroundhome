import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import InboxIcon from '@material-ui/icons/Inbox'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import SlotList from './SlotList'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}))

export default function SlotGroup ({ groupName, slots, id, onClick, ...rest }) {
  const classes = useStyles()
  const [open, setOpen] = useState(true)

  const toggleExpand = () => {
    setOpen(!open)
  }

  return (
    <div className={classes.root}>
      <List
        component='nav'
        aria-label='main mailbox folders'
        onClick={toggleExpand}
      >
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={groupName} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </List>
      <Divider />
      <Collapse in={open} timeout='auto' unmountOnExit>
        <SlotList slots={slots} id={id} onClick={onClick} {...rest} />
      </Collapse>
    </div>
  )
}
