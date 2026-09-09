import { createContext ,useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ( { children}) => {
    const [apierror, setapierror] = useState(null);
     const [notfound, setnotfound] = useState(false);
    const [search, setsearch] = useState("London")
     const [places, setplaces] = useState([])
     const [weatherData, setweatherData] = useState(null)
     const [temp, settemp] = useState("celsius");
     const [speed, setspeed] = useState("kmh");
     const [ppt, setppt] = useState("mm")

     function getWeatherIcon(code) {
    if (code === 0) return "/assets/icon-sunny.webp";
    if (code === 1 || code === 2) return "/assets/icon-partly-cloudy.webp";
    if (code === 3) return "/assets/icon-overcast.webp";
    if (code >= 45 && code <= 48) return "/assets/icon-fog.webp";
    if (code >= 51 && code <= 57) return "/assets/icon-drizzle.webp";
    if (code >= 61 && code <= 67) return "/assets/icon-rain.webp";
    if (code >= 71 && code <= 77) return "/assets/icon-snow.webp";
    if (code >= 95) return "/assets/icon-storm.webp";

    return "/assets/icon-overcast.webp";
}
    return (
        <WeatherContext.Provider value={{ apierror,notfound,setnotfound,temp,settemp, setapierror,ppt,setppt ,speed,setspeed,search,setsearch,setplaces,places,weatherData,setweatherData,getWeatherIcon}} >
           { children}
        </WeatherContext.Provider>
    )
}