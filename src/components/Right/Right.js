import { Card, CardContent } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectTableData } from "../../features/Country/CountrySlice";
import LineGraph from "./LineGraph";
import Table from "./Table";

function Right() {
  const tableData = useSelector(selectTableData);
  return (
    <Card className="app__right">
      <CardContent>
        <h3>Live Cases By county</h3>
        <Table countries={tableData} />
        <h3 className="app__graphTitle">WorldWide new Cases</h3>
        <LineGraph className="app__grapgh" />
      </CardContent>
    </Card>
  );
}

export default Right;
