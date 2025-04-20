export default function InfoBox(){
    let info = {
        description: "clear sky",
        feelsLike: 30.27,
        humidity: 43,
        temp: 30.17,
        tempMax: 30.17,
        tempMin: 30.17,
    }

    return(
        <div>
            <h1>Weather Info</h1>
            <ul>
                <li>Temp: {info.temp}</li>
                <li>Feels Like: {info.feelsLike}</li>
                <li>Humidity: {info.humidity}</li>
                <li>Max Temp: {info.tempMax}</li>
                <li>Min Temp: {info.tempMin}</li>
                <li>Weather Description: {info.description}</li>
            </ul>
        </div>
    )
}