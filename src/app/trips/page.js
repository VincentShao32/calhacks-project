"use client"

import { useState, useEffect } from "react";

const page = () => {

    const [date, setDate] = useState("")
    const [preferences, setPreferences] = useState("")
    const [startingAddress, setStartingAddress] = useState("")
    
    async function getOAuthToken() {
        const res = await fetch("/api/get-oauth");
        if (res) {
          const token = await res.json();
          return token
        }

      }
    // useEffect(() => {

    //   getOAuthToken();
    // });


  async function handleSubmit(e) {
    e.preventDefault();
    //const google_token = await getOAuthToken()
    var start_date = new Date(date)
    var end_date = new Date(date)
    end_date.setDate(start_date.getDate() + 1)
    start_date = start_date.toISOString().substring(0, 19) + "-07:00"
    end_date = end_date.toISOString().substring(0, 19) + "-07:00"
    console.log(start_date)
    if (date === "" || startingAddress === "") {
        return
    }
    const google_auth_token = "ya29.a0AcM612zbGc8-mWvskBOytFfthMVjPyOAt8yBq53DCXxZZ9EBbuMCg2eUtW745weZAa5Oxb1VFgQ1akidLpIv-CSfW_U4McRce-YD3uwLRSN9Yv2pUpsKOxhULlVvnwC9kFJeIVhZwFbJigi4SMHjuSKkw-bAPDTapp5FQiMsaCgYKAUASARESFQHGX2Mi0O6uYw457fMsysDfcIYgOA0175"
    const res = await fetch("http://localhost:8001/send-message", {
        method: "POST",
        body: JSON.stringify({ token: google_auth_token, preference: preferences, start_date: start_date, end_date: end_date, starting_address: startingAddress }),
    })
    // console.log(google_token)
  }
  return (
    <div className='flex items-center bg-transparent min-h-screen'>
              <div className="w-[50%] h-full absolute left-0 top-0 bg-gradient-to-br from-primary from-1% to-background to-30% -z-10 "></div>
              <div className="w-[50%] h-full absolute right-0 top-0 bg-gradient-to-br from-background from-70% to-secondary to-99% -z-10"></div>
        <div className='flex flex-col max-w-[1000px] w-full font-nunito-sans mx-auto items-center gap-6 z-10' >
            <h1 className='text-primary text-6xl text-[##36454F] font-bold p-4'>
                Which day for planning?
            </h1>
            <p className='text-highlight text-2xl max-w-[800px] text-center mb-8'>"Choose a day, and we’ll help turn it so much more convenient." </p>
            <form className='flex flex-col w-full font-nunito-sans text-highlight gap-3 max-w-[400px]' onSubmit={handleSubmit}>
                <label className='mx-auto text-primary text-lg'>Date for your planned day</label>
                <input className='rounded w-full p-2 text-gray-400 placeholder:text-gray-500' type="date" onChange={(e) => setDate(e.target.value)}/>
                <label className='mx-auto text-primary text-lg'>Starting Address</label>
                <input className='rounded w-full p-2 text-gray-400 placeholder:text-gray-500' type="text" onChange={(e) => setStartingAddress(e.target.value)} placeholder="Where are you starting your trip from?"/>
                <label className='mx-auto text-primary text-lg'>Preferences</label>
                <textarea
                  className='rounded p-2 placeholder:text-gray-400'
                  placeholder="Tell us Anything! 🌯 A quick lunch on the way between classes."
                  onChange={(e) => setPreferences(e.target.value)}
                ></textarea>
                <button className='py-2 px-4 bg-highlight text-white rounded w-fit mx-auto mt-5 hover:bg-[#6038fb] hover:scale-105 hover:shadow-md transition-all ease-in-out duration-300'> Submit</button>
            </form>
        </div>
    </div>
  )
}

export default page