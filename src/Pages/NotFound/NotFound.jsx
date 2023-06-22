import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-center text-7xl font-extrabold'>404 Err!</h1>
            <div className='flex justify-center '>
           <Link to="/"> <button className="btn btn-wide mt-5 bg-pink border-none ">Go Back To Home Page</button>
           </Link>
            </div>
        </div>
    );
};

export default NotFound;