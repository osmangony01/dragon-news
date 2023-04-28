import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../Home/Header/Header';
import LeftContent from '../Home/LeftContent/LeftContent';
import RightContent from '../Home/RightContent/RightContent';

const Layout = () => {
    return (
        <div className='my-container'>
            <Header></Header>
            <div className='grid grid-cols-4 gap-5 mt-14'>
                <div>
                    <LeftContent></LeftContent>
                </div>
                <div className='col-span-2'>
                    <Outlet></Outlet>
                </div>
                <div>
                    <RightContent></RightContent>
                </div>
            </div>
        </div>
    );
};

export default Layout;