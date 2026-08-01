function CurrentWeather({ weather }) {
  console.log(weather)
  const weatherText = {
    0: "Clear Sky",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Cloudy",
    45: "Fog",
    51: "Drizzle",
    61: "Rain",
    71: "Snow",
    95: "Thunderstorm"
  };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-xl font-bold">
        Current Weather
      </h2>

      <div className="text-center">

        <h1 className="text-6xl font-bold bg-slate-100">
          {weather?.current?.temperature_2m}°C
        </h1>

        <p className="mt-3 text-lg bg-slate-100">
          {weatherText[weather?.current?.weather_code]}
        </p>

        <div className="mt-6 flex justify-center gap-2 font-semibold">
          <p className=" text-black">
            {weather?.city}
          </p>,

          <p className="text-black">
            {weather?.country}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;