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
  const weatherText = (code) => {
    if (code === 0) return "Clear Sky";
    if (code === 1) return "Mainly Clear";
    if (code === 2) return "Partly Cloudy";
    if (code === 3) return "Cloudy";

    if (code >= 45 && code <= 50) return "Fog";
    if (code >= 51 && code <= 60) return "Drizzle";
    if (code >= 61 && code <= 60) return "Rain";
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

  const getWeatherIcon = (code) => {
    if (code <= 1)
      return <WiDaySunny className="text-8xl text-yellow-300 drop-shadow-lg" />;

    if (code === 2)
      return <WiCloud className="text-8xl text-white drop-shadow-lg" />;

    if (code === 3)
      return <WiCloudy className="text-8xl text-gray-100 drop-shadow-lg" />;

    if (code >= 45 && code <= 50)
      return <WiFog className="text-8xl text-gray-200 drop-shadow-lg" />;

    if ((code >= 51 && code <= 67) || (code >= 80 && code <= 94))
      return <WiRain className="text-8xl text-blue-200 drop-shadow-lg" />;

    if ((code >= 68 && code <= 77))
      return <WiSnow className="text-8xl text-cyan-100 drop-shadow-lg" />;

    if (code >= 95 && code <= 99)
      return (
        <WiThunderstorm className="text-8xl text-yellow-300 drop-shadow-lg" />
      );

    return <WiCloud className="text-8xl text-white drop-shadow-lg" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl p-6 text-white shadow-2xl"
      style={{
        backgroundImage: `url(${getWeatherBg(
          weather?.current?.weather_code
        )})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="mb-5 text-xl font-semibold">Current Weather</h2>

        <div className="flex flex-col items-center text-center">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            {getWeatherIcon(weather?.current?.weather_code)}
          </motion.div>

          <h1 className="mt-2 text-6xl font-bold">
            {weather?.current?.temperature_2m}°
          </h1>

          <p className="mt-2 text-lg font-medium text-white/90">
            {weatherText(weather?.current?.weather_code)}
          </p>

          <div className="mt-5 flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-md">
            <FaLocationDot className="text-red-300" />
            <span className="font-medium">
              {weather?.city}, {weather?.country}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CurrentWeather;