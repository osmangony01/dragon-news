import React from 'react';
import Header from './Header/Header';
import LeftContent from './LeftContent/LeftContent';
import MainContent from './MainContent/MainContent';
import RightContent from './RightContent/RightContent';

const Home = () => {
    return (
        <div className='my-container'>
            <Header></Header>
            <div className='grid grid-cols-4 gap-4 mt-14'>
                <div>
                    <LeftContent></LeftContent>
                </div>
                <div className='col-span-2'>
                    <MainContent></MainContent>
                </div>
                <div>
                    <RightContent></RightContent>
                </div>
            </div>
        </div>
    );
};

export default Home;