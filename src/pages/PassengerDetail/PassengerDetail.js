import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PassengerDetail.css';
import axios from 'axios';

const PassengerDetail = () => {

    const navigate = useNavigate();

    const [state, setState] = useState({ person: [] });

    useEffect(() => {

        axios.get('https://api.instantwebtools.net/v1/passenger?page=0&size=10')
            .then(resp => {

                console.log(resp);

                setState({ person: resp.data.data });
                const { person } = state;
                console.log(person)
               
            })
    }, []);

    const handleClick = () => {

        navigate('/Logout');
    }

    // const getData = () => {

    //     axios.get('https://api.instantwebtools.net/v1/passenger?page=0&size=10')
    //     .then(resp => {

    //         console.log(resp);

    //         setState({ person: resp.data.data });
    //         const { person } = state;
    //         console.log(person)
           
    //     })
    // }

    return (
        <div className='rootdiv'>
            <ul>
                <label className='passenger'>Passenger Name</label>
                <label className="airline">Airline Name</label>
                <label className="country">Country</label>
                <label className="trip">trip</label>
                {
                    state.person.map(persons => (
                        //    console.log(persons.name, persons.trips, persons.airline[0].name)
                      
                            <div className='maindiv'>

                                    <div className='firstdiv'>
                                <li style={{ listStyle: 'none' }} key={persons.id}>{persons.name}</li>
                                    </div>
                                <div className='seconddiv'>
                                    <li style={{ listStyle: 'none' }} key={persons.airline[0].id}>{persons.airline[0].name}</li>
                                </div>
                                <div className='thirddiv'>
                                    <li style={{ listStyle: 'none' }} key={persons.airline[0].id}>{persons.airline[0].country}</li>
                                </div>
                                <div className='fourthdiv'>
                                    <li style={{ listStyle: 'none' }} key={persons.id}>{persons.trips}</li>
                                </div>
                               
                            </div>

                      
                    )
                    )
                }

            </ul>
            {/* <button className='btn btn-primary' onClick={getData}>GetData</button> */}
            <button className='btn btn-primary' onClick={handleClick}>Back</button>
        </div>
    );
}

export default PassengerDetail;