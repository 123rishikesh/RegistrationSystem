import React from 'react'
import './UpdatePassword.css';

const UpdateEmail = (props) => {

    const {changeEmail, email,state,setState} = props;

    return (

        <div className='mainContainer'>
            <div className='secondaryContainer'>
                <div className='fields'>
                <h4>Update Email</h4>
            <label>New Email</label><br/>
            <input type="text" name="email" value={email} onChange={(e) => {setState({...state, email:e.target.value}) }}/>
                </div>
            <button  className="btn btn-primary" onClick={changeEmail}>UpdateEmail</button>
            </div>
        </div>

    );
}

export default UpdateEmail;