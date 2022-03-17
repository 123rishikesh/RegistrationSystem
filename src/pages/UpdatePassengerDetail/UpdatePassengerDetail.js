import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './UpdatePassengerDetail.css'
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';

const UpdatePassengerDetail = () => {
    let navigate = useNavigate();

    const [state, setState] = useState({name: '', trips: '', airline: ''});

    const user = {
        name: state.name,
        trips: state.trips,
        airline: state.airline,
      
    }

    console.log(user)

    const handleClick =  () => {
        navigate('/Logout');

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('https://api.instantwebtools.net/v1/passenger/1', user)
        .then((resp) => {

            console.log(resp)
        })

    }

    return (
            <div className='main'>
                <Header/>
                <form onSubmit={handleSubmit} className='frm'>
                    <div className='txtField1'>
                    <label>PassengerName</label>
                    <input type='text' name='name'  value={state.name} onChange={(e) => setState({...state, name: e.target.value})}/>
                    </div><br/>
                    <div className='txtField2'>
                    <label>Trips</label>
                    <input type='number' name='trips' value={state.trips} onChange={(e) => setState({...state, trips: e.target.value})}/>
                    </div><br/>
                    <div className='txtField3'>
                    <label>AirlineID</label>
                    <input type='text' name='airline'    value={state.airline}   onChange={(e) => setState({...state, airline: e.target.value})}/>
                    </div>
                    <div className='btngroup'>
                    <button className='btn btn-primary' id="buttonupdate">Update Passenger</button>
                    <button className='btn btn-primary' id="buttonback" onClick={handleClick}>Back</button>
                    </div>
                </form>
                <Footer/>
            </div>

    );
}

export default UpdatePassengerDetail;