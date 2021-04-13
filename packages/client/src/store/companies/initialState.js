export const initialState = {
  selectedCompanies: [],
  selectedSlots: {}, // [{ company_id: slot}]
  fetchingCompanies: false,
  errorFetchingCompanies: null,
  fetchedCompanies: false,
  fetchingCompaniesData: false,
  errorFetchingCompaniesData: false,
  fetchedCompaniesData: false,
  companiesOnlyList: [],
  companiesData: [],
  companiesDataParsed: []
}
