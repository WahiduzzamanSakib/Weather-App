import { FaSearch, FaLocationArrow } from "react-icons/fa";
import { useState } from "react";
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
          setLoading(true);

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
    <div className="mb-8 rounded-2xl bg-white p-6 shadow-lg">
      <div className="flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSearch}
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          <FaSearch />
          Search
        </button>


        <button
          onClick={handleMyLocation}
          className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700"
        >
          <FaLocationArrow />
          My Location
        </button>
      </div>
    </div>
  );
}

export default SearchBar;