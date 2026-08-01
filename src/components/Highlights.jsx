function Highlights({weather}) {

  return (

    <div className="rounded-3xl bg-white p-4 shadow-lg">

      <h2 className="mb-6 text-xl font-bold">
        Today's Highlights
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">

        <div className="rounded-2xl bg-slate-100 p-5">
          <h3>Humidity</h3>
          <p className="mt-2 text-3xl font-bold">
              {weather?.current?.relative_humidity_2m}%
          </p>
        </div>

        <div className="rounded-2xl bg-slate-100 p-5">
          <h3>Wind Speed</h3>
          <p className="mt-2 text-3xl font-bold">
            {weather?.current?.wind_speed_10m} km/h
          </p>
        </div>

        <div className="rounded-2xl bg-slate-100 p-5">
          <h3>Pressure</h3>
          <p className="mt-2 text-3xl font-bold">
                 {weather?.current?.pressure_msl} hPa
          </p>
        </div>

        <div className="rounded-2xl bg-slate-100 p-5">
          <h3>Feels Like</h3>
          <p className="mt-2 text-3xl font-bold">
            {weather?.current?.apparent_temperature}°C
          </p>
        </div>
      </div>
    </div>
  );
}

export default Highlights;