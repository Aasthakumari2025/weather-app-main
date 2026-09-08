import React from 'react'
import { useContext } from 'react'
import {WeatherContext} from './usecontext/WeatherContext'


const ErrorPage = () => {
    const {error} = useContext(WeatherContext);

  
  return (
    <div className={`text-white w-full items-center space-y-4  text-center ${error ? "block " : "hidden"}`}> 
     <img src='/assets/icon-error.svg' alt="error" className="w-8 inline h-8"/>
     <h1 className="md:text-5xl ext-3xl font-bold  text-white">Something went wrong</h1>
     <p className="text-md text-neutral-300 max-w-96 mx-auto text-center">We could'n connect to the server(API error).Please try again in a few moments</p>
     <button type="button" onClick={() => window.location.reload()} className="bg-gray-500 rounded-md inline-flex  hover:bg-gray-400 focus:bg-gray-400 duration-500 hover:scale-110 items-center gap-2 px-2  py-2 cursor-pointer text-neutral-0">
        <img src="/assets/icon-retry.svg" alt="refresh" className='w-4 h-4'/>
        retry
     </button>
     </div>
  )
}

export default ErrorPage