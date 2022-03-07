import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './EditProfile.css';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import {useNavigate } from 'react-router-dom';

const EditProfile = (props) => {

    const { editProfile, name, setState, phone, state } = props;

const navigate = useNavigate();

    const handleClick = () => {

        navigate('/Logout')
    }


    return (


        <Container>
            <Row>

                <Col className='header'>
                    <Header />
                </Col>

            </Row>
            <Row>
                <Col></Col> <Col className='title'> <h3>Update Profile</h3></Col> <Col></Col>
            </Row>
            <Row>
                <Col></Col>
              
                    <div className='form-group'>
                        <Col>
                        <div className=' w-50'>
                            <label>Name</label><br />
                            <input type="text" className="form-control" placeholder="please Enter Name" name="name" value={name} onChange={(e) => { setState({ ...state, [e.target.name]: e.target.value }) }} />
                        </div>
                        </Col>
                        <Col>
                        <div className='w-50'>
                            <label>Email</label><br />
                            <input type="email" className="form-control" value="rishi@gmail.com" readonly />
                        </div>
                        </Col>
                        <Col>
                        <div className='w-50'>
                            <label>Phone</label><br />
                            <input type="number" className="form-control" placeholder="please Enter PhoneNumber" name="phone" value={phone} onChange={(e) => { setState({ ...state, [e.target.name]: e.target.value }) }} />
                        </div>
                        </Col>
                  <Col className="backButton">
                  <button className='btn btn-primary' onClick={handleClick}>Back</button>
                  </Col>
                       <Col  className="updateButton">
                       <button className='btn btn-primary' onClick={editProfile} >Update Profile</button>
                       </Col> 
              
                </div>
            </Row>

            <Row >
                <Col className='footer'>
                    <Footer />
                </Col>

            </Row>
        </Container>


    );
}

export default EditProfile;