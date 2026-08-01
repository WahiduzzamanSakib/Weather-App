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
import { FaLocationDot } from "react-icons/fa6";

function CurrentWeather({ weather }) {
  const weatherText = {
    0: "Clear Sky",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Cloudy",
    45: "Fog",
    51: "Drizzle",
    61: "Rain",
    71: "Snow",
    95: "Thunderstorm",
  };

  const getWeatherIcon = (code) => {
    switch (code) {
      case 0:
      case 1:
        return <WiDaySunny className="text-8xl text-yellow-300" />;
      case 2:
        return <WiCloud className="text-8xl" />;
      case 3:
        return <WiCloudy className="text-8xl" />;
      case 45:
        return <WiFog className="text-8xl" />;
      case 51:
      case 61:
        return <WiRain className="text-8xl text-blue-200" />;
      case 71:
        return <WiSnow className="text-8xl text-cyan-200" />;
      case 95:
        return <WiThunderstorm className="text-8xl text-yellow-300" />;
      default:
        return <WiCloud className="text-8xl" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl bg-gradient-to-br from-sky-500 to-indigo-600 p-6 text-white shadow-xl"
    >
      <h2 className="mb-5 text-xl font-semibold">Current Weather</h2>

      <div className="flex flex-col items-center text-center">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          {getWeatherIcon(weather?.current?.weather_code)}
        </motion.div>

        <h1 className="mt-2 text-6xl font-bold">
          {weather?.current?.temperature_2m}°
        </h1>

        <p className="mt-2 text-lg text-sky-100">
          {weatherText[weather?.current?.weather_code]}
        </p>

        <div className="mt-5 flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
          <FaLocationDot className="text-red-300" />
          <span className="font-medium">
            {weather?.city}, {weather?.country}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default CurrentWeather;