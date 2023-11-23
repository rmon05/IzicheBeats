import React from 'react';
import Nav from "../components/Nav";

const Home = () => {
    return (
        <>  
            {/* Navigation Bar */}
            <Nav/>
            {/* Main Home Text */}
            <section className="container mx-auto py-16 text-center h-screen flex flex-row space-x-8">

                <div className='py-32 basis-1/2 flex flex-col'>
                    <h1 className="text-5xl font-bold mb-4">Mandarin Surveyors Ltd.</h1>
                    <p className="text-xl text-gray-700 mb-8">
                        Over 25+ years of excellence delivering quality surveys with precision that you can count on. 
                    </p>
                    <div>
                        <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-blue-700 w-1/4">Get a Quote</button>
                    </div>
                </div>
                
                
                <section className="basis-1/2 py-16">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <a href="/about" className="text-black hover:underline">
                                    <h3 className="text-2xl font-semibold mb-4">About Us</h3>
                                </a>
                                <p className="text-gray-700">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <a href="/team" className="text-black hover:underline">
                                    <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
                                </a>
                                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <a href="/services" className="text-black hover:underline">
                                    <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
                                </a>                            
                                <p className="text-gray-700">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <a href="/sponsors" className="text-black hover:underline">
                                    <h3 className="text-2xl font-semibold mb-4">Sponsorships</h3>
                                </a>  
                                <p className="text-gray-700">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                            </div>
                            
                        </div>
                    </div>
                </section>

            </section>




            <hr className='mx-4'/>
            {/* Services Outline */}
            <section className="py-16 h-screen">
                <div className="container mx-auto">
                    {/* Header */}
                    <h2 className="text-4xl font-semibold text-center mb-8">How can we help?</h2>

                    {/* 2x3 Grid of Services*/}
                    <ul className="col-span-3 grid grid-cols-3 gap-x-8 gap-y-8">
                        <li>
                            <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                                <div className="relative aspect-[2/1] overflow-hidden bg-gray-100 ring-1 ring-gray-900/10">
                                    <img src="" alt="" className="absolute inset-0 border border-solid border-black rounded-sm h-full w-full"/>
                                </div>
                                <h4 className="mt-4 text-sm font-medium text-gold group-hover:text-indigo-600">
                                    <a href="/sponsors">
                                        <span className="absolute -inset-2.5 z-10"></span>
                                        <span className="relative">Boundary Disputes</span>
                                    </a>
                                </h4>
                                <p className="relative mt-1.5 text-xs font-medium text-gold group-hover:text-indigo-600">TBD</p>
                            </div>
                        </li>  

                        <li>
                            <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                                <div className="relative aspect-[2/1] overflow-hidden bg-gray-100 ring-1 ring-gray-900/10">
                                    <img src="" alt="" className="absolute inset-0 border border-solid border-black rounded-sm h-full w-full"/>
                                </div>
                                <h4 className="mt-4 text-sm font-medium text-gold group-hover:text-indigo-600">
                                    <a href="/sponsors">
                                        <span className="absolute -inset-2.5 z-10"></span>
                                        <span className="relative">Property Mortgaging</span>
                                    </a>
                                </h4>
                                <p className="relative mt-1.5 text-xs font-medium text-gold group-hover:text-indigo-600">TBD</p>
                            </div>
                        </li>  

                        <li>
                            <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                                <div className="relative aspect-[2/1] overflow-hidden bg-gray-100 ring-1 ring-gray-900/10">
                                    <img src="" alt="" className="absolute inset-0 border border-solid border-black rounded-sm h-full w-full"/>
                                </div>
                                <h4 className="mt-4 text-sm font-medium text-gold group-hover:text-indigo-600">
                                    <a href="/sponsors">
                                        <span className="absolute -inset-2.5 z-10"></span>
                                        <span className="relative">Buying or Selling Property</span>
                                    </a>
                                </h4>
                                <p className="relative mt-1.5 text-xs font-medium text-gold group-hover:text-indigo-600">TBD</p>
                            </div>
                        </li>  

                        <li>
                            <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                                <div className="relative aspect-[2/1] overflow-hidden bg-gray-100 ring-1 ring-gray-900/10">
                                    <img src="" alt="" className="absolute inset-0 border border-solid border-black rounded-sm h-full w-full"/>
                                </div>
                                <h4 className="mt-4 text-sm font-medium text-gold group-hover:text-indigo-600">
                                    <a href="/sponsors">
                                        <span className="absolute -inset-2.5 z-10"></span>
                                        <span className="relative">Property Development</span>
                                    </a>
                                </h4>
                                <p className="relative mt-1.5 text-xs font-medium text-gold group-hover:text-indigo-600">TBD</p>
                            </div>
                        </li>  

                        <li>
                            <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                                <div className="relative aspect-[2/1] overflow-hidden bg-gray-100 ring-1 ring-gray-900/10">
                                    <img src="" alt="" className="absolute inset-0 border border-solid border-black rounded-sm h-full w-full"/>
                                </div>
                                <h4 className="mt-4 text-sm font-medium text-gold group-hover:text-indigo-600">
                                    <a href="/sponsors">
                                        <span className="absolute -inset-2.5 z-10"></span>
                                        <span className="relative">Service #5</span>
                                    </a>
                                </h4>
                                <p className="relative mt-1.5 text-xs font-medium text-gold group-hover:text-indigo-600">TBD</p>
                            </div>
                        </li>  

                        <li>
                            <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                                <div className="relative aspect-[2/1] overflow-hidden bg-gray-100 ring-1 ring-gray-900/10">
                                    <img src="" alt="" className="absolute inset-0 border border-solid border-black rounded-sm h-full w-full"/>
                                </div>
                                <h4 className="mt-4 text-sm font-medium text-gold group-hover:text-indigo-600">
                                    <a href="/sponsors">
                                        <span className="absolute -inset-2.5 z-10"></span>
                                        <span className="relative">Service #6</span>
                                    </a>
                                </h4>
                                <p className="relative mt-1.5 text-xs font-medium text-gold group-hover:text-indigo-600">TBD</p>
                            </div>
                        </li>  
                    </ul>

                </div>
            </section>
        </>
    )
}

export default Home