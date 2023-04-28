import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Category = () => {

    const categoryNews = useLoaderData();

    const {id} = useParams();
    
    return (
        <div>
            This is a category {categoryNews.length}
        </div>
    );
};

export default Category;