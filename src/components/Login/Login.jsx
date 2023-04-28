import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-slate-100 py-10 h-screen'>
            <div className='w-2/5 max-sm:w-11/12 max-md:w-3/4 max-lg:w-1/2 bg-white mx-auto py-10 px-12 max-sm:px-4'>
                <h3 className='text-center text-3xl font-semibold max-sm:text-2xl'>Login your account</h3>
                <hr className='my-8' />
                <form action="" className='px-4'>
                    <div className='mb-4'>
                        <label htmlFor="" className='block mb-2'>Email</label>
                        <input type="email" name="email" className='input-control' placeholder='Enter your email' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="" className='block  mb-2'>Password</label>
                        <input type="password" name="password" className='input-control' placeholder='Enter your password' />
                    </div>
                    <button className='w-full py-1 text-lg font-semibold text-white bg-slate-700 rounded mt-6'>Login</button>
                    <p className='mt-2 text-sm  text-slate-600 text-end'>You don't have an account? go to <Link to="/register" className='text-orange-600'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;