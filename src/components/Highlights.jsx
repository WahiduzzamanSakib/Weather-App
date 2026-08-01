import { motion } from "framer-motion";
import {
  WiHumidity,
  WiStrongWind,
  WiBarometer,
  WiThermometer,
} from "react-icons/wi";

function Highlights({ weather }) {
  const highlights = [
    {
      title: "Humidity",
      value: `${weather?.current?.relative_humidity_2m}%`,
      icon: <WiHumidity className="text-5xl text-sky-500" />,
      bg: "from-sky-500/10 to-cyan-500/10",
    },
    {
      title: "Wind Speed",
      value: `${weather?.current?.wind_speed_10m} km/h`,
      icon: <WiStrongWind className="text-5xl text-emerald-500" />,
      bg: "from-emerald-500/10 to-green-500/10",
    },
    {
      title: "Pressure",
      value: `${weather?.current?.pressure_msl} hPa`,
      icon: <WiBarometer className="text-5xl text-orange-500" />,
      bg: "from-orange-500/10 to-yellow-500/10",
    },
    {
      title: "Feels Like",
      value: `${weather?.current?.apparent_temperature}°C`,
      icon: <WiThermometer className="text-5xl text-red-500" />,
      bg: "from-red-500/10 to-pink-500/10",
    },
  ];

  return (
    <section className="rounded-3xl border border-white/20 bg-white/70 p-6 shadow-2xl backdrop-blur-lg">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">
          Today's Highlights
        </h2>

        <span className="rounded-full bg-sky-100 px-4 py-1 text-sm font-medium text-sky-700">
          Live Data
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className={`rounded-3xl border border-white/30 bg-gradient-to-br ${item.bg} p-5 shadow-lg backdrop-blur-md`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {item.title}
                </p>

                <h3 className="mt-3 text-3xl font-bold text-slate-800">
                  {item.value}
                </h3>
              </div>

              <div className="rounded-2xl bg-white p-2 shadow">
                {item.icon}
              </div>
            </div>

            <motion.div
              className="mt-5 h-2 overflow-hidden rounded-full bg-gray-200"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${item.title === "Humidity"
                      ? weather?.current?.relative_humidity_2m
                      : item.title === "Wind Speed"
                        ? Math.min(
                          weather?.current?.wind_speed_10m,
                          100
                        )
                        : item.title === "Pressure"
                          ? Math.min(
                            ((weather?.current?.pressure_msl - 900) / 200) * 100,
                            100
                          )
                          : Math.min(
                            weather?.current?.apparent_temperature * 2,
                            100
                          )
                    }%`,
                }}
                transition={{ duration: 1, delay: 0.2, }}
                className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Highlights;