import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './UpdatePassenger.css'
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';

const UpdatePassenger = () => {
    let navigate = useNavigate();

    const [state, setState] = useState({name: '', _id: ''});

    const user = {
        name: state.name,
        _id: state._id,
      
    }

    console.log(user)

    const handleClick =  () => {
        navigate('/Logout');

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.patch('https://api.instantwebtools.net/v1/passenger/1', user)
        .then((resp) => {

            console.log(resp)
        })

    }

    return (
            <div>
                <Header/>
                <h3>Update Passenger</h3>
                <form onSubmit={handleSubmit} className='txtform'>
                    <div classname='firstdiv'>
                    <label>PassengerName</label>
                    <input type='text' name='name'  value={state.name} onChange={(e) => setState({...state, name: e.target.value})}/>
                    </div>
                    {/* <label>Trips</label><br/>
                    <input type='number' name='trips' value={state.trips} onChange={(e) => setState({...state, trips: e.target.value})}/><br/> */}
                    <div className='seconddiv'>
                    <label>AirlineID</label>
                    <input type='text' name='_id'    value={state._id}   onChange={(e) => setState({...state, _id: e.target.value})}/>
                    </div>
                    <div className='buttongroup'>
                    <button className='btn btn-primary' id="btnupdate">Update Passenger</button>
                    <button className='btn btn-primary' id="btnback" onClick={handleClick}>Back</button>
                    </div>
                </form>
                <Footer/>
            </div>

    );
}

export default UpdatePassenger;