import { useState } from 'react'
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'
import "./WeatherApp.css"


export default function WeatherApp(){
    const[weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        description: "clear sky",
        feelsLike: 30.27,
        humidity: 43,
        temp: 30.17,
        tempMax: 30.17,
        tempMin: 30.17,
    })

    let updateInfo = (result) =>{
        setWeatherInfo(result);
    }

    return(
        <div className='weather'>
            <h1>Weather</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}