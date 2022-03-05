import React from 'react'
import Sidebar from '../../common/sidebar'
const AddSeller = () => {
  return (
    <div>
         <div>
      <Sidebar/>
      <form style={{"padding-left":"350px","padding-top":"50px"}}>
      <h3 style={{"padding-left":"100px","padding-top":"40px","color":"green"}}>Add New Seller</h3>


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
  
  <div className="form-group row py-2">
    <label for="address" className="col-sm-2 col-form-label">Address</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="inputPassword" placeholder="Address"/>
    </div>
  </div>

  <div className="form-group row py-2">
    <label for="contact" className="col-sm-2 col-form-label">Contact Number</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="contact" placeholder="Contact Number"/>
    </div>
  </div>

  <div className="form-group row">
    <label for="category" className="col-sm-2 col-form-label">Product Category</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="contact" placeholder="product Category"/>
    </div>
  </div>

  <div >
  <button  className="btn btn-primary px-5 ml-10">Save</button>
  </div>
  
</form>
    </div>
    </div>
  )
}

export default AddSeller