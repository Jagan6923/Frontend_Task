import React from 'react'

const Hero = () => {
    return (
        <div className="bg-[#dadbf1] min-h-[40vh] flex flex-col items-center justify-center space-y-8 px-4 md:px-48">
            <h1 className="text-4xl md:text-7xl font-medium">How can we help?</h1>
            <div className="flex items-center space-x-4">
                <div className="relative group">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-40 md:w-160 px-3 md:px-4 py-2 md:py-4 border border-black focus:border-violet-800 text-gray bg-white rounded-md text-base md:text-lg text-gray-500 pr-10 outline-none"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 group-hover:text-violet-800">
                        <svg className="w-5 h-5 text-black group-hover:text-violet-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Hero
