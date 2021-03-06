import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionActions from '@material-ui/core/AccordionActions'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

import VirtualList from '../shared/VirtualList'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20
  },
  details: {
    alignItems: 'center',
    display: 'flex'
  },
  column: {
    flexBasis: '33.33%'
  },
  columnLarge: {
    flexBasis: '66.67%'
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2)
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}))

export default function CompanySelector ({ companies, onSchedule, ...rest }) {
  const classes = useStyles()
  const isCompanySelected = useSelector(
    state => state.companies.companiesData.length > 0
  )

  const [selected, setSelected] = useState([])

  const deleteSelected = index => {
    setSelected(selected.filter(item => item !== index))
  }

  const renderSelected = () => {
    return selected.map(item => {
      return (
        <Chip
          label={`${companies[item].name}`}
          onDelete={() => deleteSelected(item)}
        />
      )
    })
  }

  const renderSelectedText = () =>
    isCompanySelected ? 'Change Selected Companies' : 'Select Companies'

  const onItemSelect = data => {
    if (selected.includes(data)) {
      return
    }

    setSelected([...selected, data])
  }

  const handleConfirmClick = () => {
    const companyIds = selected.map(index => companies[index]._id)
    onSchedule(companyIds)
  }

  const handleCancelClick = () => {
    // TODO: Implement
  }

  return (
    <div className={classes.root}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1c-content'
          id='panel1c-header'
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Companies</Typography>
          </div>
          <div className={classes.columnLarge}>
            <Typography className={classes.secondaryHeading}>
              {renderSelectedText()}
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.column}>{companies && renderSelected()}</div>
          <div className={clsx(classes.columnLarge, classes.helper)}>
            <Typography variant='caption'>
              Select one or more companies to work with
              <VirtualList data={companies} onItemSelect={onItemSelect} />
            </Typography>
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size='small' onClick={handleCancelClick}>
            Cancel
          </Button>
          <Button size='small' color='primary' onClick={handleConfirmClick}>
            OK
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  )
}
