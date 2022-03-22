import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PassengerDetail.css';
import axios from 'axios';
import Footer from '../../Component/Footer'
import Header from '../../Component/Header'
import UpdatePassengerDetail from '../UpdatePassengerDetail/UpdatePassengerDetail';

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

    const onUpdate = () => {
        navigate('/UpdatePassengerDetail');
    }

    return (
        <div className='containerdiv'>
               <Header/>
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
                                <li style={{ listStyle: 'none' }} key={persons._id}>{persons.name}</li>
                                    </div>
                                <div className='seconddiv'>
                                    <li style={{ listStyle: 'none' }} key={persons.airline[0].id}>{persons.airline[0].name}</li>
                                </div>
                                <div className='thirddiv'>
                                    <li style={{ listStyle: 'none' }} key={persons.airline[0].id}>{persons.airline[0].country}</li>
                                </div>
                                <div className='fourthdiv'>
                                    <li style={{ listStyle: 'none' }} key={persons._id}>{persons.trips}</li>
                                </div>
                                <div className='buttonupdate'>
                               <button onClick={onUpdate}>Update</button>
                               </div>
                               <div style={{display: 'none'}}>
                               <UpdatePassengerDetail passengerId={persons._id}/>
                               </div>
                            </div>

                      
                    )
                    )
                }

            </ul>
            {/* <button className='btn btn-primary' onClick={getData}>GetData</button> */}
            <button className='btn btn-primary' onClick={handleClick}>Back</button>
         
        </div>
        <div className='footer'>
        {/* <Footer/> */}
        </div>
        </div>
    );
}

export default PassengerDetail;