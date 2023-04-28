import React from 'react';
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className='text-center'>
                <img className='py-3 mx-auto' src="./logo.png" alt="" />
                <p>Journalism Without Fear or Favour</p>
                <h3 className='text-lg font-semibold pt-3'>{moment().format("dddd, MMMM D, YYYY")}</h3>
            </div>
            <div className='flex items-center px-2.5 py-2.5 bg-slate-200 mt-8'>
                <button className='bg-red-600 text-white text-lg px-6 py-1.5'>Latest</button>
                <marquee direction="left">
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </marquee>
            </div>
            <nav className='flex justify-between items-center mt-4'>
                <div className='text-center mx-auto'>
                    <ul className='inline-flex text-slate-600'>
                        <li><a className="pl-3" href="#">About</a></li>
                        <li><a className="pl-3" href="#">Career</a></li>
                        <li><a className="pl-3"  href="#">Home</a></li>
                    </ul> 
                </div>
                <div className='flex items-center'>
                    <img className='' src="./profile-logo.svg" alt="asdf" />
                    <button className='bg-slate-600 text-white font-base py-1 px-7 ml-3'>Login</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;