"use client"
import Image from "next/image";
import React, { useState } from "react";
import weatherapi from "./utils/weatherapi";
import WeatherCard, { WeatherData } from "./WeatherCard";




export default  function Home() {

  const [city , setCity ]=useState("")
  const[apiData,setApiData]=useState<WeatherData>()



  async function formhandler(e:React.FormEvent){
    e.preventDefault()
    city.toLowerCase()
    if (city!="") {
      const data = await weatherapi(city) //not to loose data
      setApiData(data)
    }
  }



  return (
    <>
    



    <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center content-center bg-cyan-700">


{apiData &&  <WeatherCard apiData={apiData}/> }
   
   



    <div className="w-full max-w-xs">


  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={formhandler}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
      Weather Application
      </label>
      <input value={city} onChange={(e)=>setCity(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="city name ... "/>
    </div>
    <div className="mb-6">
      <p className="text-red-500 text-xs italic">Please choose a city .</p>
    </div>
    <div className="flex items-center justify-between">
      <button type="submit" className="w-[100%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
        Send
      </button>
      
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
   <a className="text-white" href="#"> &copy;created by Mahdizamanian</a>
  </p>
</div>


    </div>
    </>
  );
}
