
import './App.css';
// import LoginForm from './Component/Login';
import RegistrationForm from './Component/Registration';
import LandingPage from './Component/LandingPage';
import {Routes,Route} from 'react-router-dom';
import LoginSecond from './Component/LoginSecond';


function App() {
  return (
    <div className="App">
     {/* <LoginSecond/> */}
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/Login" element={<LoginSecond/>}/>
      <Route path="/Registration" element={<RegistrationForm/>}/>
    </Routes>
    
   
    
    </div>
  );
}

export default App;
