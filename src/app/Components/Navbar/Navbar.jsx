import React from 'react';

const Navbar = () => {
    return (
        <nav className='py-4 border-b-2 border-b-white  justify-between px-20 bg-black text-white flex items-center'>
            <div className="text-4xl text-white font-extrabold cursor-pointer ">Next <span className='font-bold text-xl -ml-2.5 '>APP</span> </div>
            <ul className='flex items-center justify-center gap-x-10 font-medium text-lg'>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contanct</li>
            </ul>
            <div className="">
                <button className='font-bold text-xl py-1.5 text-black cursor-pointer px-8 bg-white rounded-3xl'>Sign In</button>
            </div>
        </nav>
    );
};

export default Navbar;