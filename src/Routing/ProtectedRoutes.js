import React, {useState} from 'react'
import { Navigate,Outlet } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import Logout from '../pages/Logout/Logout';



const ProtectedRoutes = () => {

    const authentication =  getAuth();
    const user = authentication.currentUser;

    // console.log(user)
    return(
         <>
            {user  ? <Outlet/>: <Navigate to="/"/>}
        </>
       );
    
}

export default ProtectedRoutes;