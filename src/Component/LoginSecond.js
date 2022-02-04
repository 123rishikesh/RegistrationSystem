import React,{useState} from 'react'
import './Login.css';
import Home from './Home';
import {Alert} from 'react-bootstrap';
import './LoginSecond.css'

const LoginSecond = () => {

const [emaillog,setEmaillog] = useState("");
const [passwordlog,setPasswordlog] = useState("");
const [flag, setFlag] = useState(false);
const [home, setHome] = useState(true);

function handleSubmit(e){
    e.preventDefault();

    let email = localStorage.getItem('Email').replace(/"/g,"");
    let pass = localStorage.getItem('Password').replace(/"/g,"");

    if(!emaillog || !passwordlog){
        setFlag(true);
        console.log("empty")
    }else if(emaillog !== email || passwordlog !== pass){
       setFlag(true);

    } else{
        setHome(!home);
        setFlag(false);
    }
}

    return (
        <>
        {home ? 
        <div  className='main'>
            <div className='center'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className='txt_field'>
                        <input type="text" onChange={(e)=> setEmaillog(e.target.value)} required/>
                            <span></span>
                        <label>Email</label>
                    </div>
                    <div className='txt_field'>
                        <input type="password" onChange={(e)=> setPasswordlog(e.target.value)} required/>
                            <span></span>
                        <label>Password</label>
                    </div>
                    <div className='pass'>Forget Password?</div>
                    <input type="submit" value="Login"/>
                    <div className='signup_link'>
                        {/* Not a member? <a href="#">Signup</a> */}
                    </div>
                </form>
            </div>

        </div>:
          <Home/>   }
        </>

    );
}

export default LoginSecond;