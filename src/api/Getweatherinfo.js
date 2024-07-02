import React from 'react'
const baseURL="http://api.weatherapi.com/v1/current.json?key=a535e7f37f7b47118fa53549240107";

export  const getweatherdata=async(city)=>{
    let res= await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await res.json();
}
export  const getweatherdataloacation=async(lat,long)=>{
    let res= await fetch(`${baseURL}&q=${lat},${long}&aqi=yes`)
    return await res.json();
}
function Getweatherinfo(){
    return(
        <div></div>
    )
}
export default Getweatherinfo;
