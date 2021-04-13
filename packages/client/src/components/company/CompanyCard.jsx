import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import CardHeader from './CardHeader'
import CardSelectedSlot from './CardSelectedSlot'
import CardSlotList from './CardSlotList'

import { removeCompany } from '../../store/companies/actions'

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

export default function CompanyCard ({ company }) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const selectedSlots = useSelector(state => state.companies.selectedSlots)

  const handleRemove = () => {
    dispatch(removeCompany(company._id))
  }

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <CardHeader company={company} />
        <CardSelectedSlot
          company={company}
          selectedSlots={selectedSlots}
        />
        <CardSlotList company={company} />
      </CardContent>
      <CardActions>
        <Button size='small' onClick={handleRemove}>
          Remove Company
        </Button>
      </CardActions>
    </Card>
  )
}
