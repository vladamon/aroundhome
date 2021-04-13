import _ from 'lodash'

import { initialState } from './initialState'
import * as types from './types'

const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getCompanyById:
    case types.getCompanyByIds:
    case types.getCompanyOne:
      return {
        ...state,
        fetchingCompaniesData: true,
        selectedCompanies: action.payload
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
    case types.selectSlotForCompany:
      const { id, slot, date, start, end } = action.payload

      if (state.selectedSlots[id] &&
        state.selectedSlots[id].slot === slot &&
        state.selectedSlots[id].date === date
      ) {
        return state
      } else {
        return {
          ...state,
          selectedSlots: {
            ...state.selectedSlots,
            [id]: {
              slot: slot,
              date: date,
              start: start,
              end: end
            }
          }
        }
      }
    case types.removeSelectedSlot:
      return {
        ...state,
        selectedSlots: _.omit(state.selectedSlots, action.payload)
      }
    case types.removeCompany:
      return {
        ...state,
        companiesData: state.companiesData.filter(company => company._id !== action.payload),
        selectedCompanies: state.selectedCompanies.filter(companyId => companyId !== action.payload)
      }
    default: {
      return state
    }
  }
}

export default companiesReducer
