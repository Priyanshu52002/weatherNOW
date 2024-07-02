import React from 'react'
import { useWeather } from '../context/weather'
function Input(props) {
  const weather=useWeather();
  return (
        <input className='input' type="text"
        value={weather.searchCity}
        placeholder={props.placeholder} 
        onChange={(e)=>weather.setSearchCity(e.target.value)}/>
    
  )
}

export default Input