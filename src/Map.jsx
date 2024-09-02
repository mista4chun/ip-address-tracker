import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon from "./assets/images/icon-location.svg";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

function Map({ coordinates }) {
  const marker = new L.icon({ iconUrl: markerIcon });
  let state = {
    keyMAP: Math.random(),
  };
  return (
    <MapContainer
      key={state.keyMAP}
      center={[coordinates.lat, coordinates.lng]}
      zoom={18}
      scrollWheelZoom={false}
      style={{ width: "100vw", height: "670px" }}
    >
      <TileLayer
        attribution="Google Maps"
        url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
      />
      <Marker
        position={[coordinates.lat, coordinates.lng]}
        icon={marker}
      ></Marker>
    </MapContainer>
  );
}

export default Map;
