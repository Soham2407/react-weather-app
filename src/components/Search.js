import React from "react";
import axios from "axios";
import "../styles/search.css";

const Search = ({ location, setLocation, setWeatherData, setLoading }) => {
  const url = `http://api.weatherstack.com/current?access_key={key}&query=${location}`;
  const getWeatherData = async (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      const response = await axios.get(url);
      setWeatherData(response.data);
      setLocation("");
      setLoading(false);
    }
  };
  return (
    <div className="searchbar-header">
      <input
        type="text"
        className="search"
        placeholder="Enter Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyPress={getWeatherData}
      />
    </div>
  );
};

export default Search;
