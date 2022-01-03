import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: "worldwide",
  countries: [],
  contryInfo: {},
  tableData: [],
  mapCenter: { lat: 34.80746, lng: -40.4796 },
  mapZoom: 3,
  mapCountries: [],
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setCountries: (state, action) => {
      state.countries = action.payload.map((country) => ({
        name: country.country,
        value: country.countryInfo.iso2,
      }));
    },
    setContryInfo: (state, action) => {
      state.contryInfo = action.payload;
    },
    setTableData: (state, action) => {
      state.tableData = action.payload;
    },
    setMapCenter: (state, action) => {
      state.mapCenter = action.payload;
    },
    setMapZoom: (state, action) => {
      state.mapCenter = action.payload;
    },
    setMapCountries: (state, action) => {
      state.mapCountries = action.payload;
    },
  },
});

export const {
  setCountry,
  setCountries,
  setContryInfo,
  setTableData,
  setMapCenter,
  setMapZoom,
  setMapCountries,
} = countrySlice.actions;

export const selectCountry = (state) => state.country.country;
export const selectCountryInfo = (state) => state.country.contryInfo;
export const selectCountries = (state) => state.country.countries;
export const selectTableData = (state) => state.country.tableData;
export const selectMapCenter = (state) => state.country.mapCenter;
export const selectMapZoom = (state) => state.country.mapZoom;
export const selectMapCountries = (state) => state.country.mapCountries;

export default countrySlice.reducer;
