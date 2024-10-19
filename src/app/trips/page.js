"use client"

import { useState, useEffect } from "react";

const page = () => {

    const [date, setDate] = useState("")
    const [preferences, setPreferences] = useState("")

    
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
    const google_token = await getOAuthToken()
    console.log(google_token)
  }
  return (
    <div className='flex items-center bg-background min-h-screen'>
              <div className="w-[50%] h-full absolute left-0 top-0 bg-gradient-to-br from-primary from-1% to-transparent to-30% "></div>
              <div className="w-[50%] h-full absolute right-0 top-0 bg-gradient-to-br from-transparent from-70% to-secondary to-99%"></div>
        <div className='flex flex-col max-w-[1000px] w-full font-nunito-sans mx-auto items-center gap-4 z-10' >
            <h1 className='text-primary text-6xl font-bold p-4'>
                Which day is your trip?
            </h1>
            <p className='text-highlight text-2xl max-w-[800px] text-center'>Tell us the day you're planning for and we'll fetch your schedule straight from your Google Calendar. </p>
            <form className='flex flex-col w-full font-nunito-sans text-highlight gap-2 max-w-[400px]' onSubmit={handleSubmit}>
                <label className='mx-auto'>Date of Travel</label>
                <input className='rounded w-full p-2' type="date" onChange={(e) => setDate(e.target.value)}/>
                <label className='mx-auto'>Preferences</label>
                <textarea className='rounded p-2' onChange={(e) => setPreferences(e.target.value)}></textarea>
                <button className='py-2 px-4 bg-highlight text-white rounded w-fit mx-auto'>Submit</button>

            </form>
        </div>
    </div>
  )
}

export default page