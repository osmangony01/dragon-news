import React from 'react';
import moment from 'moment';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div>
            <div className='text-center'>
                <img className='py-3 mx-auto' src="/logo.png" alt="" />
                <p>Journalism Without Fear or Favour</p>
                <h3 className='text-lg font-semibold pt-3'>{moment().format("dddd, MMMM D, YYYY")}</h3>
            </div>
            <div className='flex items-center px-2.5 py-2.5 bg-slate-200 mt-8'>
                <button className='bg-red-600 text-white text-lg px-6 py-1.5'>Latest</button>
                <marquee direction="left">
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </marquee>
            </div>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;