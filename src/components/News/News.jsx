import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {

    const news = useLoaderData();
    const { title, details, image_url, category_id } = news;

    return (
        <div>
            <h2 className='text-lg font-bold mb-3'>Dragon News</h2>
            <div className='border-2 p-6 rounded'>
                <img src={image_url} alt="" />
                <h2 className='my-4 text-xl font-semibold'>{title}</h2>
                <p>{details}</p>
                <Link to={`/category/${category_id}`} className='text-white bg-red-600 py-1 px-2 mt-6 inline-block rounded'><button className='flex items-center'>{<FaArrowLeft></FaArrowLeft>} <span className='ml-2'>All news in this category</span></button></Link>
            </div>
            <EditorsInsights></EditorsInsights>
        </div>
    );
};

export default News;