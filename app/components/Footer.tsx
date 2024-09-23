import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="bg-gray-900 text-white font-sans">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl dark:text-white">Send me email and lets start!</h1>

                <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                    <input id="email" type="text" className="px-4 py-2 text-white bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-white focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />
            
                    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                        Lets Go
                    </button>
                </div>
            </div>

            <div>
                <p className="font-semibold text-white dark:text-white">Quick Link</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500" href='/'>Home</a>
                    <a className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500" href='#Home'>Who am I</a>
                    <a className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500" href='#Project'>Projects</a>
                </div>
            </div>

            <div>
                <p className="font-semibold text-white dark:text-white">Industries</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"href=''>ITI</a>
                    <a className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"href=''>Datacamp</a>
                    <a className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"href=''>Depi</a>
                </div>
            </div>
        </div>
        
        <hr className="my-6 md:my-8 border-gray-700 h-2" />
        
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-1 gap-4 hover:cursor-pointer">
                
            </div>
            
            <div className="flex gap-4 hover:cursor-pointer">
                <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                <img src="https://www.svgrepo.com/show/94698/github.svg" className="" width="30" height="30" alt="gt" />
                <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
            </div>
        </div>
        <p className="font-sans p-8 text-white text-center  md:text-center md:text-lg md:p-4">I am Looking For New Project With New Ideas So Lets Make The Future !</p>
    </div>
        </footer>
    </div>
  )
}


