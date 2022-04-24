import { useState } from "react";
import Search from "./components/Search";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  return (
    <div className="app">
      <div className="container">
        <Search
          location={location}
          setLocation={setLocation}
          setWeatherData={setWeatherData}
          setLoading={setLoading}
        />
        <WeatherInfo weatherData={weatherData} loading={loading} />
      </div>
    </div>
  );
}

export default App;
