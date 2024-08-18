import { useState } from "react";
import { GoPerson } from "react-icons/go";
import { BiSolidDiscount } from "react-icons/bi";
import countryData from "../data/countries+states+cities.json";

export default function CheckOut() {
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
    <div className="w-full h-full flex flex-col items-center p-5">
      <div className="w-8/12 flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <GoPerson className="size-5" />
          <div>
            {" "}
            <span>Returning customer?</span>
            <span className="font-bold">Click here to login</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <BiSolidDiscount className="size-5" />
          <div>
            {" "}
            <span>Have a coupon?</span>
            <span className="font-bold">Click here to enter your code</span>
          </div>
        </div>
      </div>
      <div className="flex w-full p-10">
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
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">sdsd</div>
      </div>
    </div>
  );
}
