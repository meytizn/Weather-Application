import React from 'react'

export interface WeatherData{
    main:{
            temp:number
            humidity:number
    }
    weather:[
        {
            description:string
        }
    ]
    wind:{
        speed:number
    }
}

export default function WeatherCard({apiData}:{apiData:WeatherData}) {
  return (
    <>
    <div className='absolute top-5 flex flex-col justify-center items-center content-center gap-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[320px]'>
    
    <div className='text-amber-400 text-4xl'>{apiData.weather[0].description}</div>
    <div><span className='text-red-500'> Temp:</span> {apiData.main.temp}   C</div>
    <div>humidity: {apiData.main.humidity}</div>
    <div>wind speed : {apiData.wind.speed}</div>
    </div>
    </>

  )
}
