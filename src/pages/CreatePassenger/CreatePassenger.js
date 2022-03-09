import React,{useState} from 'react'
import axios from 'axios';

const CreatePassenger = () => {

    const [state, setState] = useState({name: '', trip: '', airline: '', country: ''});

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
        .then( resp => {

            console.log(resp);
            console.log(resp.data)
        })
    }

    return(
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <label>
                    PassengerName
                    </label><br/>
                    <input type='text' name='name' value={state.name} onChange={(e) => setState( {...state,name: e.target.value})}/><br/>
               
                <label>
                    Trip
                    </label><br/>
                    <input type='number' name='trip' value={state.trip} onChange={(e) => setState( { ...state,trip: e.target.value})}/><br/>
              
                <label>
                    AirlineID
                    </label><br/>
                    <input type='number' name='airline' value={state.airline} onChange={(e) => setState({...state, airline: e.target.value})}/><br/><br/>
                    <label>
                    Country
                    </label><br/>
                    <input type='text' name='country' value={state.country} onChange={(e) => setState({...state, country: e.target.value})}/><br/><br/>
              
                    <button type="submit" className='btn btn-primary'>Add Passenger</button>
            </form>
        
        </div>

    );
}

export default CreatePassenger;