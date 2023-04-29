import React from 'react';
import bgImage from "../../../../public/images/bg.png"

const RightContent = () => {
    return (
        <>
            <h1 className='text-lg font-bold mb-3'>Login with</h1>
            <button className="flex items-center border border-blue-600 w-full justify-center py-1 rounded">
                <img src="/icon/google.svg" alt="" /><span className='text-blue-600 ml-1 text-sm'>Login with Google</span>
            </button>
            <button className="flex items-center border border-black w-full justify-center py-1 rounded mt-2" >
                <img src="/icon/github.svg" alt="" /><span className='ml-1 text-sm' >Login with Github</span>
            </button>

            <h1 className='text-lg font-bold mb-3 mt-6'>Find Us On</h1>
            <table className='table-auto  w-full'>
                <tbody>
                    <tr className='border'>
                        <td className='flex items-center pl-2 py-3'>
                            <img src="/icon/facebook.svg" alt="" />
                            <span className='pl-2'>Facebook</span>
                        </td>
                    </tr>
                    <tr className='border'>
                        <td className='flex items-center pl-2 py-3'>
                            <img src="/icon/twitter.svg" alt="" />
                            <span className='pl-2'>Twitter</span>
                        </td>
                    </tr>
                    <tr className='border'>
                        <td className='flex items-center pl-2 py-3'>
                            <img src="/icon/instagram.svg" alt="" />
                            <span className='pl-2'>Instagram</span>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className='bg-slate-200 p-3 mt-4 rounded'>
                <h1 className='text-lg font-bold mb-3'>Q-Zone</h1>
                <img src="/images/qZone1.png" alt="" />
                <img src="/images/qZone2.png" alt="" />
                <img src="/images/qZone3.png" alt="" />
            </div>

            <div className='text-center px-5 py-10 feature1 text-white mt-4'>
                <h2 className='text-lg font-bold'>Create an Amazing Newspaper</h2>
                <p className='my-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className='text-white bg-red-600 p-2'>Learn More</button>
            </div>
        </>
    );
};

export default RightContent;