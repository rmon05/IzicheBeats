import React from 'react';


const Nav = () => {

    return (
        <nav className="bg-white">
            <div className="mx-2">
                <div className="flex items-center justify-between h-16">
                    {/* Logo & Navigation links */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-4">
                            {/* Logo */}
                            <div className="flex-shrink-0 w-12">
                                <a href="/" className="flex items-center h-full">
                                    Logo
                                </a>
                            </div>
                            {/* Links */}
                            <a href="/home" className="text-black hover:underline px-3 py-2">
                                Home
                            </a>
                            <a href="/beats" className="text-black hover:underline px-3 py-2">
                                Beats
                            </a>
                            <a href="/contact" className="text-black hover:underline px-3 py-2">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Request Quote Button */}
                    <div>
                        <button className="bg-transparent text-black px-4 py-2 rounded border border-black mr-4 hover:bg-black hover:text-white">
                            Cart
                        </button>                        
                    </div>
                    

                </div>
            </div>
        </nav>
    );
};

export default Nav;
