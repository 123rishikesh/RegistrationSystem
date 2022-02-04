import React,{useState} from 'react'
import LandingPage from './LandingPage';
import './Registration.css';

const Logout = () => {
const [redirect, setRedirect] = useState(true);

    function handleClick(){
        console.log("inside handleClick")
       setRedirect(false);
    }

    return (
        <>
        {redirect ?
        <div>
        <h3>You have Sucessfully Logout</h3>
        <p onClick={handleClick} className='cursor'>Please click to Redirect on LandingPage</p>
        </div>:
            <LandingPage/>}
        </>
    );
}

export default Logout;