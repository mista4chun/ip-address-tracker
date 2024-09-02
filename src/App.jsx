import { useEffect, useState } from "react";
import Search from "./Search";
import Stats from "./Stats";
import Map from "./Map";

function App() {
  const [ipAddress, setIpAddress] = useState("");
  const [location, setLocation] = useState("");
  const [isp, setIsp] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: 27.5035,
    lng: 77.67215,
  });

  const fetchData = async (ipAddress = "") => {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_uHWqtYXn6FSwJ69zishZsSzoukJam&ipAddress=${ipAddress}`,
    );
    const data = await res.json();
    setIpAddress(data.ip);
    setLocation(
      `${data.location.city}, ${data.location.country} ${data.location.postalCode}`,
    );
    setTimeZone(`UTC${data.location.timezone}`);
    setIsp(`${data.isp}`);
    setCoordinates({ lat: data.location.lat, lng: data.location.lng });
  };

  useEffect(function () {
    fetchData();
  }, []);

  return (
    <>
      <main id="Hero" className="h-80 pt-6 md:h-64">
        <h1 className="text-center text-2xl font-semibold text-white">
          IP Address Tracker
        </h1>

        <Search setIpAddress={setIpAddress} fetchData={fetchData} />
        <Stats
          ipAddress={ipAddress}
          location={location}
          isp={isp}
          timesZone={timeZone}
        />
      </main>
      <Map coordinates={coordinates} />
    </>
  );
}

export default App;
