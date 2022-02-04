import React from 'react';
import './LandingPage.css'
import {Link} from 'react-router-dom';

const LandingPage = () => {

    return (
        <div className='container bg-primary'>
            <div className='header'></div>
           <nav className='navbar navbar-expand-sm bg-success navbar-light '>
               <ul className='navbar-nav '>
                   <li className='nav-item'>
                       <Link className='nav-link' to="/Login" >Login</Link>
                   </li>
                   <li className='nav-item'>
                       <Link className='nav-link' to="/Registration">Register</Link>
                   </li>
               </ul>
           </nav>
           <div className='footer'></div>
        </div>
    );
}

export default LandingPage;