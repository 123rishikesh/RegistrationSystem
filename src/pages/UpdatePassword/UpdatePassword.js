import React from 'react'
import './UpdatePassword.css';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import { useNavigate } from 'react-router-dom';

const UpdatePassword = (props) => {

const {password,state,setState,changePassword} = props;

const navigate = useNavigate();

  const handleClick = () => {
    
    navigate('/Logout');
  }

    return (

        <div className="mainContainer">
            <Header/>
            <div className="secondaryContainer">
                <h4>Update Password</h4>
                <div className='fields'>
                <label>New Password</label><br/>
                <input type="Password" name="password" value={password} onChange={(e) => {setState({...state, password:e.target.value}) }}/>
            </div>
            <button  id='backbtn'   className="btn btn-primary" onClick={handleClick}>Back</button>
            <button  id='updatebtn' className='btn btn-primary' onClick={changePassword}>UpdatePassword</button>
            </div>
                <Footer/>
        </div>
    );
}

export default UpdatePassword;