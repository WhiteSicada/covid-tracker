import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCountries,
  selectCountry,
  selectCountryInfo,
  setContryInfo,
  setCountries,
  setCountry,
  setMapCenter,
  setMapCountries,
  setMapZoom,
  setTableData,
} from "../../features/Country/CountrySlice";
import { sortData } from "../Right/utils";

function Header() {
  const dispatch = useDispatch();
  const country = useSelector(selectCountry);
  const countries = useSelector(selectCountries);
  const contryInfo = useSelector(selectCountryInfo);
  const handleChange = async (event) => {
    const countryCode = event.target.value;
    const url =
      country === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setCountry(countryCode));
        dispatch(setContryInfo(data));
        dispatch(
          setMapCenter({
            lat: data.countryInfo.lat,
            lng: data.countryInfo.long,
          })
        );
      });
  };

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setContryInfo(data));
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.json())
        .then((data) => {
          const sortedData = sortData(data);
          dispatch(setTableData(sortedData));
          dispatch(setCountries(data));
          dispatch(setMapCountries(data));
        });
    };
    getCountriesData();
  }, []);
  return (
    <div className="app__header">
      <h1>Covid-19 Tracker</h1>
      <TextField
        id="outlined-select-countries"
        select
        value={country}
        onChange={handleChange}
        helperText="Please select your countries"
      >
        <MenuItem value={"worldwide"}>WorldWide</MenuItem>
        {countries.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}

export default Header;
