import React from 'react'
import './Header.css'
const Header = () => {

    return (

        <div className='header'>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">AboutUs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">ContactUs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Help</a>
                    </li>
                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
            </nav>
        </div>
    );
}

export default Header;