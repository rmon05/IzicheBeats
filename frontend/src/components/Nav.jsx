import React from 'react';
import logo from "../assets/zeng6.png";

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
                                    <img src={logo} className="h-full w-auto" alt="Logo" />
                                </a>
                            </div>
                            {/* Links */}
                            <a href="/about" className="text-black hover:underline px-3 py-2">
                                About Us
                            </a>
                            <a href="/team" className="text-black hover:underline px-3 py-2">
                                Our Team
                            </a>
                            <a href="/services" className="text-black hover:underline px-3 py-2">
                                Services
                            </a>
                            <a href="/sponsors" className="text-black hover:underline px-3 py-2">
                                Sponsorships
                            </a>
                            <a href="/contact" className="text-black hover:underline px-3 py-2">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Request Quote Button */}
                    <div>
                        <button className="bg-transparent text-black px-4 py-2 rounded-sm border border-black mr-4 hover:bg-black hover:text-white">
                            Get a Quote
                        </button>                        
                    </div>
                    

                </div>
            </div>
        </nav>
    );
};

export default Nav;
