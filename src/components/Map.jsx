import React, { useState, useEffect} from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
//import { Icon } from "leaflet";

const Map = ({lat, lng}) => {
const [position, setPosition] = useState(null);

const icon = new Icon({
    iconUrl: "https://as1.ftcdn.net/v2/jpg/05/24/16/84/1000_F_524168432_SwASPZ9erHRRBUR4RbI7vDU8dLwZQwvz.webp",
    iconSize: [50, 50]
  });

useEffect(() => {
setPosition([lat, lng])
}, [lat, lng]);




return (
<>
{lat !== 0 && lng !== 0 ? (
<MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }} className='map'>
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}  icon={icon}>
    <Popup>
        You are here!
    </Popup>
    </Marker>
</MapContainer>) :null}
</>
    );
};

export default Map;