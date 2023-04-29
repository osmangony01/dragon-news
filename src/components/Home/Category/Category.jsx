import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../../NewsCart/NewsCart';

const Category = () => {

    const categoryNews = useLoaderData();

    const { id } = useParams();
    //console.log(categoryNews);

    return (
        <div>
            {id ? <h2 className='text-lg font-bold mb-3'>This Category News: {categoryNews.length}</h2>
                : <h2 className='text-lg font-bold mb-3'>Dragon News Home</h2>
            }
            {
                categoryNews.map(news => <NewsCart key={news._id} news={news}></NewsCart>)
            }
        </div>
    );
};

export default Category;