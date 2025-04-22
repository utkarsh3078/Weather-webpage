import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { colors } from '@mui/material';
import "./SearchBox.css";

export default function SearchBox({updateInfo}){
    let[city, setCity] = useState("");
    let[error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "485020098364174d3dcc207e6f86c3ea"

    let weatherInfo = async() => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMax: jsonResponse.main.temp_max,
            tempMin: jsonResponse.main.temp_min,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            description: jsonResponse.weather[0].description,
        }
        console.log(result)
        return result;
        }catch(err){
            throw err;
        }
        
    }
    

    let handleChange = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = async(event) => {
        try{
            event.preventDefault();
            console.log(city);
            let newInfo = await weatherInfo();
            updateInfo(newInfo);
            setCity("");
        }catch(err){
            setError(true);
        }
        
    }
    
    return(
        <div className='search'>
        <form>
        <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
        <br /> <br />
        <Button variant="contained" type='submit' onClick={handleSubmit} id='button'>Submit</Button>
        {error && <p style={{color: "red"}}>No such place exist!</p> }
        </form>
        </div>
    )
}