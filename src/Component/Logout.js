import React from 'react'

const Logout = ({handleLogout}) => {

    return (
        <>
       
            <h3>Welcome</h3>
            <button type="button" className='primary' onClick={handleLogout} style={{width: "20%"}}>Logout</button>
        </>
    );
}

export default Logout;