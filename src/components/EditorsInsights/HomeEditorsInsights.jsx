import React from 'react';

import first from '../../../public/images/editorsInsight1.png';
import second from '../../../public/images/editorsInsight2.png';
import third from '../../../public/images/editorsInsight3.png';
import { FaCalendarAlt } from 'react-icons/fa';

const EditorsInsights = () => {
    return (
        <div className='mb-6'>
            {/* <h2 className='text-lg font-bold mt-6 mb-4'>Editors Insights</h2> */}
            <div className='grid gap-5 mt-4'>
                <div className=''>
                    <img src={first} alt="" />
                    <p className='text-lg my-4'>21 The Most Stylish Wedding Guest Dresses For Spring</p>
                    <p className='flex items-center text-slate-600 mb-2'>{<FaCalendarAlt></FaCalendarAlt>} <span className='ml-2'>Jan 4, 2022</span></p>
                </div>
                <div className=''>
                    <img src={second} alt="" />
                    <p className='text-lg  my-4'>21 The Most Stylish Wedding Guest Dresses For Spring</p>
                    <p className='flex items-center text-slate-600  mb-2'>{<FaCalendarAlt></FaCalendarAlt>} <span className='ml-2'>Jan 4, 2022</span></p>
                </div>
                <div className=''>
                    <img src={third} alt="" />
                    <p className='text-lg  my-4'>21 The Most Stylish Wedding Guest Dresses For Spring</p>
                    <p className='flex items-center text-slate-600 mb-2'> {<FaCalendarAlt></FaCalendarAlt>} <span className='ml-2'>Jan 4, 2022</span></p>
                </div>
            </div>
        </div>
    );
};

export default EditorsInsights;