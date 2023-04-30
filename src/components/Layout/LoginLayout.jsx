import React from 'react';
import Navbar from '../Home/Header/Navbar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div className='bg-slate-100 h-screen m-0 p-0'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;