import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaLocationArrow,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { getCoordinates, getWeather } from "../api/weatherApi";

function SearchBar({ setWeather, setLoading }) {
  const [city, setCity] = useState("");

  const handleSearch = async () => {
    if (!city.trim()) return;

    try {
      setLoading(true);

      const location = await getCoordinates(city);

      const weatherData = await getWeather(
        location.latitude,
        location.longitude
      );

      setWeather({
        city: location.name,
        country: location.country,
        ...weatherData,
      });

      setCity("");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleMyLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const weatherData = await getWeather(latitude, longitude);

          setWeather({
            city: "Your Location",
            country: "",
            latitude,
            longitude,
            ...weatherData,
          });
        } catch (error) {
          alert(error.message);
        } finally {
          setLoading(false);
        }
      },
      () => {
        setLoading(false);
        alert("Location permission denied");
      }
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-lg"
    >
      <div className="flex flex-col gap-4 lg:flex-row">
        {/* Input */}
        <div className="relative flex-1">
          <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search any city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-12 pr-4 text-gray-700 shadow-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
          />
        </div>

        {/* Search Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSearch}
          className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-600 px-7 py-4 font-semibold text-white shadow-lg transition-all"
        >
          <motion.div
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <FaSearch />
          </motion.div>

          Search
        </motion.button>

        {/* Location Button */}
        <motion.button
          whileHover={{ scale: 1.05, y: -2, }}
          whileTap={{ scale: 0.95 }}
          onClick={handleMyLocation}
          className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-7 py-4 font-semibold text-white shadow-lg transition-all"
        >
          <motion.div
            animate={{
              y: [0, -3, 0],
            }}
            transition={{ repeat: Infinity, duration: 1.5, }}
          >
            <FaLocationArrow />
          </motion.div>

          My Location
        </motion.button>
      </div>
    </motion.div>
  );
}

export default SearchBar;