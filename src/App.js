
import './App.css';
import app from './fire';
import React, { useState, useEffect } from 'react';
import UpdatePassengerDetail from './pages/UpdatePassengerDetail/UpdatePassengerDetail';
import PassengerDetail from './pages/PassengerDetail/PassengerDetail';
import CreatePassenger from './pages/CreatePassenger/CreatePassenger';
import DeletePassenger from './pages/DeletePassenger/DeletePassenger';
import UpdatePassenger from './pages/UpdatePassenger/UpdatePassenger';
import Header from './Component/Header';
import ProtectedRoutes from './Routing/ProtectedRoutes';
import LoginSecond from './pages/Login/LoginSecond'
import Logout from './pages/Logout/Logout';
import NotFound from './pages/NotFound/NotFound';
import { getAuth, updateProfile, updatePhoneNumber, updateEmail, updatePassword, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import EditProfile from './pages/EditProfile/EditProfile';
import {
  Routes,
  Route
} from "react-router-dom";
import UpdateEmail from './pages/UpdateEmail/UpdateEmail';
import UpdatePassword from './pages/UpdatePassword/UpdatePassword';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
// import Footer from './Component/Footer';

function App() {
  const [state, setState] = useState({ name: " ", phone: " ", email: " ", password: " ", emailError: " ", passwordError: " ", hasAccount: " "});
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [hasAccount, setHasAccount] = useState(false);
  // const [name, setName] = useState(" ");
  // const [phone, setPhone] = useState(" ");
  // console.log(state.email,state.password)
  const navigate = useNavigate();

  const auth = getAuth();
  // console.log(auth);
  // const Email = auth.currentUser?.providerData[0].email;



  const clearInputs = () => {
    // setEmail("");
    // setPassword("");
    setState({ email: '' })
    setState({ password: '' })
  }

  const clearErrors = () => {
    // setEmailError("");
    // setPasswordError("");
    setState({ emailError: '' })
    setState({ passwordError: '' })
  }

  const handleLogin = () => {
    clearErrors();
    
    app
      .auth()
      .signInWithEmailAndPassword(email, state.password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setState({ emailError: err.message })
            break;
          case "auth/wrong-password":
            setState({ passwordError: err.message })
            break;
        }
      });

     
     navigate('/Logout')
   

  }

  const handleSignup = () => {
    clearErrors();
    app
      .auth()
      .createUserWithEmailAndPassword(state.email, state.password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            // setEmailError(err.message);
            setState({ emailError: err.message })
            break;
          case "auth/weak-password":
            // setPasswordError(err.message);
            setState({ passwordError: err.message })
            break;
        }
      });
  }

  const editProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: state.name
    }).then((resp) => {
      console.log("profile Updated")

    }).catch((error) => {
      console.log(error)

    });

    updatePhoneNumber(auth.currentUser, {
      phoneNumber: state.phone
    }).then((resp) => {
      console.log("phone Number updated")
    }).catch((error) => {
      console.log(error)

    });

  }

  const changeEmail = () => {
    updateEmail(auth.currentUser,
      state.email
    ).then(() => {
      console.log("Email Updated")
    }).catch((error) => {
      console.log(error)
    })
  }

  const changePassword = () => {
    const user = auth.currentUser;
    const newPassword = state.password;

    updatePassword(user, newPassword).then(() => {
      console.log("Password Updated Sucessfully")
      // Update successful.
    }).catch((error) => {
      // An error ocurred
      console.log("error occured")
      // ...
    });
  }

  const forgetPassword = () => {
  
sendPasswordResetEmail(auth,email)
  .then(() => {
    console.log("Password reset email sent!")
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode)
  });
  }

  const handleLogout = () => {
    app.auth().signOut();
    navigate('/')
  }

  const authListener = () => {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    })
  }


  useEffect(() => {
    authListener();

  }, [])


  return (

    <div className="App">
    
      <Routes>
       
        <Route path="*" element={<NotFound />} />
     
        <Route element={<ProtectedRoutes/>} >
          <Route path="/Logout" element={<Logout  handleLogout={handleLogout}/>} />
          <Route path="/EditProfile" element={
          <EditProfile
            editProfile={editProfile}
            name={state.name}
            setState={setState}
            phone={state.phone}
            state={state}
          />} />

        <Route path="/PassengerDetail" element={<PassengerDetail />} />
        <Route path="/UpdatePassengerDetail" element={<UpdatePassengerDetail />} />
        <Route path="/UpdatePassenger" element={<UpdatePassenger />} />
        <Route path="/DeletePassenger" element={<DeletePassenger />} />
        <Route path="/CreatePassenger" element={<CreatePassenger />} />
        <Route path="/UpdateEmail" element={<UpdateEmail changeEmail={changeEmail} email={state.email} setState={setState} />} />
        <Route path="/UpdatePassword" element={<UpdatePassword changePassword={changePassword} password={state.password} setState={setState} />} />
        <Route path="/ForgetPassword" element={<ForgetPassword forgetPassword={forgetPassword} email={email} setEmail={setEmail}  />} />
        </Route>
        
        {/* <Route  path="/" element={<LoginSecond
                                email={email}
                                setEmail={setEmail}
                                password={password}
                                setPassword={setPassword}
                                handleLogin={handleLogin}
                                handleSignup={handleSignup}
                                hasAccount={hasAccount}
                                setHasAccount={setHasAccount}
                                emailError={emailError}
                                passwordError={passwordError}
                              />}/> */}
        <Route path="/" element={<LoginSecond
          email={email}
          setEmail={setEmail}
          setState={setState}
          password={state.password}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={state.hasAccount}
          state={state}
          emailError={state.emailError}
          passwordError={state.passwordError}
        />} />

       
      </Routes>
        
    </div>
  );
}

export default App;
