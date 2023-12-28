import React from 'react';

const Home = () => {
    return (
        <>  
            {/* Main Home Text */}
            <section className="container mx-auto py-16 text-center h-screen">

                <div className='py-32 basis-1/2 flex flex-col'>
                    <h1 className="text-5xl font-bold mb-4">Iziche Beats</h1>
                    <p className="text-xl text-gray-700 mb-8">
                        Quality Sound. Quality Beats. 
                    </p>
                    {/* Explore button */}
                    <div>
                        <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-blue-700 w-1/4">Explore Beats</button>
                    </div>
                </div>
                

            </section>
        </>
    )
}

export default Home