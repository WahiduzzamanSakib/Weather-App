# 🌦️ Weather App

A modern and responsive weather application built with **React**, **Vite**, and **Tailwind CSS**. It allows users to search for any city, view current weather conditions, hourly forecasts, daily forecasts, and check weather based on their current location.

---

## 🚀 Live Demo

Live Link: https://wahid-weather.netlify.app

```
https://wahid-weather.netlify.app
```

---
## ✨ Features

* 🔍 Search weather by city name
* 📍 Get weather using current location
* 🌡️ Current weather information

  * Temperature
  * Feels Like
  * Humidity
  * Wind Speed
  * Pressure
  * Weather Condition
* ⏰ 24-Hour Forecast
* 📅 7-Day Weather Forecast
* 🌍 Automatic timezone support
* 📱 Fully Responsive Design
* ⚡ Fast API requests using Open-Meteo
* ❌ Error handling for invalid city names

---

## 🛠️ Technologies Used

* React
* Vite
* Tailwind CSS
* JavaScript (ES6+)
* React Icons
* Fetch API
* Open-Meteo API
* Browser Geolocation API

---


## 🌐 API

This project uses the **Open-Meteo API**.

### Geocoding API

```text
https://geocoding-api.open-meteo.com/v1/search
```

### Weather Forecast API

```text
https://api.open-meteo.com/v1/forecast
```

---

## 📊 Weather Information Displayed

### Current Weather

* Temperature
* Feels Like Temperature
* Humidity
* Wind Speed
* Pressure
* Weather Condition
* City Name
* Country

### Hourly Forecast

* Next 24 Hours Temperature
* Hourly Time

### Daily Forecast

* Next 7 Days
* Maximum Temperature
* Minimum Temperature
* Weather Condition

---

## 📍 Geolocation

The application uses the Browser Geolocation API.

Users can click the **My Location** button to automatically view weather information for their current location.
---
---

## 🔮 Future Improvements

* Celsius / Fahrenheit Toggle
* Search History
* Favorite Cities
* Weather Icons
* Dynamic Background
* Dark Mode
* Weather Alerts
* Air Quality Index
* Sunrise & Sunset
* UV Index
---

<!-- ## 📄 License

This project is licensed under the MIT License.

---
 const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,pressure_msl&hourly=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=7&timezone=auto`
  );  -->

## 👨‍💻 Author

**Md. Waheduzzaman**

GitHub: https://github.com/WahiduzzamanSakib/Weather-App <br>
Linkden: www.linkedin.com/in/waheduzzaman-md
