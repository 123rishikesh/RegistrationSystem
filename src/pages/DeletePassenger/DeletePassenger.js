import React, {useState} from 'react';
import './DeletePassenger.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';


const DeletePassenger = () => {

    const navigate = useNavigate();
    const [state, setState] = useState({id:''});

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.delete('https://api.instantwebtools.net/v1/passenger/1', state._id)
        .then( resp => {
            console.log(resp)
            console.log(resp.data)
        })
    }

    const handleClick = () => {

        navigate('/Logout')
    }

    return (
        <div className='main-container1'>
            <Header/>
                <h3>Delete Passenger</h3>
            <form onSubmit={handleSubmit} className='form'>
                <div>
                <lable>PassengerID</lable>
                <input type='text' name='_id'  value={state._id} onChange={(e) => setState({name: e.target.value})}/><br/><br/>
                </div>
                <button type='submit' id='deletebtn'>Delete</button>
                <button type='button' onClick={handleClick} id='backbutton'>Back</button>
            </form>
              {/* <button type='button' onClick={handleSubmit}>Delete</button> */}
             <Footer/>
        </div>

    );
}

export default DeletePassenger;