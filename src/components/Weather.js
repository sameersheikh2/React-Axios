import axios from 'axios'
import React, { useEffect, useState } from 'react'
 
const url = "https://api.openweathermap.org/data/2.5/weather?q=Chittaurgarh,IN&appid=7df4d87d3e0f46e0bbb9421158a9c1ec"

const Weather = () => {
 const [data , setData] = useState();

 useEffect(() => {
    axios.get(url).then((response)=>{
        setData(response.data)
    }).catch((err)=>{
        console.log(err)
 })
 }, [])
 
 if(!data) return null;

  return (
    <div>
        {data.main.temp.toFixed(0)}
    </div>
  )
}

export default Weather