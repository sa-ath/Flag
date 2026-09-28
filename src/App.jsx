import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://xcountries-backend.labs.crio.do/all"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="app">
      <h1>Countries</h1>

      <div className="countries-grid">
        {countries.map((country) => (
          <div className="country-card" key={country.abbr}>
            <img
              src={country.flag}
              alt={`Flag of ${country.name}`}
            />
            <p>{country.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;