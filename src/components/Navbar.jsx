import React, { useContext } from 'react'
import { useState } from 'react'
import { WeatherContext } from './usecontext/WeatherContext'

const Navbar = () => {
  const { temp, settemp, ppt, speed, setspeed, setppt } = useContext(WeatherContext)
  const [unitSelect, setunitSelect] = useState(false)
  return (
    <header className="flex justify-between relative  lg:mb-20 mb-6 mx-auto md:w-[80%] w-full md:px-0 px-5 py-4">
      <a href="/" ><img src="/assets/logo.svg" alt="logo" className='w-40 md:w-auto'/></a>
      <div onClick={() => setunitSelect(!unitSelect)} className="flex p-2 gap-1 border items-center border-gray-300 rounded-md">
        <img src="/assets/icon-units.svg" alt="icon-unit" className=" w-4 h-4" />
        <p className="text-gray-200 text-sm">Units</p>
        <img src="/assets/icon-dropdown.svg" alt="dropdown-arrow" className="cursor-pointer w-4 h-4" />
      </div>

      {
        unitSelect &&
        <div className='absolute bg-gray-700 w-50 z-60 border p-2 border-gray-500 rounded-lg top-16 right-4'>
          <h3 className='text-white text-md mb-4'>Switch to Imperial</h3>

          <div className='border-b border-gray-500'>
            <h4 className='text-sm text-neutral-300 mb-2'>Temperature</h4>
            <p onClick={() => {settemp("celsius")}} className={`w-full mb-2 flex p-1 text-white text-md justify-between rounded-md items-center ${temp === "celsius" ? "bg-gray-600" : "bg-gray-700"}  `}><span> Celsius (<sup>o</sup>C) </span>
              {
                temp === "celsius" &&
                <img src='/assets/icon-checkmark.svg' alt='checkmark icon' className='w-3 h-3' />
              }
            </p>
            <p onClick={() => {settemp("fahrenheit")}} className={`w-full flex mb-3 text-md text-white p-1 rounded-md  justify-between items-center ${temp === "fahrenheit" ? "bg-gray-600" : "bg-gray-700"} `}><span>Fahrenheit(<sup>o</sup>F)</span>
              {
                temp === "fahrenheit" &&
                <img src='/assets/icon-checkmark.svg' alt='checkmark icon' className='w-3 h-3' />
              }
            </p>
          </div>

          <div className='border-b border-gray-500'>
            <h4 className='text-sm text-neutral-300 mb-2'>Wind Speed</h4>
            <p onClick={() => {setspeed("kmh")}} className={`w-full mb-2 flex p-1 text-white text-md justify-between rounded-md items-center ${speed === "kmh" ? "bg-gray-600" : "bg-gray-700"}`}><span> km/h </span>
              {
                speed === "kmh" &&
                <img src='/assets/icon-checkmark.svg' alt='checkmark icon' className='w-3 h-3' />
              }
            </p>
            <p onClick={() => {setspeed("mph")}} className={`w-full flex mb-3 text-md text-white p-1 rounded-md justify-between items-center ${speed === "mph" ? "bg-gray-600" : "bg-gray-700"} `}><span>mph</span>
              {
                speed === "mph" &&
                <img src='/assets/icon-checkmark.svg' alt='checkmark icon' className='w-3 h-3' />
              }
            </p>
          </div>

          <div className=''>
            <h4 className='text-sm text-neutral-300 mb-2'>Precipitation</h4>
            <p onClick={() => {setppt("mm")}} className={`w-full mb-2 flex p-1 text-white text-md justify-between rounded-md items-center ${ppt === "mm" ? "bg-gray-600" : "bg-gray-700"}`}><span> Milimeters(mm) </span>
              {
                ppt === "mm" &&
                <img src='/assets/icon-checkmark.svg' alt='checkmark icon' className='w-3 h-3' />
              }
            </p>
            <p onClick={() => {setppt("inch")}} className={`w-full flex mb-3 text-md text-white p-1 rounded-md justify-between items-center ${ppt === "inch" ? "bg-gray-600" : "bg-gray-700"} `}><span>Inches(in)</span>
              {
                ppt === "inch" &&
                <img src='/assets/icon-checkmark.svg' alt='checkmark icon' className='w-3 h-3' />
              }
            </p>
          </div>

        </div>
      }


    </header>
  )
}

export default Navbar