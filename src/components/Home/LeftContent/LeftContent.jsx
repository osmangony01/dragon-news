import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import HomeEditorsInsights from "../../EditorsInsights/HomeEditorsInsights";

const LeftContent = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error.message));
    }, [])

    return (
        <>
            <h3 className='text-lg font-bold mb-4'>All Category</h3>
            <h3 className='text-lg font-bold mb-3 bg-slate-200 text-black text-center py-2 rounded'>National News</h3>
            {
                categories.map(category => <p key={category.id} className='py-2'>
                    <Link to={`/category/${category.id}`} className='no-underline pl-6'>{category.name}</Link>
                </p>)
            }
            <HomeEditorsInsights></HomeEditorsInsights>
        </>
    );
};

export default LeftContent;