import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { City, Temp, WeatherContainer } from './WeatherStyles';
 
const url = "https://api.openweathermap.org/data/2.5/weather?q=Chittaurgarh,IN&appid=7df4d87d3e0f46e0bbb9421158a9c1ec&units=metric"

const Weather = () => {
 const [data , setData] = useState();

 useEffect(() => {
    axios.get(url).then((response)=>{
        setData(response.data)
    }).catch((err)=>{
        console.log(err)
 })
 }, [])
 console.log(data)
 
 if(!data) return null;

  return (
    <WeatherContainer>
        <Temp>
          {data.main.temp.toFixed(0)}&#176;C
          </Temp>
          <City>{data.name}, RJ</City>
    </WeatherContainer>
  )
}

export default Weather