import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { FixedSizeList as List } from 'react-window'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 150,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper
  }
}))

// function renderRow (props) {
//   const { index, style, data } = props

//   return (
//     <ListItem id={index} button style={style} key={index} onClick={handleRowClick}>
//       <ListItemText primary={`${data[index].name}`} />
//     </ListItem>
//   )
// }

function getItemsCount (data) {
  return Array.isArray(data) ? data.length : 0
}

// renderRow.propTypes = {
//   index: PropTypes.number.isRequired,
//   style: PropTypes.object.isRequired
// }

export default function VirtualizedList ({ data = [], onItemSelect, ...rest }) {
  const classes = useStyles()

  const handleRowClick = (e) => {
    onItemSelect(e.currentTarget.id)
  }

  const renderRow = (props) => {
    const { index, style, data } = props

    return (
      <ListItem id={index} button style={style} key={index} onClick={handleRowClick}>
        <ListItemText primary={`${data[index].name}`} />
      </ListItem>
    )
  }

  return (
    <div className={classes.root}>
      <List
        height={150}
        width={300}
        itemSize={36}
        itemCount={getItemsCount(data)}
        itemData={data}
      >
        {renderRow}
      </List>
    </div>
  )
}
