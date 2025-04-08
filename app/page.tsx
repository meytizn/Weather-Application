import Image from "next/image";

export default function Home() {
  return (
    <>
    
    <div className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center content-center bg-slate-700">


    <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
      what is the weather like in your 
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="city name ... "/>
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
   <a href="#"></a> &copy;created by Mahdizamanian
  </p>
</div>


    </div>
    </>
  );
}
