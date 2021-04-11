import companies from '../__mocks__/customers'

import { gql } from '@apollo/client'
import client from './apolloClient'

export const getCompanyById = id => {
  return companies
}

export const getCompanyByIds = async ids => {
  let result = []

  try {
    result = await client.query({
      query: gql`
        query {
          companyByIds(
           _ids: ${JSON.stringify(ids)}
          ) {
            _id,
            name,
            type,
            time_slots
          }
        }
      `
    })
  } catch (ex) {
    console.log(`There was an error fetching data: ${ex}`)
  }

  return result?.data?.companyByIds ? result.data.companyByIds : []
}

export const getCompanyOne = search => {
  return companies
}

export const getCompanyMany = async () => {
  let result = []

  try {
    result = await client.query({
      query: gql`
        query {
          companyMany {
            _id,
            name,
            type
          }
        }
      `
    })
  } catch (ex) {
    console.log(`There was an error fetching data: ${ex}`)
  }

  return result?.data?.companyMany ? result.data.companyMany : []
}

export const getCompanyCount = async () => {
  const result = await client.query({
    query: gql`
      query {
        companyMany() {
          _id
        }
      }
    `
  })

  return result?.data?.companyMany ? result.data.companyMany.length : 0
}
