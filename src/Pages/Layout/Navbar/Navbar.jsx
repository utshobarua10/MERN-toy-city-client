import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/logo.jpg'
import { AuthContext } from '../../../Provider/Provider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    // console.log(user.photoURL, logOut)

    const handleSignOut = () => {
        logOut();
    }


    const navItems = <>
        <Link to='/'><li><a className='text-white'>Home</a></li></Link>
        <Link to={`/allToys/seller/${user && user.uid}`}><li> <a className='text-white'>All Toys</a> </li></Link>
        <Link to='/addToy'><li> <a className='text-white'> Add A Toy</a></li></Link>
        <Link to='/myToy'><li> <a className='text-white'> My Toy</a></li></Link>
        <Link to='/blogs'><li> <a className='text-white'>Blogs</a> </li></Link>


    </>


    return (
        <div>
            <div className="navbar bg-sky-blue rounded-lg sticky">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            {navItems}
                            {
                                user ? <li> <a className='text-white' onClick={handleSignOut}>Sign Out</a> </li> : ''
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-pink bg-white"> <img src={logo} className='w-10' alt="" /> </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                        {
                            user && <li> <a className='text-white' onClick={handleSignOut}>Sign Out</a> <img className='mask mask-squircle w-12 h-12' src={user.photoURL} alt="" /> </li> 
                           
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-pink border-white">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;