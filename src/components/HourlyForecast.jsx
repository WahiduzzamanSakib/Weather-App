function HourlyForecast({ weather }) {

  const hourly = weather?.hourly;
  const currentTime = weather?.current?.time;

  const currentIndex = hourly?.time.findIndex((time) =>
    new Date(time).getHours() === new Date(currentTime).getHours()
  );

  const next12Hours = hourly?.time.slice(
    currentIndex,
    currentIndex + 24
  );


  return (
    <div className="rounded-3xl bg-white mt-5 p-6 shadow-lg">

      <h2 className="mb-6 text-xl font-bold">
        Hourly Forecast
      </h2>

      <div className="flex gap-4 overflow-x-auto">
        {next12Hours?.map((time, index) => {
          const tempIndex = currentIndex + index;
          return (
            <div
              key={time}
              className="min-w-[100px] rounded-2xl bg-slate-100 p-4 text-center"
            >
              <p className="text-sm text-gray-500">
                {new Date(time).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  hour12: true
                })}
              </p>
              <p className="mt-2 text-2xl font-bold">
                {hourly.temperature_2m[tempIndex]}°C
              </p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default HourlyForecast;