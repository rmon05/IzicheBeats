import React from 'react'

const Beats = () => {
  return (
    <>
        <div className="mx-4">
            {/* Header Description */}
            <h2 className="text-center">
                All Beats
            </h2>
            <p className="text-center">Our full selection of quality beats!</p>
            {/* Display List of Beats */}
            <section className="basis-1/2 py-16">
                <ul className="col-span-3 grid grid-cols-3 gap-x-8 gap-y-8">
                    <li>
                        <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                            <div className="relative aspect-[2/1] overflow-hidden bg-gray-100 ring-1 ring-gray-900/10">
                                <img src="" alt="" className="absolute inset-0 border border-solid border-black rounded h-full w-full"/>
                            </div>
                            {/* Beat Name */}
                            <h4 className="mt-4 text-sm font-medium text-gold group-hover:text-indigo-600">
                                <a href="/">
                                    <span className="absolute -inset-2.5 z-10"></span>
                                    <span className="relative">Beat 1</span>
                                </a>
                            </h4>
                            {/* Beat Price */}
                            <p className="relative mt-1.5 text-xs font-medium text-gold group-hover:text-indigo-600">$10.99</p>
                            {/* Add to Cart Button*/}
                            <button className="ml-2 text-red-500 hover:underline hover:cursor-pointer">Add to Cart</button>
                        </div>
                    </li>  
                </ul>
            </section>
        </div>
    </>
  )
}

export default Beats