import React from "react";
import { Link } from "react-router-dom";

function CityCard({ cityName }) {
  return (
    <div>
      <h2>{cityName}</h2>
      <Link to={`/city/${cityName}`}>Zobacz szczegóły</Link>
    </div>
  );
}

export default CityCard;
