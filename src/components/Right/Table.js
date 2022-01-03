import numeral from "numeral";
import React from "react";
import "./css/Table.css";
function Table({ countries }) {
  return (
    <div className="table">
      <table>
        <tbody>
          {countries.map(({ country, cases }, index) => (
            <tr key={index}>
              <td>{country}</td>
              <td>
              <strong>{numeral(cases).format("0,0")}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
