import React from "react";
import "../styles/weather.css";

const WeatherInfo = ({ weatherData, loading }) => {
  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="weather-container">
          <div className="top">
            <p className="city">
              {weatherData.location && weatherData?.location?.name}
            </p>
            {weatherData.current && (
              <h1 className="temp">{weatherData?.current?.temperature}℃</h1>
            )}
            {weatherData.current && (
              <p className="condition">
                {weatherData?.current?.weather_descriptions[0]}
              </p>
            )}
          </div>
          {weatherData?.current && (
            <div className="bottom">
              <div>
                <p className="bold">{weatherData?.current?.feelslike}℃</p>
                <p className="info-text">Feels Like</p>
              </div>
              <div>
                <p className="bold">{weatherData?.current?.humidity}%</p>
                <p className="info-text">Humidity</p>
              </div>
              <div>
                <p className="bold">{weatherData?.current?.wind_speed} KM/H</p>
                <p className="info-text">Winds</p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default WeatherInfo;
