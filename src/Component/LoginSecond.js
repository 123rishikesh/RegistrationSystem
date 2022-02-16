import React from 'react'
import './Login.css';
// import Home from './Home';
import './LoginSecond.css'

const LoginSecond = (props) => {

const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
} = props;

    return (
        <>
      
        <div  className='main'>
            <div className='center'>
            {hasAccount ? (
                <h1>Login</h1>):(  <h1>SignUp</h1>)}
                <div className="form" >
                    <div className='txt_field'>
                        <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                            <span></span>
                        <label>UserName</label>
                        <p className="errorMsg">{emailError}</p>
                    </div>
                    <div className='txt_field'>
                        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                            <span></span>
                        <label>Password</label>
                        <p className="errorMsg">{passwordError}</p>
                    </div>
                    <div className='pass'>Forget Password?</div>
                    {hasAccount ? (
                        <>
                         <button  className="btn1" onClick={handleLogin}>Login</button>
                         <p className='cursor'>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>sign up</span></p>
                        </>
                    ):(
                        <>
                        <button  className="btn1" onClick={handleSignup} >SignUp</button>
                        <p className='cursor'>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>sign in</span></p>
                       </>
                    )}
                  
                    <div className='signup_link'>
                       
                    </div>
                </div>
            </div>

        </div>
         
        </>

    );
}

export default LoginSecond;