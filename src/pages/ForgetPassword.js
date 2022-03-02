import React from 'react'

const ForgetPassword = (props) => {

    const {forgetPassword,email,setEmail,state}= props;

    return (
        <div className='mainContainer'>
        <div className='secondaryContainer'>
            <div className='fields'>
            <h4>Reset your password</h4>
        <label>Email</label><br/>
        <input type="email" value={email} onChange={(e) => {setEmail(e.target.value) }}/>
            </div>
        <button  className="btn btn-primary" onClick={forgetPassword}>ResetPassword</button>
        </div>
    </div>

    );
}

export default ForgetPassword;