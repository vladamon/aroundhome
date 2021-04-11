import { initialState } from './initialState'
import * as types from './types'

const companiesReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.getCompanyById:
    case types.getCompanyByIds:
    case types.getCompanyOne:
      return {
        ...state,
        fetchingCompaniesData: true
      }
    case types.getCompanyMany:
      return {
        ...state,
        fetchingCompanies: true
      }
    case types.getCompanyByIdSuccess:
    case types.getCompanyByIdsSuccess:
    case types.getCompanyOneSuccess:
      return {
        ...state,
        fetchingCompaniesData: false,
        fetchedCompaniesData: true,
        fetchingCompaniesDataError: false,
        companiesData: action.payload
      }
    case types.getCompanyManySuccess:
      return {
        ...state,
        fetchingCompanies: false,
        fetchedCompanies: true,
        companiesOnlyList: action.payload
      }
    case types.getCompanyByIdError:
    case types.getCompanyByIdsError:
    case types.getCompanyOneError:
      return {
        ...state,
        fetchingCompaniesData: false,
        fetchedCompaniesData: false,
        fetchingCompaniesDataError: action.payload
      }
    case types.getCompanyManyError:
      return {
        ...state,
        fetchingCompanies: false,
        fetchedCompanies: false,
        fetchingCompaniesError: action.payload
      }
    default: {
      return state
    }
  }
}

export default companiesReducer
