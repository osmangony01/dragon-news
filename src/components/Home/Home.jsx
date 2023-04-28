import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faStar } from '@fortawesome/free-solid-svg-icons'

const data = [
    {
        "_id": "0282e0e58a5c404fbd15261f11c2ab6a",
        "others_info": {
            "is_todays_pick": false,
            "is_trending": true
        },
        "category_id": "1",
        "rating": { "number": 4.5, "badge": "Excellent" },
        "total_view": 488,
        "title": "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet",
        "author": {
            "name": "Jimmy Dane",
            "published_date": "2022-08-24 17:27:34",
            "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
        },
        "thumbnail_url": "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
        "image_url": "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png",
        "details": "Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2."
    }
];
const Home = () => {
    return (
        <div className=''>
            <h2 className='text-lg font-bold mb-3'>Dragon News Home</h2>
            <div className='border-2 rounded'>
                <div className='bg-slate-100 p-4 flex justify-between items-center '>
                    <div className='flex '>
                        <img src={data[0].author.img} alt="" width="45px" height="45px" className='rounded-full' />
                        <div className='pl-4'>
                            <p className='font-semibold'>{data[0].author.name}</p>
                            <p className='text-slate-500'>2022-08-24 </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <img src="./icon/bookmark.svg" alt="" />
                        <img src="./icon/share.svg" alt="" />
                    </div>
                </div>
                <div className='p-4'>
                    <h2 className='text-lg font-bold mb-4'>{data[0].title}</h2>
                    <img src={data[0].image_url} alt="" className='w-full mb-4' />
                    <p className='text-slate-600 mb-8'>{data[0].details}</p>
                    <p className='mb-4'><hr /></p>
                    <div className='flex justify-between items-center py-1'>
                        <div className='flex'>
                            <span className='text-yellow-500 px-1'><FontAwesomeIcon icon={faStar} /></span>
                            <span className='text-yellow-500 px-1'><FontAwesomeIcon icon={faStar} /></span>
                            <span className='text-yellow-500 px-1'><FontAwesomeIcon icon={faStar} /></span>
                            <span className='text-yellow-500 px-1'><FontAwesomeIcon icon={faStar} /></span>
                            <span className='text-yellow-500 px-1'><FontAwesomeIcon icon={faStar} /></span>
                            <p className='pl-1 text-slate-600'>{data[0].rating.number}</p>
                        </div>
                        <div className='flex'>
                            <span className='text-slate-600'><FontAwesomeIcon icon={faEye} /></span>
                            <p className='pl-2 text-slate-600'>{data[0].total_view}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;