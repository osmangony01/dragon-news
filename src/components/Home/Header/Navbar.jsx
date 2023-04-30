import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error.message))
    }

    return (
        <nav className='flex justify-between items-center py-3 bg-white'>
            <div className='text-center mx-auto'>
                <ul className='inline-flex text-slate-600'>
                    <li><Link className="pl-3" to="/category/0">Home</Link></li>
                    <li><Link className="pl-3" to="#">Career</Link></li>
                    <li><Link className="pl-3" to="#">About</Link></li>
                </ul>
            </div>
            <div className='flex items-center mr-4'>
                {user && <img className='' src="/profile-logo.svg" alt="asdf" />}
                {
                    user ? <Link to="/"><button className='bg-slate-600 text-white font-base py-1 px-7 ml-3' onClick={handleLogOut}>Logout</button></Link>
                        : <Link to="/login"><button className='bg-slate-600 text-white font-base py-1 px-7 ml-3'>Login</button></Link>
                }
            </div>
        </nav>
    );
};

export default Navbar;