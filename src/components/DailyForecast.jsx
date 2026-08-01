import { motion } from "framer-motion";
import {
  WiDaySunny,
  WiCloud,
  WiFog,
  WiSprinkle,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";

function DailyForecast({ weather }) {
  const daily = weather?.daily;

  function getWeather(code) {
    if (code >= 0 && code <= 1)
      return {
        text: "Sunny",
        icon: <WiDaySunny className="text-6xl text-yellow-400" />,
      };

    if (code >= 2 && code <= 3)
      return {
        text: "Cloudy",
        icon: <WiCloud className="text-6xl text-slate-500" />,
      };

    if (code >= 45 && code <= 48)
      return {
        text: "Fog",
        icon: <WiFog className="text-6xl text-gray-400" />,
      };

    if (code >= 51 && code <= 55)
      return {
        text: "Drizzle",
        icon: <WiSprinkle className="text-6xl text-cyan-400" />,
      };

    if (code >= 61 && code <= 65)
      return {
        text: "Rain",
        icon: <WiRain className="text-6xl text-blue-500" />,
      };

    if (code >= 71 && code <= 75)
      return {
        text: "Snow",
        icon: <WiSnow className="text-6xl text-sky-300" />,
      };

    if (code >= 80 && code <= 82)
      return {
        text: "Shower",
        icon: <WiRain className="text-6xl text-blue-400" />,
      };

    if (code >= 95 && code <= 99)
      return {
        text: "Storm",
        icon: <WiThunderstorm className="text-6xl text-purple-500" />,
      };

    return {
      text: "Unknown",
      icon: <WiCloud className="text-6xl text-gray-400" />,
    };
  }

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
          const weatherInfo = getWeather(daily.weather_code[index]);
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
              className={`relative overflow-hidden rounded-3xl border p-5 transition-all duration-300 ${
                isToday
                  ? "border-sky-400 bg-gradient-to-br from-sky-500 to-cyan-400 text-white shadow-xl"
                  : "border-slate-200 bg-gradient-to-br from-white to-slate-100 shadow-md"
              }`}
            >
              {isToday && (
                <span className="absolute right-3 top-3 rounded-full bg-white/20 px-2 py-1 text-xs font-semibold">
                  Today
                </span>
              )}

              <p
                className={`text-sm font-medium ${
                  isToday ? "text-white" : "text-gray-500"
                }`}
              >
                {new Date(date).toLocaleDateString("en-US", {
                  weekday: "short",
                })}
              </p>

              <div className="my-3 flex justify-center">
                {weatherInfo.icon}
              </div>

              <p
                className={`text-lg font-semibold ${
                  isToday ? "text-white" : "text-slate-700"
                }`}
              >
                {weatherInfo.text}
              </p>

              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="text-3xl font-bold">
                  {daily.temperature_2m_max[index]}°
                </span>

                <span
                  className={`text-lg ${
                    isToday ? "text-sky-100" : "text-gray-500"
                  }`}
                >
                  / {daily.temperature_2m_min[index]}°
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default DailyForecast;