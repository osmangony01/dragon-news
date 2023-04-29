import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const [passError, setPassError] = useState("");
    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {


        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;

        setPassError("");
        if (password < 6) {
            setPassError("At least 6 characters needed!!");
        }
        else if (password === confirm_password) {
            setPassError("The password doesn't match!!");
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error.message);
            })

        console.log(name, email, password);


    }
    return (
        <div className='bg-slate-100  py-10 h-full'>
            <div className='w-2/5 max-sm:w-11/12 max-md:w-3/4 max-lg:w-1/2 bg-white mx-auto py-10 px-12 max-sm:px-4'>
                <h3 className='text-center text-3xl font-semibold'>Register your account</h3>
                <hr className='my-8' />
                <form action="" className='px-4' onSubmit={handleRegister}>
                    <div className='mb-4'>
                        <label htmlFor="" className='block  mb-2'>Name</label>
                        <input type="text" name="name" className='input-control' placeholder='Enter your name' required />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="" className='block mb-2'>Email</label>
                        <input type="email" name="email" className='input-control' placeholder='Enter your email' required />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="" className='block  mb-2'>Password</label>
                        <input type="password" name="password" className='input-control' placeholder='Enter your password' required />
                        <small>{passError}</small>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="" className='block  mb-2' >Confirm Password</label>
                        <input type="password" name="confirm_password" className='input-control' placeholder='Enter confirm password' required />
                    </div>
                    <div className='mb-4 text-sm'>
                        <input type="checkbox" />
                        <span className='pl-2'>Accept Term & Conditions</span>
                    </div>
                    <button className='w-full py-1 text-lg font-semibold text-white bg-slate-700 rounded'>Register</button>
                    <p className='mt-2 text-sm  text-slate-600 text-end'>Already have an account? <Link to="/login" className='text-orange-600'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;