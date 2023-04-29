import React from 'react';

import first from '../../../public/images/editorsInsight1.png';
import second from '../../../public/images/editorsInsight2.png';
import third from '../../../public/images/editorsInsight3.png';
import { FaCalculator, FaCalendar, FaCalendarAlt } from 'react-icons/fa';

const EditorsInsights = () => {
    return (
        <div className='mb-6'>
            <h2 className='text-lg font-bold mt-6 mb-4'>Editors Insights</h2>
            <div className='grid grid-cols-3 gap-5'>
                <div className='border-2 rounded'>
                    <img src={first} alt="" />
                    <p className='text-lg my-4 px-2'>21 The Most Stylish Wedding Guest Dresses For Spring</p>
                    <p className='flex items-center text-slate-600 px-2 mb-2'>{<FaCalendarAlt></FaCalendarAlt>} <span className='ml-2'>Jan 4, 2022</span></p>
                </div>
                <div className='border-2 rounded'>
                    <img src={second} alt="" />
                    <p className='text-lg  my-4 px-2'>21 The Most Stylish Wedding Guest Dresses For Spring</p>
                    <p className='flex items-center text-slate-600 px-2 mb-2'>{<FaCalendarAlt></FaCalendarAlt>} <span className='ml-2'>Jan 4, 2022</span></p>
                </div>
                <div className='border-2 rounded'>
                    <img src={third} alt="" />
                    <p className='text-lg  my-4 px-2'>21 The Most Stylish Wedding Guest Dresses For Spring</p>
                    <p className='flex items-center text-slate-600 px-2 mb-2'>{<FaCalendarAlt></FaCalendarAlt>} <span className='ml-2'>Jan 4, 2022</span></p>
                </div>
            </div>
        </div>
    );
};

export default EditorsInsights;