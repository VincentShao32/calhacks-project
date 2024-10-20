"use client"

import { useState, useEffect } from "react";

const page = () => {

    const [date, setDate] = useState("")
    const [preferences, setPreferences] = useState("")
    const [startingAddress, setStartingAddress] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const results = ["Mel's Drive-In",
"Seven Square Restaurant & Taproom Lounge",
"MKT Restaurant and Bar"
    ]
    const results_addresses = ["801 Mission St, San Francisco, CA 94103, USA",
"299 2nd St, San Francisco, CA 94105, USA",
"757 Market St, San Francisco, CA 94103, USA"]

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

const delay = ms => new Promise(res => setTimeout(res, ms));


  async function handleSubmit(e) {
    e.preventDefault();
    // setLoading(true)
    // await delay(5000)
    // setLoading(false)
    // //const google_token = await getOAuthToken()
    // setSubmitted(true)
    
    var start_date = new Date(date)
    var end_date = new Date(date)
    end_date.setDate(start_date.getDate() + 1)
    start_date = start_date.toISOString().substring(0, 19) + "-07:00"
    end_date = end_date.toISOString().substring(0, 19) + "-07:00"
    console.log(start_date)
    if (date === "" || startingAddress === "") {
        return
    }
    const google_auth_token = "ya29.a0AcM612y1B3-FZ9CjoSPJkxWc4GGI2KBzZAVCN0DOMH1Tu4IYdbJr0tcGlT_kGIfTRms2oiuaylHB0d1fR_ZuYiEGYvxRMEcAVDQs_-yfSGFb2UK0Pm4pMTwWYcsB_ikSWAWpeLbtiZ5quL53YtwsKCLNhfo-YcxSGJY9bMrtaCgYKAfASARESFQHGX2MieI5kNAlpWwIbFT3R-YDcSQ0175"
    const res = await fetch("http://localhost:8006/send-message", {
        method: "POST",
        body: JSON.stringify({ token: google_auth_token, preference: preferences, start_date: start_date, end_date: end_date, starting_address: startingAddress }),
    })
    //console.log(google_token)
  }
  return (
    <div className='flex items-center bg-transparent min-h-screen'>
              <div className="w-[50%] h-full absolute left-0 top-0 bg-gradient-to-br from-primary from-1% to-background to-30% -z-10 "></div>
              <div className="w-[50%] h-full absolute right-0 top-0 bg-gradient-to-br from-background from-70% to-secondary to-99% -z-10"></div>
        <div className='flex flex-col w-full'>
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
        <div className='flex flex-col w-full p-8 gap-4'>
        {loading && <div role="status" className='mx-auto'>
            <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
        </div>}

        {submitted && results.map((result) => <p className='text-white font-primary mx-auto'>{result}</p>)}
        
        </div>
        </div>

    </div>
  )
}

export default page