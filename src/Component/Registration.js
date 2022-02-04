import React, { useState } from 'react';
import './Registration.css';
import {Alert} from 'react-bootstrap';
import LoginSecond from './LoginSecond';

const RegistrationForm = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [country,setCountry] = useState("");
    const [state,setState] = useState("");
    const [district,setDistrict] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    function handleSubmit(e) {
        console.log("inside handleSubmit")
        e.preventDefault();
        if(!name || !email || !password || !phone || !country || !state || !district){
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem('Name', JSON.stringify(name));
            localStorage.setItem('Email', JSON.stringify(email));
            localStorage.setItem('Password', JSON.stringify(password));
            localStorage.setItem('Phone', JSON.stringify(phone));
            localStorage.setItem('Country', JSON.stringify(country));
            localStorage.setItem('State', JSON.stringify(state));
            localStorage.setItem('District', JSON.stringify(district));

            console.log("Saved in localstorage")

            setLogin(!login);
        }

    }

    function handleClick(){
        setLogin(!login)
    }

    return(
    <>
        {login ?
        <div className='container'>
            <h3>RegistrationForm</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label  >Name</label>
                    <input type="text" className='form-control' placeholder='Enter your name' value={name} onChange={(event)=> setName(event.target.value)}/>
                </div>
                <div className='form-group'>
                    <label >Email</label>
                    <input type="email" className='form-control' placeholder='Enter your Email' value={email} onChange={(event)=> setEmail(event.target.value)}/>
                </div>
                <div className='form-group'>
                    <label  >Password</label>
                    <input type="password" className='form-control' placeholder='Enter your password' value={password} onChange={(event)=> setPassword(event.target.value)}/>
                </div>
               
                <div className='form-group'>
                    <label  >Country</label>
                    <input type="text" className='form-control' placeholder='Enter your Country' value={country} onChange={(event)=> setCountry(event.target.value)}/>
                </div>
                <div className='form-group'>
                    <label  >State</label>
                    <input type="text" className='form-control' placeholder='Enter your state' value={state} onChange={(event)=> setState(event.target.value)}/>
                </div>
                <div className='form-group'>
                    <label  >District</label>
                    <input type="text" className='form-control' placeholder='Enter your district' value={district} onChange={(event)=> setDistrict(event.target.value)}/>
                </div>
                <div className='form-group'>
                    <label  >Phone Number</label>
                    <input type="number" className='form-control' placeholder='Enter your Phone Number' value={phone} onChange={(event)=> setPhone(event.target.value)}/>
                </div>
                <button type="submit" className='btn btn-primary'>Submit</button>

                    <p className='cursor' onClick={handleClick}>Already registered {" "} login in?</p>
                {
                    flag && (<Alert color="primary" varient="danger">Please fill all the field</Alert>)
                }
            </form>
        </div>:
            <LoginSecond/>}
        </>
    );
}

export default RegistrationForm;