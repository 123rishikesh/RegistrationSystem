import React from 'react'
import './UpdatePassword.css';

const UpdatePassword = (props) => {

const {password,state,setState,changePassword} = props;
    return (

        <div className="mainContainer">
            <div className="secondaryContainer">
                <h4>Update Password</h4>
                <div className='fields'>
                <label>New Password</label><br/>
                <input type="Password" name="password" value={password} onChange={(e) => {setState({...state, password:e.target.value}) }}/>
            </div>
            <button className='btn-primary' onClick={changePassword}>UpdatePassword</button>
            </div>
        </div>
    );
}

export default UpdatePassword;