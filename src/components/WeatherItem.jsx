import './WeatherItem.css'

const WeatherItem = (props) => {
    const weatherData = props.weatherData

    // const cityname = weatherData.name
    const temperature = weatherData.main.temp;
    const celsius = Math.round(temperature - 273.15);
    const windSpeed = weatherData.wind.speed;
    const cloudiness = weatherData.weather[0].description;
    const pressure = weatherData.main.pressure;
    const humidity = weatherData.main.humidity;

    const timezone = weatherData.timezone;
    const sunrise = weatherData.sys.sunrise;
    let sunriseTime = new Date((sunrise + timezone) * 1000).toUTCString();
    sunriseTime = sunriseTime.slice(-12, -7);
    const sunset = weatherData.sys.sunset;
    let sunsetTime = new Date((sunset + timezone) * 1000).toUTCString();
    sunsetTime = sunsetTime.slice(-12, -7);

    let monate = [ "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember" ];
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const monthName = monate[month];

    let iconSource;
    const icon = weatherData.weather[0].icon;
            const firstTwoChar = icon.slice(0, 2);
            const lastChar = icon.slice(2);

            if (lastChar == "d"){
                if (firstTwoChar == "01"){
                    iconSource = "./Sun.png";
                } else if(firstTwoChar == "02"){
                    iconSource = "./CloudySun.png";
                } else if (firstTwoChar == "03"){
                    iconSource = "./Clouds.png";
                } else if (firstTwoChar == "04"){
                    iconSource = "./DarkCloud.png";
                } else if (firstTwoChar == "09"){
                    iconSource = "./RainCloud.png";
                } else if (firstTwoChar == "10"){
                    iconSource = "./SunRain.png";
                } else if (firstTwoChar == "11"){
                    iconSource = "./Thunderstorm.png";
                } else if (firstTwoChar == "13"){
                    iconSource = "./Snow.png";
                } else if (firstTwoChar == "50"){
                    iconSource = "./Wind.png";
                }
            } else if (lastChar == "n"){
                if (firstTwoChar == "01"){
                    iconSource = "./ClearNight.png";
                } else if(firstTwoChar == "02"){
                    iconSource = "./CloudyNight.png";
                } else if (firstTwoChar == "03"){
                    iconSource = "./CloudyNight.png";
                } else if (firstTwoChar == "04"){
                    iconSource = "./DarkCloud.png";
                } else if (firstTwoChar == "09"){
                    iconSource = "./RainCloud.png";
                } else if (firstTwoChar == "10"){
                    iconSource = "./NightRain.png";
                } else if (firstTwoChar == "11"){
                    iconSource = "./Thunderstorm.png";
                } else if (firstTwoChar == "13"){
                    iconSource = "./Snow.png";
                } else if (firstTwoChar == "50"){
                    iconSource = "./Wind.png";
                }
            }

    return ( 
        <section>
            <h3>{props.name}</h3>
            <h4>{`${day} ${monthName}, ${year}`}</h4>
            <img className="big-img" src={iconSource}/>
            <h1>{celsius}°</h1>
            <h4>{cloudiness}</h4>
            <article>
            <div className="icon-wrapper">
            <img className="icon" src="./Wind.png"/>
            <p>{windSpeed}m/s</p>
            </div>
            <div className="icon-wrapper">
            <img className="icon" src="./Clouds.png"/>
            <p>{humidity}%</p>
            </div>
            </article>
            <div className="more-info">
            <p>Sunrise: {sunriseTime}</p>
            <p>Sunset: {sunsetTime}</p>
            <p>Pressure: {pressure} hPa</p>
            </div>
        </section>
     );
}
 
export default WeatherItem;