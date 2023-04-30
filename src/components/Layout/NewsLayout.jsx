import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Home/Header/Header';
import RightContent from '../Home/RightContent/RightContent';

const NewsLayout = () => {
    return (
        <div className='my-container'>
            <Header></Header>
            <div className='grid grid-cols-4 gap-5 mt-14'>
                <div className='col-span-3'>
                    <Outlet></Outlet>
                </div>
                <div>
                    <RightContent></RightContent>
                </div>
            </div>
        </div>
    );
};

export default NewsLayout;