import React from 'react'

const Navbar = () => {
    return (
        <div className="bg-black shadow-md py-4 flex justify-between items-center px-4 md:px-48 text-lg">
            <div className="flex flex-row items-center">
                <a href="" className="flex flex-row items-center space-x-2 ">
                    <svg className="abstract-logo logo w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 51" preserveAspectRatio="xMinYMid slice">
                        <g className="abstract-logo-mark" fill="#fff">
                            <path d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z"></path>
                            <circle cx="21.24" cy="29.58" r="4.96"></circle>
                        </g>
                    </svg>
                    <p className="text-white">Abstract</p>
                </a>
                <span className="h-6 border-l border-white mx-4"></span>
                <h2 className="text-white">Help Center</h2>
            </div>
            {/* Desktop  */}
            <div className="hidden md:flex flex-row items-center">
                <input type="text" placeholder="Search" className="px-4 py-2 border border-slate-300 text-gray bg-white rounded-md text-lg text-gray-500 " />
                <button className="ml-4 px-5 py-2 outline-2 outline-amber-50 text-white bg-black rounded-md cursor-pointer text-lg">Submit a Request</button>
                <button className="ml-4 px-5 py-2 bg-[#4c5fd5] text-white rounded-md transition-colors duration-300 hover:bg-white hover:text-black text-lg">Sign In</button>
            </div>
            {/* Mobile */}
            <div className="flex md:hidden items-center space-x-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.0392 15.6244C18.2714 14.084 19.0082 12.1301 19.0082 10.0041C19.0082 5.03127 14.9769 1 10.0041 1C5.03127 1 1 5.03127 1 10.0041C1 14.9769 5.03127 19.0082 10.0041 19.0082C12.1301 19.0082 14.084 18.2714 15.6244 17.0392L21.2921 22.707C21.6828 23.0977 22.3163 23.0977 22.707 22.707C23.0977 22.3163 23.0977 21.6828 22.707 21.2921L17.0392 15.6244ZM10.0041 17.0173C6.1308 17.0173 2.99087 13.8774 2.99087 10.0041C2.99087 6.1308 6.1308 2.99087 10.0041 2.99087C13.8774 2.99087 17.0173 6.1308 17.0173 10.0041C17.0173 13.8774 13.8774 17.0173 10.0041 17.0173Z" fill="#fff" />
                </svg>

                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" fill="#fff" />
                    <path d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z" fill="#fff" />
                    <path d="M3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H3Z" fill="#fff" />
                </svg>
            </div>
        </div>
    )
}

export default Navbar
