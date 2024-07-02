import { createContext, useContext ,useState} from "react";
import { getweatherdata ,getweatherdataloacation} from '../api/Getweatherinfo'

const weatherContext=createContext(null);

export const useWeather=()=>{
    return useContext(weatherContext);
}
export const WeatherProvider=(props)=>{
    const[data,setData]=useState(null);
    const[searchCity,setSearchCity]=useState("null");
    const fetchData=async()=>{
        const response=await getweatherdata(searchCity);
        setData(response);
    }

    const fetchLocation=()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            getweatherdataloacation(
                position.coords.latitude,
                position.coords.longitude
            ).then((data)=>setData(data))

        })
    }
    const values={
        data,
        setData,
        searchCity,
        setSearchCity,
        fetchData,
        fetchLocation
    }

    return(
        <weatherContext.Provider value={values}>
            {props.children}
        </weatherContext.Provider>
    )
}
