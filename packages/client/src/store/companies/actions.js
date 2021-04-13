import * as types from './types'

// # Company

export const getCompanyById = (data) => ({
  type: types.getCompanyById,
  payload: data
})

export const getCompanyByIds = (data) => ({
  type: types.getCompanyByIds,
  payload: data
})

export const getCompanyOne = (data) => ({
  type: types.getCompanyOne,
  payload: data
})

export const getCompanyMany = (data) => ({
  type: types.getCompanyMany,
  payload: data
})

export const getCompanyCount = (data) => ({
  type: types.getCompanyCount,
  payload: data
})

export const selectSlotForCompany = (data) => ({
  type: types.selectSlotForCompany,
  payload: data
})

export const removeSelectedSlot = (data) => ({
  type: types.removeSelectedSlot,
  payload: data
})

export const removeCompany = (data) => ({
  type: types.removeCompany,
  payload: data
})
