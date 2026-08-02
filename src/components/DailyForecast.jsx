import { motion } from "framer-motion";
import {
  WiDaySunny,
  WiCloud,
  WiCloudy,
  WiFog,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";

function DailyForecast({ weather }) {
  const daily = weather?.daily;

  // Weather Text
  const weatherText = (code) => {
    if (code === 0) return "Clear Sky";
    if (code === 1) return "Mainly Clear";
    if (code === 2) return "Partly Cloudy";
    if (code === 3) return "Cloudy";

    if (code >= 45 && code <= 50) return "Fog";
    if (code >= 51 && code <= 60) return "Drizzle";
    if (code >= 61 && code <= 67) return "Rain";
    if (code >= 71 && code <= 79) return "Snow";
    if (code >= 80 && code <= 84) return "Rain Showers";
    if (code >= 85 && code <= 94) return "Snow Showers";
    if (code >= 95 && code <= 99) return "Thunderstorm";

    return "Unknown Weather";
  };

  // Background Image
  const getWeatherBg = (code) => {
    // ☀️ Sunny
    if (code <= 1)
      return "/public/weather/sunny.jpg";

    // ☁️ Cloudy
    if (code >= 2 && code <= 3)
      return "/public/weather/cloud-sky.jpg";

    // 🌫️ Fog
    if (code >= 45 && code <= 50)
      return "/public/weather/fog.jpg";

    // 🌧️ Rain
    if ((code >= 51 && code <= 67) || (code >= 80 && code <= 84))
      return "/public/weather/rain.jpg";

    // ❄️ Snow
    if ((code >= 71 && code <= 79) || (code >= 85 && code <= 94))
      return "/public/weather/snow.jpg";

    // ⛈️ Thunderstorm
    if (code >= 95 && code <= 99)
      return "/public/weather/thunderstorm.jpg";

    return "/public/weather/blue-sky.avif";
  };

  // Weather Icon
  const getWeatherIcon = (code) => {
    if (code <= 1)
      return (
        <WiDaySunny className="text-6xl text-yellow-300 drop-shadow-lg" />
      );

    if (code === 2)
      return <WiCloud className="text-6xl text-white drop-shadow-lg" />;

    if (code === 3)
      return <WiCloudy className="text-6xl text-gray-100 drop-shadow-lg" />;

    if (code >= 45 && code <= 50)
      return <WiFog className="text-6xl text-gray-200 drop-shadow-lg" />;

    if ((code >= 51 && code <= 67) || (code >= 80 && code <= 84))
      return <WiRain className="text-6xl text-blue-200 drop-shadow-lg" />;

    if ((code >= 71 && code <= 79) || (code >= 85 && code <= 94))
      return <WiSnow className="text-6xl text-cyan-100 drop-shadow-lg" />;

    if (code >= 95 && code <= 99)
      return (
        <WiThunderstorm className="text-6xl text-yellow-300 drop-shadow-lg" />
      );

    return <WiCloud className="text-6xl text-white drop-shadow-lg" />;
  };

  return (
    <section className="mt-8 rounded-3xl border border-white/20 bg-white/70 p-6 shadow-2xl backdrop-blur-lg">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">
          7-Day Forecast
        </h2>

        <span className="rounded-full bg-sky-100 px-4 py-1 text-sm font-medium text-sky-700">
          Weekly Outlook
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-7">
        {daily?.time.map((date, index) => {
          const code = daily.weather_code[index];
          const isToday = index === 0;

          return (
            <motion.div
              key={date}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.45,
              }}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              style={{
                backgroundImage: `url(${getWeatherBg(code)})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="relative overflow-hidden rounded-3xl border border-white/20 shadow-xl"
            >
              {/* Overlay */}
              <div
                className={`absolute inset-0 ${
                  isToday ? "bg-sky-900/45" : "bg-black/45"
                }`}
              />

              {/* Content */}
              <div className="relative z-10 p-5 text-white">
                {isToday && (
                  <span className="absolute right-3 top-3 rounded-full bg-white/20 px-2 py-1 text-xs font-semibold backdrop-blur">
                    Today
                  </span>
                )}

                <p className="text-sm font-medium">
                  {new Date(date).toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </p>

                <div className="my-4 flex justify-center">
                  {getWeatherIcon(code)}
                </div>

                <p className="text-lg font-semibold text-center">
                  {weatherText(code)}
                </p>

                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="text-3xl font-bold">
                    {daily.temperature_2m_max[index]}°
                  </span>

                  <span className="text-lg text-gray-200">
                    / {daily.temperature_2m_min[index]}°
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default DailyForecast;