import React from 'react';
import { Link } from 'react-router-dom';

const TermsCondition = () => {
    return (
        <div className='px-10 pt-10'>
            <h2 className='text-lg font-bold'>Term and Conditions</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem maiores ipsum aut magni aliquid, enim sed quod fugit, ad, iure quo facere molestiae quis blanditiis iste aliquam eligendi deserunt ut.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptates, distinctio quasi, similique tenetur perferendis delectus beatae consectetur labore ducimus ad minima iure voluptate iste excepturi reprehenderit veniam vel! Vitae!</p>
            <p className='text-blue-600 font-bold underline'><Link to="/register">Go to Register</Link></p>
        </div>
    );
};

export default TermsCondition;