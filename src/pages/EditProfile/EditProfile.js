import React,{useState} from 'react'
import './EditProfile.css';

const EditProfile = (props) => {

    const {editProfile,name,setState, phone,state} = props;


    return (
           
                  <div className='root' >
                        <div className='container'>
                            <h3>Edit Profile</h3>
                            {/* <form> */}
                            <div className='form-group row'>
                            <div className=' w-50'>
                                <label>Name</label><br />
                                <input type="text" className="form-control" placeholder="please Enter Name" name="name" value={name} onChange={(e) => {setState({...state,[e.target.name]: e.target.value})}} />
                            </div>
                            <div className='w-50'>
                                <label>Email</label><br />
                                <input type="email" className="form-control" value="rishi@gmail.com"  readonly/>
                            </div>
                          
                            <div className='w-50'>
                                <label>Phone</label><br />
                                <input type="number" className="form-control" placeholder="please Enter PhoneNumber" name="phone" value={phone} onChange={(e) => {setState({...state,[e.target.name]: e.target.value})}} />
                            </div>
                            </div>
                            <button className='btn btn-primary' onClick={editProfile} >EditProfile</button>
                            {/* </form> */}
                        </div>

                    </div>
           
    );
}

export default EditProfile;