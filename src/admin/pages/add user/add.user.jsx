import React from 'react'
import Sidebar from '../../common/sidebar'

const AddUser = () => {
  return (
    <div>
      <Sidebar/>
      <form style={{"padding-left":"350px","padding-top":"50px"}}>
      <h3 style={{"padding-left":"100px","padding-top":"40px","color":"green"}}>Add New User</h3>


      <div className="form-group row py-2" >

<label for="firstname" className="col-sm-2 col-form-label">First Name</label>
<div className="col-sm-6">
<input type="text" className="form-control" id="email" placeholder="First Name"/>
</div>
</div>

<div className="form-group row py-2" >

    <label for="lastname" className="col-sm-2 col-form-label">Last Name</label>
    <div className="col-sm-6">
    <input type="text" className="form-control" id="email" placeholder="Last Name"/>
    </div>
  </div>

      
        
  <div className="form-group row py-2" >

    <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-6">
    <input type="text" className="form-control" id="email" placeholder="Email"/>
    </div>
  </div>
  
  <div className="form-group row">
    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-6">
      <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
    </div>
  </div>
  <div >
  <button  className="btn btn-primary px-5 ml-10">Save</button>
  </div>
  
</form>
    </div>
  
  )
}

export default AddUser