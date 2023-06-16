import { useState } from "react";
import WeatherItem from "../components/WeatherItem";
import './Home.css'

const Home = () => {

const API_KEY = import.meta.env.VITE_API_KEY
let city = "Hamburg"
let lat = 53.550341
let lon = 10.000654
const [locationData, setLocationData] = useState()
const [weatherData, setWeatherData] = useState()
let alert = "Error: City not found ! Please try again !"
const [warning, setWarning] = useState(false)
const [searchDone, setSearchDone] = useState(false)


const getWeatherData = () => {
    event.preventDefault()
    setWarning(false)
    city = document.querySelector("#cityInput").value;

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
        setLocationData(data)
        // console.log({data});

        if(data === undefined || data.length == 0 ){
            setLocationData([{lat: 53.550341, lon: 10.000654, name: "Hamburg"}])
            setWarning(true)
        } else {
            lat = data[0].lat
            lon = data[0].lon
            setSearchDone(true)
        }

        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
           setWeatherData(data)
            // console.log({data});
        })
        .catch((err) => console.log(`Fehler: ${err}`))
    })
    .catch((err) => console.log(`Fehler: ${err}`))
}

const changeCity = () => {
    setSearchDone(false)
}

    return (
        <main>
        <form>
        <div className="input-wrapper" style={searchDone ? {top: "-100rem"} : {top: "5rem"}}>
        <h2>Weather App</h2>
        <input type="text" placeholder="please enter city name" id="cityInput" />
        <h5 style={warning ? {display: "block"} : {display: "none"}}>{alert}</h5>
        <input onClick={getWeatherData} type="submit" value="search" />
        </div>
        </form>
        <figure style={searchDone ? {bottom: "0"} : {bottom: "-100rem"}}>
        {weatherData  ? (
        <WeatherItem weatherData={weatherData} name={locationData[0].name} />
        ) : (
            <p>loading..</p>
        )}
        <button onClick={changeCity}>change city</button>
        </figure>
        </main>
     );
}
 
export default Home;