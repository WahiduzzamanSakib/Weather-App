import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Highlights from "./components/Highlights";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [weather, setWeather] = useState(null);

  return (
    <div className="min-h-screen bg-sky-100">
      <div className="mx-auto max-w-7xl px-4 py-8">

        <Navbar />
          {/* <SearchBar setWeather={setWeather} />  */}

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            {/* <CurrentWeather weather={weather} /> */}
          </div>

          <div className="lg:col-span-2">
            {/* <Highlights weather={weather} /> */}
          </div>
        </div>

        {/* <HourlyForecast weather={weather} /> */}
        {/* <DailyForecast weather={weather} /> */}

        <Footer /> 
      </div>
    </div>
  );
}

export default App;