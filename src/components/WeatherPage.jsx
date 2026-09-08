import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { WeatherContext } from './usecontext/WeatherContext'
import { fetchDataByCity, fetchWeatherData } from './api/WeatherApi'
import WeatherCard from './WeatherCard'
import HourlyForcast from './HourlyForcast'

const WeatherPage = () => {
  const { search, setsearch, seterror,temp,ppt,speed, setplaces, places,  setweatherData } = useContext(WeatherContext);
  const [open, setopen] = useState(false)

  useEffect(() => {
    if (search.length <= 1) {
      setplaces([]);
      seterror(null);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        const data = await fetchDataByCity(search);

        if (!data.results?.length) {
          setplaces([]);
          seterror("City not found");
          return;
        }

        const filterData = data.results.filter((place,index,self) => 
          index === self.findIndex((p) => p.name.toLowerCase() === place.name.toLowerCase())
        )

        setplaces(filterData);
        const place = data.results[0];

        const weatherdata = await fetchWeatherData(place.latitude, place.longitude ,temp,ppt,speed);
        setweatherData(weatherdata);
      } catch (err) {
        seterror(err.message);
      }
    }, 500); // debounce 500ms

    return () => clearTimeout(timeout);
  }, [search,temp,ppt,speed]);

  const handleSelect = (place) => {
    setsearch(place.name);
    setopen(false);
  };



  return (
    <section className="xl:w-[80%] lg:w-[90%] w-full lg:px-0 px-4 mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center">How's the sky looking today?</h1>
      <form onSubmit={(e) => e.preventDefault()} className="flex items-start gap-3 lg:max-w-[45%] max-w-[80%] w-full flex-col md:flex-row  mx-auto lg:mt-20 mt-8 mb-8">
        <div className='relative w-full'>
          <label className="flex items-center gap-3 flex-1 px-3 py-2 border hover:border-neutral-200 focus:border-neutral-200 rounded-lg bg-gray-700 border-transparent">
            <img src="/assets/icon-search.svg" alt="search icon" className="w-5 h-5 " />
            <input value={search} onChange={(e) => { setsearch(e.target.value), setopen(true) }} type="search" placeholder="Search for a place...." className="outline-none w-full text-md font-medium text-neutral-200" />
          </label>

          {open && places.length > 0 && (
            <div className="absolute  z-50 w-full mt-2 bg-gray-600 rounded-2xl p-2 shadow-lg">
              {places.slice(0, 4).map((place) => (
                <p
                  key={place.id}
                  onClick={() => handleSelect(place)}
                  className="px-4 py-2 text-white rounded-2xl hover:bg-gray-500 cursor-pointer"
                >
                  {place.name}
                </p>
              ))}
            </div>
          )}

        </div>

        <button type='submit' onClick={() => setopen(false)} className="rounded-lg bg-blue-500 w-full md:w-auto text-white text-lg px-4 py-2">Search</button>
      </form>
      <div className="w-full flex  md:flex-row flex-col gap-10 justify-between">
        <WeatherCard />
        <HourlyForcast />
      </div>


    </section>
  )
}

export default WeatherPage