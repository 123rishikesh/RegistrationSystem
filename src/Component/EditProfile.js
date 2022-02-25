import React,{useState} from 'react'

const EditProfile = (props) => {

    const {editProfile,name,setState, phone,state} = props;


    return (
            <>
                  <div className='container-fluid'>
                        <div className='container'>
                            <h3>Edit Profile</h3>
                            <div className='text_field'>
                                <label>Name</label><br />
                                <input type="text" placeholder="please Enter Name" name="name" value={name} onChange={(e) => {setState({...state,[e.target.name]: e.target.value})}} />
                            </div>
                            <div className='text_field'>
                                <label>Email</label><br />
                                <input type="email"  value="rishi@gmail.com"  readonly/>
                            </div>
                          
                            <div className='text_field'>
                                <label>Phone</label><br />
                                <input type="number" placeholder="please Enter PhoneNumber" name="phone" value={phone} onChange={(e) => {setState({...state,[e.target.name]: e.target.value})}} />
                            </div>
                            <button className='btn-primary' onClick={editProfile} >EditProfile</button>
                        </div>

                    </div>
            </>
    );
}

export default EditProfile;