import React, { useContext, useEffect, useState } from 'react'
import { WeatherContext } from './usecontext/WeatherContext'

const HourlyForcast = () => {
  const { weatherData, getWeatherIcon } = useContext(WeatherContext);
  const [selectDay, setselectDay] = useState("")
  const [openSelect, setopenSelect] = useState(false)



  const hourlyWeather = weatherData?.hourly;

  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  const today = currentTime.toLocaleDateString("en-US", {
    weekday: "long"
  });

  const startIndex = hourlyWeather?.time?.findIndex((time) => {

    const timeDate = new Date(time);

    if (selectDay === today) {
      return timeDate.getHours() === currentHour;
    }

    return timeDate.toLocaleDateString("en-US", {
      weekday: "long"
    }) === selectDay;

  });


  useEffect(() => {
    const day = currentTime.toLocaleDateString("en-US", {
      weekday: "long"
    });
    setselectDay(day)
  }, []
  )

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];


  const endIndex = startIndex >= 0 ? startIndex + 8 : 0;



  return (
    <div className="p-4 rounded-2xl xl:w-[28%] md:w-[30%] w-full bg-gray-700">

      <div className="flex relative justify-between w-full">
        <h2 className="text-white font-medium text-xl">
          Hourly Forecast
        </h2>

        <div onClick={() => setopenSelect(!openSelect)} className='md:text-lg text-sm rounded-lg text-white bg-gray-500 items-center flex xl:p-2 p-1 gap-2'>{selectDay}
          <img src='/assets/icon-dropdown.svg' alt='icon-dropdown' className='lg:w-3 w-2 lg:h-3 h-2' />
        </div>
        {
          openSelect &&
          <div className='absolute right-2 top-15 w-50 z-30 rounded-lg p-2 border border-gray-500 bg-gray-700'>
            {days.map((day, index) => (
              <p onClick={() => { setselectDay(day), setopenSelect(false) }} key={index} className='hover:bg-gray-600 w-full p-2 rounded-lg text-white text-sm'>{day}</p>
            ))}
          </div>

        }




      </div>
      {
        hourlyWeather ? (
          hourlyWeather?.time
            ?.slice(startIndex, endIndex)
            .map((time, index) => {
              const actualIndex = startIndex + index;

              return (
                <div
                  key={actualIndex}
                  className="flex rounded-lg bg-gray-600 p-3 w-full mt-4 items-center justify-between"
                >
                  <div className="flex gap-2 items-center">
                    <img
                      src={getWeatherIcon(hourlyWeather.weather_code[actualIndex])}
                      alt="weather icon"
                      className="w-10"
                    />
                    <p className="text-lg font-medium text-white">
                      {new Date(time).toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  <p className="text-md text-white">
                    {Math.round(hourlyWeather.temperature_2m[actualIndex])}
                    <sup>o</sup>
                  </p>
                </div>
              );
            })
        ) : (
          <div className='flex w-full flex-col space-y-4 mt-4 mb-2'>
            {Array.from({length : 8}).map((index) => (
              <div key={index} className='w-full bg-gray-600 rounded-2xl h-15  '></div>
            ))}
          </div>
        )
      }

    </div>
  );
};

export default HourlyForcast;