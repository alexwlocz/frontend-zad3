import React from "react";
import CityCard from "../components/CityCard";

const cities = ["Warszawa", "Kraków", "Gdańsk", "Wrocław", "Poznań"];

function HomePage() {
  return (
    <div>
      <h1>Stan Pogody</h1>
      <div>
        {cities.map((city) => (
          <CityCard key={city} cityName={city} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
