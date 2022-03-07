import React from 'react'
import './Logout.css';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Header from '../../Component/Header';
import Footer from '../../Component/Footer';

const Logout = (props) => {
    const { handleLogout } = props;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/EditProfile')
    }
    const handleClick2 = () => {
        navigate('/UpdateEmail')
    }

    const handleClick3 = () => {
        navigate('/UpdatePassword')
    }

    return (
        <>
            <Header/>
            <h3>Welcome</h3>

            <Dropdown className="drp">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                    <Dropdown.Item  onClick={handleClick}>EditProfile</Dropdown.Item>
                    <Dropdown.Item  onClick={handleClick2}>UpdateEmail</Dropdown.Item>
                    <Dropdown.Item  onClick={handleClick3}>UpdatePassword</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
             <div className='temp'>
          <Footer/>
          </div>
        </>
    );
}

export default Logout;