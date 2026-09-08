import React, { useEffect } from 'react'
import { useContext } from "react";
import { WeatherContext } from './usecontext/WeatherContext'
import DailyForcast from './DailyForcast';

const WeatherCard = () => {
    const { weatherData } = useContext(WeatherContext);
    const today = new Date();

    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric"
    });

    useEffect(() => {
        if (weatherData) {
            console.log("WeatherData:", weatherData);
            console.log("Current units:", weatherData.current_units);
            console.log("Daily units:", weatherData.daily_units);
        }
    }, [weatherData]);

    return (
        <div className=' flex-1'>
            {
                weatherData ?
                    <div className=' w-full h-80 flex items-center mb-8 relative p-4 '>
                        <img src="/assets/bg-today-large.svg" alt="" className="inset-0 hidden md:block w-full h-full  absolute rounded-2xl object-cover " />
                        <img src="/assets/bg-today-small.svg" alt="" className="inset-0 block md:hidden w-full h-full rounded-2xl absolute object-cover " />
                        <div className="flex md:flex-row flex-col space-y-3 justify-between w-full bg-transparent items-center relative z-20">
                            <div>
                                <h1 className="text-white text-2xl font-medium mb-2">{weatherData?.timezone}</h1>
                                <p className="text-neutral-300">{formattedDate}</p>
                            </div>
                            <p className="text-6xl text-white font-bold"> {weatherData?.current?.temperature_2m}
                                {weatherData?.current_units?.temperature_2m}</p>

                        </div>
                        <img src="/assets/icon-sunny.webp" alt="sunny icon" className="absolute md:right-1/4 md:top-1/3 top-40 right-50 w-23 h-23 " />
                    </div>
                    :
                    <div className='w-fyll h-80 bg-gray-700 mb-8 rounded-2xl relative'>
                        <img src='/assets/icon-loading.svg' alt='loading icon' className='absolute  top-1/2 right-1/2'/>
                        <p className='text-sm absolute bottom-1/3 right-1/2 text-gray-300 '>loading....</p>
                    </div>
            }


            <div className="grid md:grid-cols-4  grid-cols-2 gap-4">
                <div className='bg-gray-700 rounded-lg p-3 min-h-25 flex flex-col justify-between min-w-30'>
                    <p className="md:text-md text-sm text-neutral-300">Feels like</p>
                    <p className="md:text-2xl text-xl text-neutral-300 font-medium"> {weatherData?.current?.apparent_temperature}
                        {weatherData?.current_units?.apparent_temperature}</p>
                </div>

                <div className='bg-gray-700 rounded-lg p-3 min-h-25 flex flex-col justify-between min-w-30'>
                    <p className="md:text-md text-sm text-neutral-300">Humidity</p>
                    <p className="md:text-2xl text-xl text-neutral-300 font-medium">{weatherData?.current?.relative_humidity_2m} {weatherData?.current_units?.relative_humidity_2m}</p>
                </div>

                <div className='bg-gray-700 rounded-lg p-3 min-h-25 flex flex-col justify-between min-w-30'>
                    <p className="md:text-md text-sm text-neutral-300">Wind Speed</p>
                    <p className="md:text-2xl text-xl text-neutral-300 font-medium">{weatherData?.current?.wind_speed_10m}
                        {weatherData?.current_units?.wind_speed_10m}</p>
                </div>

                <div className='bg-gray-700 rounded-lg p-3 min-h-25 flex flex-col justify-between min-w-30'>
                    <p className="md:text-md text-sm text-neutral-300">Precipitation</p>
                    <p className="md:text-2xl text-xl text-neutral-300 font-medium">{weatherData?.current?.precipitation}
                        {weatherData?.current_units?.precipitation}</p>
                </div>
            </div>
            <DailyForcast />
        </div>

    )
}

export default WeatherCard