import React, {useState} from 'react'
import Ip from "./components/Ip"
import Map from "./components/Map"
import CountryInfos from "./components/CountryInfos"
import './App.css'

function App() {
const [lat, setLat]=useState(0);
const [lng, setLng]=useState(0);
//console.log(lat, lng)
  return (
    <>
    <h2>What's My IP?</h2>
    <Map lat={lat} lng={lng} />
      <Ip setLat={setLat} setLng={setLng}/>
      <CountryInfos />
    </>
  )
}

export default App;
