import React, {useState} from 'react';
import './DeletePassenger.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const DeletePassenger = () => {

    const navigate = useNavigate();
    const [state, setState] = useState({id:''});

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.delete('https://api.instantwebtools.net/v1/passenger/1')
        .then( resp => {
            console.log(resp)
            console.log(resp.data)
        })
    }

    const handleClick = () => {

        navigate('/Logout')
    }

    return (
        <div>
            {/* <form onSubmit={handleSubmit}>
                <lable>PassengerID</lable><br/>
                <input type='number' name='id' onChange={(e) => setState({name: e.target.value})}/><br/><br/>
                <button type='submit'>Delete</button>
            </form> */}
              <button type='button' onClick={handleSubmit}>Delete</button>
              <button type='button' onClick={handleClick} id='back'>Back</button>
        </div>

    );
}

export default DeletePassenger;