import React from 'react'
import Input from './Input'
import Buttons from './Buttons';
import Card from './Card';
import { useWeather } from '../context/weather';
function Container() {
  const weather=useWeather();
  return (
    
    <div className='container'>
      <Input placeholder={"Search For Place..."}/>
      <button className='mybutton' onClick={weather.fetchData}>SEARCH</button>
      {console.log(weather.data)}
      <Card/>
      <Buttons value={"Refresh"}/>
    </div>
  )
}

export default Container