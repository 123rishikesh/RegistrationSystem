import React from 'react'
import { Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import Logout from '../pages/Logout';

const ProtectedRoutes = ({handleLogout,log}) => {

    const authentication =  getAuth();
    const user = authentication.currentUser?.email;
 

    return(
         <>
            {user  ? <Logout handleLogout={handleLogout}/>: <Navigate to="/"/>}
        </>
       );
    
}

export default ProtectedRoutes;