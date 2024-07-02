import React from 'react'
import { useWeather } from '../context/weather'
function Buttons(props) {
  const weather=useWeather();
  return (
        <button className='mybutton' onClick={weather.fetchData}>{props.value}</button>
    
  )
}

export default Buttons