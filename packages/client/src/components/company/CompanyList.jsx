import { Helmet } from 'react-helmet'
import { Box, Container, Grid, Pagination } from '@material-ui/core'
import CompanyCard from './CompanyCard'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CompanyList = () => {
  const dispatch = useDispatch()

  const companies = useSelector((state) => state.companies.companiesData)
  return (
    <>
      <Helmet>
        <title>Products | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              {companies.map(company => (
                <Grid item key={company._id} lg={4} md={6} xs={12}>
                  <CompanyCard company={company} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 3
            }}
          >
            <Pagination color='primary' count={3} size='small' />
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default CompanyList
