import {
  WiDaySunny,
  WiCloud,
  WiCloudy,
  WiFog,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";

import { motion } from "framer-motion";

function HourlyForecast({ weather }) {
  const hourly = weather?.hourly;
  const currentTime = weather?.current?.time;

  const currentIndex = hourly?.time?.findIndex(
    (time) =>
      new Date(time).getHours() ===
      new Date(currentTime).getHours()
  );

  const validIndex = currentIndex !== -1 ? currentIndex : 0;

  const next24Hours = hourly?.time?.slice(
    validIndex,
    validIndex + 24
  );

  const getTemperatureFeeling = (temp) => {
    if (temp >= 45) return "Extreme Heat";
    if (temp >= 40) return "Very Hot";
    if (temp >= 32) return "Warm";
    if (temp >= 18) return "Pleasant";
    if (temp >= 10) return "Cool";
    if (temp >= 0) return "Cold";
    return "Freezing";
  };

  // প্রফেশনাল ও সফট কালার প্যালেট (Slightly Muted Gradients)
  const getCardBackground = (temp, isCurrent) => {
    const baseBorder = isCurrent 
      ? "border-2 border-white/80 ring-2 ring-white/20 shadow-xl shadow-sky-500/20 scale-[1.03]" 
      : "border border-white/10 hover:border-white/30 shadow-md hover:shadow-lg backdrop-blur-md opacity-90 hover:opacity-100";

    if (temp >= 45)
      return `bg-gradient-to-b from-red-500/90 via-rose-600/80 to-amber-700/80 text-white ${baseBorder}`;

    if (temp >= 40)
      return `bg-gradient-to-b from-orange-500/90 to-red-600/80 text-white ${baseBorder}`;

    if (temp >= 32)
      return `bg-gradient-to-b from-amber-500/90 to-orange-600/80 text-white ${baseBorder}`;

    if (temp >= 18)
      return `bg-gradient-to-b from-sky-400/90 to-blue-600/80 text-white ${baseBorder}`;

    if (temp >= 10)
      return `bg-gradient-to-b from-teal-400/90 to-emerald-600/80 text-white ${baseBorder}`;

    if (temp >= 0)
      return `bg-gradient-to-b from-blue-500/90 to-indigo-700/80 text-white ${baseBorder}`;

    return `bg-gradient-to-b from-indigo-800/90 via-purple-900/80 to-slate-900/80 text-white ${baseBorder}`;
  };

  const getWeatherIcon = (code) => {
    if (code <= 1)
      return <WiDaySunny className="text-5xl text-amber-300 filter drop-shadow-[0_2px_8px_rgba(251,191,36,0.4)]" />;

    if (code === 2)
      return <WiCloud className="text-5xl text-slate-100 filter drop-shadow" />;

    if (code === 3)
      return <WiCloudy className="text-5xl text-slate-200 filter drop-shadow" />;

    if (code >= 45 && code <= 50)
      return <WiFog className="text-5xl text-slate-200 filter drop-shadow" />;

    if ((code >= 51 && code <= 67) || (code >= 80 && code <= 84))
      return <WiRain className="text-5xl text-sky-200 filter drop-shadow-[0_2px_8px_rgba(56,189,248,0.3)]" />;

    if ((code >= 71 && code <= 79) || (code >= 85 && code <= 94))
      return <WiSnow className="text-5xl text-cyan-100 filter drop-shadow" />;

    if (code >= 95 && code <= 99)
      return (
        <WiThunderstorm className="text-5xl text-amber-300 filter drop-shadow-[0_2px_8px_rgba(252,211,77,0.4)]" />
      );

    return <WiCloud className="text-5xl text-white filter drop-shadow" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mt-8 rounded-3xl border border-white/20 bg-white/60 p-6 shadow-2xl backdrop-blur-2xl"
    >
      
      <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-black/90">
            Hourly Forecast
          </h2>
          <p className="text-xs text-slate-500">Temperature breakdown for today</p>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-700/30 px-3 py-1 text-xs font-medium text-black border border-sky-400/20 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-600 animate-pulse" />
          Next 24 Hours
        </span>
      </div>


      <motion.div
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.04,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="flex gap-4 overflow-x-auto pb-4 pt-2 [::-webkit-scrollbar]:h-2 [::-webkit-scrollbar-track]:rounded-full [::-webkit-scrollbar-track]:bg-white/5 [::-webkit-scrollbar-thumb]:rounded-full [::-webkit-scrollbar-thumb]:bg-white/20 hover:[::-webkit-scrollbar-thumb]:bg-white/40"
      >
        {next24Hours?.map((time, index) => {
          const tempIndex = validIndex + index;
          const isCurrent = index === 0;

          const currentTemp = hourly?.temperature_2m?.[tempIndex] ?? 0;

          const code =
            hourly?.weather_code?.[tempIndex] ??
            hourly?.weathercode?.[tempIndex];

          return (
            <motion.div
              key={time}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`min-w-[110px] flex-1 rounded-2xl p-4 text-center transition-all ${getCardBackground(
                currentTemp,
                isCurrent
              )}`}
            >
              {/* সময় */}
              <p className="text-xs font-semibold tracking-wider text-white/80 uppercase">
                {isCurrent
                  ? "Now"
                  : new Date(time).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      hour12: true,
                    })}
              </p>

              {/* আইকন */}
              <div className="my-3 flex justify-center">
                {getWeatherIcon(code)}
              </div>

              {/* তাপমাত্রা */}
              <p className="text-2xl font-bold tracking-tight text-white">
                {Math.round(currentTemp)}°
              </p>

              {/* অনুভূতির তথ্য */}
              <p className="mt-1 text-[11px] font-medium tracking-wide text-white/70">
                {getTemperatureFeeling(currentTemp)}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default HourlyForecast;