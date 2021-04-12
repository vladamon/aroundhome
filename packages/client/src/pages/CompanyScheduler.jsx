import { Helmet } from 'react-helmet'
import { Box, Container } from '@material-ui/core'

import SelectorToolbar from '../components/company/SelectorToolbar'
import CompanyList from '../components/company/CompanyList'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as actions from '../store/companies/actions'

const CompanyScheduler = () => {
  const dispatch = useDispatch()

  let companiesOnlyList = useSelector((state) => state.companies.companiesOnlyList)

  const [selectedCompanyIds, setSelectedCompanyIds] = useState([])

  useEffect(() => {
    dispatch(actions.getCompanyMany())
  }, [companiesOnlyList])

  useEffect(() => {
    dispatch(actions.getCompanyByIds(selectedCompanyIds))
  }, [selectedCompanyIds])

  const onSchedule = (companyIds) => {
    setSelectedCompanyIds(companyIds)
  }

  return (
    <>
      <Helmet>
        <title>Companies | Aroundhome</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          {/* <CompanyListToolbar /> */}
          <SelectorToolbar
            companies={companiesOnlyList} onSchedule={onSchedule}
          ></SelectorToolbar>
          <CompanyList></CompanyList>
          <Box sx={{ pt: 3 }}>
            {/* <CompanyListResults companies={companiesOnlyList} fetchPage={onFetchPage} /> */}
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default CompanyScheduler
