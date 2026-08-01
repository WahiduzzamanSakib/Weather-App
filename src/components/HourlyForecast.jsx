
import { motion } from "framer-motion";

function HourlyForecast({ weather }) {
  const hourly = weather?.hourly;
  const currentTime = weather?.current?.time;

  const currentIndex = hourly?.time.findIndex(
    (time) =>
      new Date(time).getHours() ===
      new Date(currentTime).getHours()
  );

  const next24Hours = hourly?.time.slice(
    currentIndex,
    currentIndex + 24
  );

  const getTemperatureFeeling = (temp) => {
    if (temp >= 38) return "Extreme Heat";
    if (temp >= 32) return "Very Hot";
    if (temp >= 26) return "Warm";
    if (temp >= 18) return "Pleasant";
    if (temp >= 10) return "Cool";
    if (temp >= 0) return "Cold";
    return "Freezing";
  };

  // function getWeather(code) {
  //   if (code >= 0 && code <= 1)
  //     return {
  //       text: "Sunny",
  //       icon: <WiDaySunny className="text-6xl text-yellow-400" />,
  //     };

  //   if (code >= 2 && code <= 3)
  //     return {
  //       text: "Cloudy",
  //       icon: <WiCloud className="text-6xl text-slate-500" />,
  //     };

  //   if (code >= 45 && code <= 48)
  //     return {
  //       text: "Fog",
  //       icon: <WiFog className="text-6xl text-gray-400" />,
  //     };

  //   if (code >= 51 && code <= 55)
  //     return {
  //       text: "Drizzle",
  //       icon: <WiSprinkle className="text-6xl text-cyan-400" />,
  //     };

  //   if (code >= 61 && code <= 65)
  //     return {
  //       text: "Rain",
  //       icon: <WiRain className="text-6xl text-blue-500" />,
  //     };

  //   if (code >= 71 && code <= 75)
  //     return {
  //       text: "Snow",
  //       icon: <WiSnow className="text-6xl text-sky-300" />,
  //     };

  //   if (code >= 80 && code <= 82)
  //     return {
  //       text: "Shower",
  //       icon: <WiRain className="text-6xl text-blue-400" />,
  //     };

  //   if (code >= 95 && code <= 99)
  //     return {
  //       text: "Storm",
  //       icon: <WiThunderstorm className="text-6xl text-purple-500" />,
  //     };

  //   return {
  //     text: "Unknown",
  //     icon: <WiCloud className="text-6xl text-gray-400" />,
  //   };
  // }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-6 rounded-3xl border border-white/20 bg-white/80 p-6 shadow-xl backdrop-blur-xl"
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">
          Hourly Forecast
        </h2>

        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
          Next 24 Hours
        </span>
      </div>

      <motion.div
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.06,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide"
      >
        {next24Hours?.map((time, index) => {
          const tempIndex = currentIndex + index;

          const isCurrent = index === 0;

          return (
            <motion.div
              key={time}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className={`min-w-[120px] rounded-3xl p-5 text-center transition-all ${isCurrent
                  ? "bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg"
                  : "border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-lg"
                }`}
            >
              <p
                className={`text-sm ${isCurrent
                    ? "text-white/80"
                    : "text-slate-500"
                  }`}
              >
                {isCurrent
                  ? "Now"
                  : new Date(time).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    hour12: true,
                  })}
              </p>

          

              

              <p className="text-3xl font-bold">
                {Math.round(
                  hourly.temperature_2m[tempIndex]
                )}
                °
              </p>

              <p
                className={`mt-2 text-xs ${isCurrent ? "text-white/80" : "text-gray-500"
                  }`}
              >
                {getTemperatureFeeling(hourly.temperature_2m[tempIndex])}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default HourlyForecast;