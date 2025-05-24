import { useEffect, useState } from "react";
import { Wind, Droplets, Eye, Thermometer, Sun, Cloud, CloudRain, CloudSnow, Zap } from "lucide-react";
import Search from "../search";

function WeatherIcon({ condition, className = "weather-icon" }) {
  const iconMap = {
    clear: Sun,
    clouds: Cloud,
    rain: CloudRain,
    snow: CloudSnow,
    thunderstorm: Zap,
    default: Sun
  };
  
  const IconComponent = iconMap[condition] || iconMap.default;
  return <IconComponent className={className} />;
}

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e&units=metric`
      );

      const data = await response.json();
      if (data && data.cod === 200) {
        setWeatherData(data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch() {
    if (search.trim()) {
      fetchWeatherData(search);
    }
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  function getBackgroundClass() {
    if (!weatherData) return "bg-default";
    
    const condition = weatherData.weather[0].main.toLowerCase();
    const temp = weatherData.main.temp;
    
    if (condition.includes('rain')) return "bg-rainy";
    if (condition.includes('cloud')) return "bg-cloudy";
    if (condition.includes('clear') && temp > 25) return "bg-hot";
    if (condition.includes('clear') && temp < 25) return "bg-cool";
    if (condition.includes('snow')) return "bg-snowy";
    
    return "bg-default";
  }

  function getWeatherCondition() {
    if (!weatherData) return 'clear';
    const condition = weatherData.weather[0].main.toLowerCase();
    if (condition.includes('clear')) return 'clear';
    if (condition.includes('cloud')) return 'clouds';
    if (condition.includes('rain')) return 'rain';
    if (condition.includes('snow')) return 'snow';
    if (condition.includes('thunder')) return 'thunderstorm';
    return 'clear';
  }

  useEffect(() => {
    fetchWeatherData("bangalore");
  }, []);

  // Apply background class to body
  useEffect(() => {
    document.body.className = getBackgroundClass();
  }, [weatherData]);

  return (
    <div className="App">
      <div className="glass-card">
        
        <Search
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />

        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text">Loading weather data...</p>
          </div>
        ) : weatherData ? (
          <div className="weather-content">
            
            {/* City Name */}
            <div className="city-section">
              <h1 className="city-name">
                {weatherData.name}
                <span className="country-code">{weatherData.sys.country}</span>
              </h1>
              <p className="current-date">{getCurrentDate()}</p>
            </div>

            {/* Weather Icon & Temperature */}
            <div className="main-weather">
              <div className="icon-container">
                <WeatherIcon condition={getWeatherCondition()} className="main-weather-icon" />
              </div>
              <div className="temperature-section">
                <div className="main-temperature">
                  {Math.round(weatherData.main.temp)}°C
                </div>
                <p className="weather-description">
                  {weatherData.weather[0].description}
                </p>
                <p className="feels-like">
                  Feels like {Math.round(weatherData.main.feels_like)}°C
                </p>
              </div>
            </div>

            {/* Weather Details Grid */}
            <div className="weather-grid">
              <div className="weather-card">
                <Wind className="card-icon" />
                <div className="card-content">
                  <p className="card-value">{weatherData.wind.speed}</p>
                  <p className="card-unit">m/s</p>
                  <p className="card-label">Wind Speed</p>
                </div>
              </div>

              <div className="weather-card">
                <Droplets className="card-icon" />
                <div className="card-content">
                  <p className="card-value">{weatherData.main.humidity}</p>
                  <p className="card-unit">%</p>
                  <p className="card-label">Humidity</p>
                </div>
              </div>

              <div className="weather-card">
                <Eye className="card-icon" />
                <div className="card-content">
                  <p className="card-value">{(weatherData.visibility / 1000).toFixed(1)}</p>
                  <p className="card-unit">km</p>
                  <p className="card-label">Visibility</p>
                </div>
              </div>

              <div className="weather-card">
                <Thermometer className="card-icon" />
                <div className="card-content">
                  <p className="card-value">{weatherData.main.pressure}</p>
                  <p className="card-unit">hPa</p>
                  <p className="card-label">Pressure</p>
                </div>
              </div>
            </div>

            {/* Min/Max Temperature */}
            <div className="minmax-card">
              <div className="minmax-item">
                <p className="minmax-value">{Math.round(weatherData.main.temp_min)}°</p>
                <p className="minmax-label">Min</p>
              </div>
              <div className="minmax-divider"></div>
              <div className="minmax-item">
                <p className="minmax-value">{Math.round(weatherData.main.temp_max)}°</p>
                <p className="minmax-label">Max</p>
              </div>
            </div>

          </div>
        ) : (
          <div className="welcome-container">
            <div className="welcome-content">
              <WeatherIcon condition="clear" className="welcome-icon" />
              <p className="welcome-text">Search for a city to get started</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}