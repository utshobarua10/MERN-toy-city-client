import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='mx-12'>
            <Navbar></Navbar>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;
