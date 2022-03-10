import React from 'react'
import './Logout.css';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Header from '../../Component/Header';
import Footer from '../../Component/Footer';

const Logout = (props) => {
    const { handleLogout } = props;
    const navigate = useNavigate();

    const handleClick = (event) => {
        const x = event.target.id;

        switch (x) {
            case 'one':
                navigate('/EditProfile')
                break;
            case 'two':
                navigate('/UpdateEmail')
                break;
            case 'three':
                navigate('/UpdatePassword')
                break;
            case 'four':
                navigate('/PassengerDetail')
                break;
            case 'five':
                navigate('/CreatePassenger')
                break;
            case 'six':
                navigate('/DeletePassenger')
                break;
            default:
                return false;
        }

    }


    return (
        <div className='main-container'>
            <Header />

            <h3>Welcome to Dashboard</h3>
            <Dropdown className="drp">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                    <Dropdown.Item onClick={handleClick} id='one'>EditProfile</Dropdown.Item>
                    <Dropdown.Item onClick={handleClick} id='two'>UpdateEmail</Dropdown.Item>
                    <Dropdown.Item onClick={handleClick} id='three'>UpdatePassword</Dropdown.Item>
                    <Dropdown.Item onClick={handleClick} id='four'>PassengerDetail</Dropdown.Item>
                    <Dropdown.Item onClick={handleClick} id='five'>CreatePassenger</Dropdown.Item>
                    <Dropdown.Item onClick={handleClick} id='six'>DeletePassenger</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <div className='temp'>

                <Footer />
            </div>
        </div>
    );
}

export default Logout;