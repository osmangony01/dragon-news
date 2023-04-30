import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const [passShow, setPassShow] = useState(true);

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || "/category/0";

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                // navigate("/", {replace: true});
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error.message);
            })
        console.log(email, password);

    }

    return (
        <div className='py-10'>
            <div className='w-2/5 max-sm:w-11/12 max-md:w-3/4 max-lg:w-1/2 bg-white mx-auto py-10 px-12 max-sm:px-4'>
                <h3 className='text-center text-3xl font-semibold max-sm:text-2xl'>Login your account</h3>
                <hr className='my-8' />
                <form action="" className='px-4' onSubmit={handleLogin}>
                    <div className='mb-4'>
                        <label htmlFor="" className='block mb-2'>Email</label>
                        <input type="email" name="email" className='input-control' placeholder='Enter your email' />
                    </div>
                    <div className='mb-4 relative'>
                        <label htmlFor="" className='block  mb-2'>Password</label>
                        <input type={passShow ? "password" : "text"} name="password" className='input-control' placeholder='Enter your password' />
                        <small onClick={() => setPassShow(!passShow)} className='absolute right-6 top-11 text-base text-slate-600'>
                            {passShow ? <span>{<FaEyeSlash></FaEyeSlash>}</span> : <span>{<FaEye></FaEye>}</span>}
                        </small>
                    </div>
                    <button type="submit" className='w-full py-1 text-lg font-semibold text-white bg-slate-700 rounded mt-6'>Login</button>
                    <p className='mt-2 text-sm  text-slate-600 text-end'>You don't have an account? go to <Link to="/register" className='text-orange-600'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;