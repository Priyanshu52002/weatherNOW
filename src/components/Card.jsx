import React from 'react'
import { useWeather } from '../context/weather'
function Card() {
  const weather=useWeather()
  return (
    <div className='card'>
        <img className='img' src={weather?.data?.current?.condition?.icon} alt="WeatherImage" />
        <h2 className='temp'>{weather?.data?.current?.temp_c} °C</h2>
        <h4 className='region'>{weather?.data?.location?.name} , {weather?.data?.location?.region}</h4>
    </div>
  )
}

export default Card