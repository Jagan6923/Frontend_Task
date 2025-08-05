import React from 'react'

const Footer = () => {
    return (
        <div className="bg-black text-white py-10 md:px-30">
            <div className="container mx-auto text-start grid grid-cols-2 md:grid-cols-5 gap-8">
                <div>
                    <h1 className="font-bold mb-2">Abstract</h1>
                    <a href="" className="block mb-1">Start Trial</a>
                    <a href="" className="block mb-1"> Pricing</a>
                    <a href="" className="block mb-1">Download</a>
                </div>
                <div>
                    <h1 className="font-bold mb-2">Resources</h1>
                    <a href="" className="block mb-1">Blog</a>
                    <a href="" className="block mb-1">Help center</a>
                    <a href="" className="block mb-1">Release Notes</a>
                    <a href="" className="block mb-1">Status</a>
                </div>
                <div>
                    <h1 className="font-bold mb-2">Community</h1>
                    <a href="" className="block mb-1">Twitter</a>
                    <a href="" className="block mb-1">Linkedin</a>
                    <a href="" className="block mb-1">Facebook</a>
                    <a href="" className="block mb-1">Dribble</a>
                    <a href="" className="block mb-1">Podcast</a>
                </div>
                <div>
                    <h1 className="font-bold mb-2">Company</h1>
                    <a href="" className="block mb-1">About Us</a>
                    <a href="" className="block mb-1">Careers</a>
                    <a href="" className="block mb-1">Legal</a>

                    <h1 className="font-bold mb-2">Contact us</h1>
                    <a href="" className="block mb-1">info@abstract.com</a>
                </div>
                <div className="flex flex-col items-start">
                    <svg className="abstract-logo logo w-6 h-6 mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 51" preserveAspectRatio="xMinYMid slice">
                        <g className="abstract-logo-mark" fill="#fff">
                            <path d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z"></path>
                            <circle cx="21.24" cy="29.58" r="4.96"></circle>
                        </g>
                    </svg>
                    <p className="mb-2">© Copyright 2025</p>
                    <p className=" mb-2">Abstract Studio Design, Inc.</p>
                    <p className=" mb-2">All rights reserved</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
