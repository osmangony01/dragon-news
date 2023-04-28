import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCart from '../../NewsCart/NewsCart';

const Category = () => {

    const categoryNews = useLoaderData();

    // const { id } = useParams();
    console.log(categoryNews);

    return (
        <div>
            This is a category {categoryNews.length}
            {
                categoryNews.map(news => <NewsCart key={news._id} news={news}></NewsCart>)
            }
        </div>
    );
};

export default Category;