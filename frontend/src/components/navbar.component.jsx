import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../imgs/logo.png';

const Navbar = () => {

    const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);

    return (
        <nav className="navbar">
            {/* Header Logo */}
            <Link to="/" className="flex-none w-10">
                <img src={logo} alt="blog-logo" className="w-full" />
            </Link>

            {/* Searchbox Area */}
            <div className={`absolute py-4 px-[5vw] left-0 w-full mt-0.5 border-b border-grey bg-white top-full md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show ${searchBoxVisibility ? 'show' : 'hide'}`}>
                <input type="text" placeholder='Search' className='w-full p-4 pl-6 md:w-auto bg-grey pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey md:pl-12' />
                <i className='absolute fi-rr-search right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey'></i>
            </div>

            {/* Toggle */}
            <div className='flex items-center gap-3 ml-auto md:gap-6'>
                <button
                    onClick={() => setSearchBoxVisibility(currentValue => !currentValue)}
                    className='flex items-center justify-center w-12 h-12 rounded-full md:hidden bg-grey'
                >
                    <i className='text-xl fi-rr-search'></i>
                </button>

                <Link to="/editor" className='hidden gap-2 md:flex link'>
                    <i className=' fi fi-rr-file-edit'></i>
                    <p>write</p>
                </Link>

                <Link to="signin" className='py-2 btn-dark'>
                    sign In
                </Link>

                <Link to="signup" className='py-2 btn-light'>
                    sign up
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
