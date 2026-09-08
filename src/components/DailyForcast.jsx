import React, { useContext } from 'react'
import { WeatherContext } from './usecontext/WeatherContext'

const DailyForcast = () => {
    const { weatherData ,getWeatherIcon} = useContext(WeatherContext);
    const dailyWeather = weatherData?.daily;
    console.log(dailyWeather?.time);


    console.log(dailyWeather)
    return (
        <div className='mt-6' >
            <h2 className='text-2xl font-medium text-white'>Daily Forcast</h2>
            { dailyWeather ?  <div  className="grid xl:grid-cols-7 md:grid-cols-4 grid-cols-3 mt-3 gap-4">
                {dailyWeather?.time?.slice(0,7).map((date, index) => (

                    <div key={index} className="bg-gray-700 min-w-20 rounded-2xl text-center md:p-3 p-2">
                        <h3 className='text-md text-white font-medium'>{new Date(date).toLocaleDateString("en-US",{
                            weekday:"short"
                        })}</h3>
                        <img src={getWeatherIcon(dailyWeather?.weather_code[index])} alt='weather icon' className=' object-center' />
                        <div className='flex lg:gap-4 gap-2  justify-between'>
                            <p className='text-white md:text-md text-sm'>{dailyWeather?.temperature_2m_max[index]}<sup>o</sup></p>
                            <p className='text-neutral-300 md:text-md text-sm'>{dailyWeather?.temperature_2m_min[index]}<sup>o</sup></p>
                        </div>
                    </div>

                ))}
            </div> :
            (
                <div className='grid xl:grid-cols-7 md:grid-cols-4 grid-cols-3 mt-3 gap-4'>
                    {Array.from({length:7}).map((_,index) => (
                        <div key={index} className='relative min-w-20 h-40 text-lg text-white flex items-center justify-center rounded-2xl bg-gray-700'>
                          -
                        </div>
                    ))}
                </div>
            )
            }
           
        </div>

    )
}

export default DailyForcast