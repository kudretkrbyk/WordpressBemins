import countryData from "../data/countries+states+cities.json";
import { useState } from "react";

export default function ChectOutForm() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState(""); // Eyalet seçimini sıfırla
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const countries = countryData.map((country) => ({
    id: country.id,
    name: country.name,
    states: country.states,
  }));

  const states = selectedCountry
    ? countries.find((country) => country.name === selectedCountry)?.states ||
      []
    : [];

  const cities = selectedState
    ? states.find((state) => state.name === selectedState)?.cities || []
    : [];
  return (
    <div>
      <div className="veriler w-1/2">
        <label htmlFor="country">Country:</label>
        <select
          id="country"
          value={selectedCountry}
          onChange={handleCountryChange}
          className="w-full p-2 mb-4 border"
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.id} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>

        <label htmlFor="state">State:</label>
        <select
          id="state"
          value={selectedState}
          onChange={handleStateChange}
          className="w-full p-2 mb-4 border"
        >
          <option value="">Select State</option>
          {states.map((state, index) => (
            <option key={index} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>

        <label htmlFor="city">City:</label>
        <select id="city" className="w-full p-2 border">
          <option value="">Select City</option>
          {cities.map((city, index) => (
            <option key={index} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
