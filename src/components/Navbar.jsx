import { motion } from "framer-motion";
import { WiDaySunny } from "react-icons/wi";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 mb-8"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-6 py-4 shadow-xl backdrop-blur-md">
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated Weather Icon */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <WiDaySunny className="text-5xl text-yellow-400 drop-shadow-lg" />
          </motion.div>

          <div>
            <h1 className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-3xl font-extrabold text-transparent">
              Weather App
            </h1>
            <p className="text-sm text-gray-500">
              Real-Time Forecast
            </p>
          </div>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2 font-medium text-white shadow-lg"
        >
          🌍 Explore
        </motion.button>
      </div>
    </motion.nav>
  );
}

export default Navbar;