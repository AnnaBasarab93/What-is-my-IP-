import React, {useEffect, useState} from 'react'
import axios from 'axios';


const CountryInfos = () => {
const [info, setInfo] = useState('');

const getInfo = async() =>{

    try{
        const {data} = await axios.get('https://restcountries.com/v3.1/name/');
        console.log(data[2])
        //setInfo(data[0])
        
    } catch (error){
    console.log(error, "Error to get a data");
    }
}

useEffect(() => {
    getInfo();
}, []);


return (
    <div><h3></h3>
    </div>

    )
}
export default CountryInfos;