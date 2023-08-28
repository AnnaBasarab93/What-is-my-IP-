import React, {useEffect, useState} from 'react'
import axios from 'axios';


const CountryInfos = () => {
const [info, setInfo] = useState({});

const getInfo = async() =>{

    try{
        const response = await axios.get(`https://restcountries.com/v3.1/alpha/${data.location.country}`);
        console.log(response.data[0])
        //setInfo(response.data)
        
    } catch (error){
    console.log(error, "Error to get a data");
    }
}

useEffect(() => {
    getInfo();
}, []);


return (
    <div>
    
    </div>

    )
}
export default CountryInfos;