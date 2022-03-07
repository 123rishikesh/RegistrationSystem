import React from 'react'
import './Login.css';
// import Home from './Home';
import './LoginSecond.css'
import { Link } from 'react-router-dom';

const LoginSecond = (props) => {


const {
    email,
    setEmail,
    password,
    setState,
    handleLogin,
    handleSignup,
    hasAccount,
    emailError,
   passwordError,
   state,
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
                        {/* <input type="text"  value={email} onChange={(e)=> setState({...state, email: e.target.value})} required/> */}
                            <span></span>
                        <label>UserName</label>
                        {/* <p>This field is required</p> */}
                        <p className="errorMsg">{emailError}</p>
                    </div>
                    <div className='txt_field'>
                        {/* <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required/> */}
                        <input type="password"  value={password} onChange={(e)=> setState({...state, password:e.target.value})} required/>
                            <span></span>
                        <label>Password</label>
                      
                        <p className="errorMsg">{passwordError}</p>
                        {/* <p>This field is required</p> */}
                    </div>
                   
                    <Link to="/ForgetPassword"><div className='pass'>Forgot Password?</div></Link>
                    {hasAccount ? (
                        <>
                         <button  className="btn1" onClick={handleLogin}>Login</button>
                         <p className='cursor'>Don't have an account ? <span onClick={() => setState({hasAccount: !hasAccount})}>sign up</span></p>
                        </>
                    ):(
                        <>
                        <button  className="btn1" onClick={handleSignup} >SignUp</button>
                        <p className='cursor'>Have an account ? <span onClick={() => setState({hasAccount: !hasAccount})}>sign in</span></p>
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