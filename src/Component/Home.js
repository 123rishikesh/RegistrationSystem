import React, {useState} from 'react'
import Logout from './Logout';

const Home = () => {

    const [logout, setLogout] = useState(true);

    function handleClick(){
        localStorage.clear();
        setLogout(false);
    }

    return (
        <>
        {logout ?
        <div>
            <h1>You have sucessfully Login</h1>
            <button type="button" className='primary' onClick={handleClick}>Logout</button>
        </div>: 
            <Logout/> }
        </>
    );
}

export default Home;