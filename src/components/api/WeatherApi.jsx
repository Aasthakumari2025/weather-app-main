

const API_URL = "https://geocoding-api.open-meteo.com/v1/";
const WEATHER_API_URL = "https://api.open-meteo.com/v1/";


export async function fetchDataByCity(city) {
    const response = await fetch(`${API_URL}search?name=${city}`);
        if(!response.ok){
            throw new Error("failed to fetch data");
        }
        const data = await response.json();
        console.log(data);
        return data;
}

export async function fetchWeatherData(latitude, longitude,temp,ppt,speed) {
    const response = await fetch(`${WEATHER_API_URL}forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,precipitation,relative_humidity_2m,apparent_temperature,wind_speed_10m&wind_speed_unit=mph&precipitation_unit=inch&temperature_unit=${temp}&temperature_2m_unit=${temp}&wind_speed_unit=${speed}&precipitation_unit=${ppt}&hourly=temperature_2m,weather_code&start_date=2026-09-06&end_date=2026-09-15&timezone=auto&daily=temperature_2m_max,temperature_2m_min,weather_code`);
        if(!response.ok){
            throw new Error("failed to fetch weather data");
        }
        const Weatherdata = await response.json();
        console.log(Weatherdata)
        return Weatherdata;

}