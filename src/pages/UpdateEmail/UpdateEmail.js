import React from 'react'
import './UpdateEmail.css';
import {useNavigate } from 'react-router-dom';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';

const UpdateEmail = (props) => {

    const {changeEmail, email,state,setState} = props;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Logout');
    }

    return (

        <div className='mainContainer'>
            <Header/>
            <div className='secondaryContainer'>
                <div className='fields'>
                <h4>Update Email</h4>
            <label>New Email</label><br/>
            <input type="text" name="email" value={email} onChange={(e) => {setState({...state, email:e.target.value}) }}/>
                </div>
                <button  id='backbtn' className="btn btn-primary" onClick={handleClick}>Back</button>
                 <button id='updatebtn' className="btn btn-primary" onClick={changeEmail}>UpdateEmail</button>
            </div>
            <Footer/>
        </div>

    );
}

export default UpdateEmail;