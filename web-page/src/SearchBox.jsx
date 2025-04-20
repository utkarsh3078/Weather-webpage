import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox(){
    let[city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "485020098364174d3dcc207e6f86c3ea"

    let weatherInfo = async() => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            temp: jsonResponse.main.temp,
            tempMax: jsonResponse.main.temp_max,
            tempMin: jsonResponse.main.temp_min,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            description: jsonResponse.weather[0].description,
        }
        console.log(result)
    }
    

    let handleChange = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
        weatherInfo();
    }
    
    return(
        <>
        <h1>Search for weather</h1>
        <form>
        <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
        <br /> <br />
        <Button variant="contained" type='submit' onClick={handleSubmit}>Contained</Button>
        </form>
        </>
    )
}