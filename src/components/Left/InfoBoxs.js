import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCountryInfo } from "../../features/Country/CountrySlice";
import "./css/InfoBox.css";
import { prettyPrintStat } from "../Right/utils";
import numeral from "numeral";
function InfoBoxs({ casesType, setCasesType }) {
  const countryInfo = useSelector(selectCountryInfo);
  return (
    <div className="app__stats">
      <InfoBox
        onClick={(e) => setCasesType("cases")}
        title="Coronavirus Cases"
        isRed
        active={casesType === "cases"}
        cases={prettyPrintStat(countryInfo.todayCases)}
        total={numeral(countryInfo.cases).format("0.0a")}
      />
      <InfoBox
        onClick={(e) => setCasesType("recovered")}
        title="Recovered"
        active={casesType === "recovered"}
        cases={prettyPrintStat(countryInfo.todayRecovered)}
        total={numeral(countryInfo.recovered).format("0.0a")}
      />
      <InfoBox
        onClick={(e) => setCasesType("deaths")}
        title="Deaths"
        isRed
        active={casesType === "deaths"}
        cases={prettyPrintStat(countryInfo.todayDeaths)}
        total={numeral(countryInfo.deaths).format("0.0a")}
      />
    </div>
  );
}

const InfoBox = ({ title, cases, total, active, isRed, ...props }) => (
  <Card
    onClick={props.onClick}
    className={`infoBox ${active && "infoBox--selected"} ${
      isRed && "infoBox--red"
    }`}
  >
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {title}
      </Typography>
      <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
        {cases}
      </h2>

      <Typography className="infoBox__total" color="textSecondary">
        {total} Total
      </Typography>
    </CardContent>
  </Card>
);

export default InfoBoxs;
