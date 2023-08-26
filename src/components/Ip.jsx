import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {DateTime} from 'luxon'
import Card from 'react-bootstrap/Card';

const Ip = ({setLat, setLng}) => {

const [ip, setIp] = useState("");
const [city, setCity] = useState("");


const getIp = async() =>{
    try{
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await axios.get(`https://geo.ipify.org/api/v1?apiKey=${apiKey}`)
        const data = response.data; 
        console.log(response.data)
        setIp(data.ip);
        setCity(data.location.city);
        setLat(data.location.lat);
        setLng(data.location.lng);
        
    
    } catch (error){
    console.log(error, "Error to get a data");
    }


}


useEffect(() => {
    getIp();
}, []);

let dateTime = DateTime.now()
//console.log("Current Date", dateTime.toISO());


return (
    <div>
    <Card style={{ width: '25rem'}} className="customCard">
    <Card.Body>
    <Card.Text >
        <h3>Your IP Address is {ip} </h3>
        <h4>Your are currently located in {city} </h4>
        <h5>{`Today's date is ${dateTime}`}</h5>
        </Card.Text>
    </Card.Body>
        </Card>
    </div>
)
}

export default Ip;