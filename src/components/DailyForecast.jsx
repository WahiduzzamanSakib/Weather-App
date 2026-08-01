function DailyForecast({ weather }) {

  const daily = weather?.daily;

  function getWeatherText(code) {

    if (code >= 0 && code <= 3) {
      return "Clear / Cloudy";
    }
    if (code >= 45 && code <= 48) {
      return "Fog";
    }
    if (code >= 51 && code <= 55) {
      return "Drizzle";
    }
    if (code >= 61 && code <= 65) {
      return "Rain";
    }
    if (code >= 71 && code <= 75) {
      return "Snow";
    }
    if (code >= 80 && code <= 82) {
      return "Rain Shower";
    }
    if (code >= 95 && code <= 99) {
      return "Thunderstorm";
    }
    return "Unknown";
  }


  return (
    <div className="mt-6 rounded-3xl bg-white p-6 shadow-lg">

      <h2 className="mb-6 text-xl font-bold">
        7-Day Forecast
      </h2>


      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
        {daily?.time.map((date, index) => (
          <div
            key={date}
            className="rounded-2xl bg-slate-100 p-4 text-center"
          >
            <p className="text-sm text-gray-500">
              {new Date(date).toLocaleDateString("en-US", {
                weekday: "short"
              })}
            </p>

          

            <p className="mt-3 text-2xl font-bold">
              {daily.temperature_2m_max[index]}°C
            </p>

            <p className="text-gray-500">
              {daily.temperature_2m_min[index]}°C
            </p>

              <p className="mt-3 text-lg font-semibold">
              {getWeatherText(daily.weather_code[index])}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyForecast;