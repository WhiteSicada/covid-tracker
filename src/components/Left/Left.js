import React, { useState } from "react";
import Header from "./Header";
import InfoBoxs from "./InfoBoxs";
import Map from "./Map";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMapCenter,
  selectMapZoom,
  selectMapCountries,
} from "../../features/Country/CountrySlice";

function Left() {
  const [casesType, setCasesType] = useState("cases");
  const mapCenter = useSelector(selectMapCenter);
  const mapZoom = useSelector(selectMapZoom);
  const mapCountries = useSelector(selectMapCountries);
  return (
    <div className="app__left">
      <Header />
      <InfoBoxs casesType={casesType} setCasesType={setCasesType} />
      <Map
        countries={mapCountries}
        casesType={casesType}
        center={mapCenter}
        zoom={mapZoom}
      />
    </div>
  );
}
export default Left;
