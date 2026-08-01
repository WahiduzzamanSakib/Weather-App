// Get City Coordinates
export async function getCoordinates(city) {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch location.");
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("City not found.");
  }

  return data.results[0];
}

// Get Weather Data
export async function getWeather(latitude, longitude) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,pressure_msl&hourly=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=7&timezone=auto`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather.");
  }

  return await response.json();
}