import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { FaEye, FaRegStar, FaStar } from 'react-icons/fa';

const NewsCart = ({ news }) => {

    const { _id, rating, total_view, title, author, details, image_url } = news;
    console.log(news)

    return (
        <div className='border-2 rounded mb-8'>
            <div className='bg-slate-100 p-4 flex justify-between items-center '>
                <div className='flex '>
                    <img src={author.img} alt="" width="45px" height="45px" className='rounded-full' />
                    <div className='pl-4'>
                        <p className='font-semibold'>{author.name}</p>
                        <p className='text-slate-500'>2022-08-24 </p>
                    </div>
                </div>
                <div className='flex'>
                    <img src="/icon/bookmark.svg" alt="" />
                    <img src="/icon/share.svg" alt="" />
                </div>
            </div>
            <div className='p-4'>
                <h2 className='text-lg font-bold mb-4'>{title}</h2>
                <img src={image_url} alt="" className='w-full mb-4' />
                <p className='text-slate-600 mb-8'>{details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`} className='text-orange-500'>Read More</Link></>}</p>
                <p className='mb-4'><hr /></p>
                <div className='flex justify-between items-center py-1'>
                    <div className='flex'>
                        {/* <span className='text-yellow-500 px-1'><FontAwesomeIcon icon={faStar} /></span>
                            <span className='text-yellow-500 px-1'><FontAwesomeIcon icon={faStar} /></span>
                            <span className='text-yellow-500 px-1'><FontAwesomeIcon icon={faStar} /></span>
                            <span className='text-yellow-500 px-1'><FontAwesomeIcon icon={faStar} /></span>
                            <span className='text-yellow-500 px-1'><FontAwesomeIcon icon={faStar} /></span> */}
                        <Rating
                            placeholderRating={rating.number}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-orange-400'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                        <p className='pl-1 text-slate-600'>{rating.number}</p>
                    </div>
                    <div className='flex items-center'>
                        <span className='text-slate-600'> <FaEye></FaEye></span>
                        <p className='pl-2 text-slate-600'>{total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCart;