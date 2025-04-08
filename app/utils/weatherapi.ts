import React from 'react'

const API_KEY="3468ac0b2c2bd30cce5bb5f61e99e30d"
const BASE_URL="https://openweathermap.org/data/2.5/weather"

export default async function weatherapi(city:string) {

    try{
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        if (!response.ok) {
            throw new Error("response didnt recive ")
        }
        const weather = await response.json()
        return weather
    }
    catch(e){
        alert("error ")
        return null
    }
    
    
  
    return (
    
  )
}
