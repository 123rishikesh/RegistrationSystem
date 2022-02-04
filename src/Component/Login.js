import React,{useState} from 'react'
import './Login.css';
import Home from './Home';
import {Alert} from 'react-bootstrap';

const LoginForm = () => {
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

    return(
        <>
        {home ? 
        <div className='container'>
            
            <h3>Login Form</h3>
            <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label >Email</label>
                <input type="email" className='form-control' placeholder="enter your email" onChange={(e)=> setEmaillog(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label >Password</label>
                <input type="password" className='form-control' placeholder="enter your password"  onChange={(e)=> setPasswordlog(e.target.value)}/>
            </div>
            <button type="submit" className='btn btn-primary'>Login</button>
            {
                    flag && (<Alert color="primary" varient="danger">Please fill correct Email and password</Alert>)
                }
            </form> 
           
        </div>:
        <Home/>   }
        </>
    );
}

export default LoginForm;