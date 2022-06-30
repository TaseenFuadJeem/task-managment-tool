import React from 'react';
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div class="navbar bg-secondary lg:px-32 fixed top-0 z-50">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/to-do'>To-Do</NavLink></li>
                            <li><NavLink to='/completed-tasks'>Completed Tasks</NavLink></li>
                            <li><NavLink to='/calender'>Calender</NavLink></li>
                        </ul>
                    </div>
                    <Link to='/' class="btn btn-ghost normal-case text-2xl" style={{ fontFamily: 'Russo One' }}>Task Management Tool</Link>
                </div>
                <div class="navbar-center hidden lg:flex navbar-end">
                    <ul class="menu menu-horizontal p-0">
                        <li className='mx-3 font-semibold'><NavLink to='/to-do'>To-Do</NavLink></li>
                        <li className='mx-3 font-semibold'><NavLink to='/completed-tasks'>Completed Tasks</NavLink></li>
                        <li className='mx-3 font-semibold'><NavLink to='/calender'>Calender</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;