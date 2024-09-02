function Stats({ ipAddress, location, isp, timesZone }) {
  return (
    <section
      id="stats"
      style={{ zIndex: 10000 }}
      className="container relative top-10  mx-auto max-w-[21.3rem] md:max-w-5xl"
    >
      <div className="flex flex-col items-center space-y-4 rounded-lg bg-white p-8 pb-12 shadow-xl md:flex-row md:space-x-12 md:space-y-0">
        <div className="flex flex-col items-center space-y-1 md:items-start md:border-r md:pr-10">
          <p className="text-darkGray text-sm font-semibold uppercase md:text-base">
            ip address
          </p>
          <p className="text-veryDarkGray text-2xl font-semibold">
            {ipAddress}
          </p>
        </div>

        <div className="flex flex-col items-center space-y-1 md:items-start md:border-r md:pr-10">
          <p className="text-darkGray text-sm font-semibold uppercase md:text-base">
            location
          </p>
          <p className="text-veryDarkGray text-2xl font-semibold">{location}</p>
        </div>

        <div className="flex flex-col items-center space-y-1 md:items-start md:border-r md:pr-10">
          <p className="text-darkGray text-sm font-semibold uppercase md:text-base">
            time zone
          </p>
          <p className="text-veryDarkGray text-2xl font-semibold">
            {timesZone}
          </p>
        </div>

        <div className="flex flex-col items-center space-y-1 md:items-start">
          <p className="text-darkGray text-sm font-semibold uppercase md:text-base">
            isp
          </p>
          <p className="text-veryDarkGray text-2xl font-semibold">{isp}</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
