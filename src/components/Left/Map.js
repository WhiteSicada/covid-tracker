import React, { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./css/Map.css";
import "leaflet/dist/leaflet.css";
import { showDataOnMap } from "../Right/utils";

function Map({ countries, casesType, center, zoom }) {
  useEffect(() => {
    console.log("casesType : " + casesType);
  }, [casesType]);
  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  );
}

export default Map;
