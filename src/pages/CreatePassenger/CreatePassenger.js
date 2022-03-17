import React, { useState } from 'react'
import './CreatePassenger.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';

const CreatePassenger = () => {

    const [state, setState] = useState({ name: '', trip: '', airline: '', country: '' });
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            name: state.name,
            trip: state.trip,
            airline: state.airline,
            country: state.country
        }
        console.log(user)
        axios.post('https://api.instantwebtools.net/v1/passenger', user)
            .then(resp => {

                console.log(resp);
                console.log(resp.data)
            })
    }

    const handleClick = () => {
        navigate('/Logout');
    }

    return (
        <div className='container'>
            <Header />
                <h3>Add New Passenger</h3>
            <form onSubmit={handleSubmit} className='form'>
                <div className='txtfield1'>
                    <label>
                        PassengerName
                    </label>
                    <input type='text' name='name' value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} /><br />
                </div>
                <div className='txtfield2'>
                    <label>
                        Trip
                    </label>
                    <input type='number' name='trip' value={state.trip} onChange={(e) => setState({ ...state, trip: e.target.value })} /><br />
                </div>
                <div className='txtfield3'>
                    <label>
                        AirlineID
                    </label>
                    <input type='number' name='airline' value={state.airline} onChange={(e) => setState({ ...state, airline: e.target.value })} /><br /><br />
                </div>
                <div className='txtfield4'>
                <label>
                    Country
                </label>
                <input type='text' name='country' value={state.country} onChange={(e) => setState({ ...state, country: e.target.value })} /><br /><br />
                </div>
                <div className='btngroup'>
                <button type="submit" className='btn btn-primary' id='btnadd'>Add Passenger</button>
                <button type="button" className='btn btn-primary' id='btnback1' onClick={handleClick}>Back</button>
                </div>
            </form>
            <Footer />
        </div>

    );
}

export default CreatePassenger;