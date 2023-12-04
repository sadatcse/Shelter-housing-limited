import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Header = () => {


    return (
<div className="navbar bg-base-100 border-b-4 border-green-400">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li className='mx-2'><NavLink to="/"><a>Home</a></NavLink></li>
      <li className='mx-2'><NavLink to="/about"><a>About Us</a></NavLink></li>
        <li>
          <a>Projects</a>
          <ul className="p-2 z-10">
          <li><NavLink to="/cprojects"><a>Completed Projects</a></NavLink></li>
            <li><NavLink to="/unprojects"><a>Uncompleted Projects</a></NavLink></li>
            <li><NavLink to="/upprojects"><a>Upcoming Projects</a></NavLink></li>
            
          </ul>
        </li>
        <li><NavLink to="/"><a>Landowner</a></NavLink></li>
        <li><NavLink to="/"><a>Testimonials</a></NavLink></li>
        <li><NavLink to="/"><a>Contact Us</a></NavLink></li>
      </ul>
    </div>
    <img src="https://shelterhousingltd.com/wp-content/uploads/2019/10/logo1.png" alt="Shelter Housing Ltd. Logo" className="w-96 h-16" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li className='mx-2'><NavLink to="/"><a>Home</a></NavLink></li>
      <li className='mx-2'><NavLink to="/about"><a>About Us</a></NavLink></li>
      <li>
        <details>
          <summary>Projects</summary>
          <ul className="p-2 z-10">
          <li><NavLink to="/cprojects"><a>Completed Projects</a></NavLink></li>
            <li><NavLink to="/unprojects"><a>Uncompleted Projects</a></NavLink></li>
            <li><NavLink to="/upprojects"><a>Upcoming Projects</a></NavLink></li>
          </ul>
        </details>
      </li>
      <li><NavLink to="/landowner"><a>Landowner</a></NavLink></li>
      <li><NavLink to="/testimonials"><a>Testimonials</a></NavLink></li>
      <li><NavLink to="/contact"><a>Contact Us</a></NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    
  </div>
</div>

    );
};

export default Header;


