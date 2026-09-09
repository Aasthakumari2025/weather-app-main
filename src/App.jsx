import React from 'react'
import Navbar from './components/Navbar'
import ErrorPage from './components/ErrorPage'
import { WeatherProvider, WeatherContext } from './components/usecontext/WeatherContext'

import { useContext } from 'react'
import WeatherPage from './components/WeatherPage'



const App = () => {

  return (


    <WeatherProvider>
      <WeatherContent />
    </WeatherProvider>


  )
}



function WeatherContent() {
  const { apierror } = useContext(WeatherContext);


  return (

    <div className="w-full min-h-screen pb-4 bg-blue-700">

      <Navbar />
      { apierror ? <ErrorPage /> : <WeatherPage/> }
    </div>
  )
}

export default App