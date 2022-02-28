import React from 'react'
import Sidebar from '../../common/sidebar'

const AddProduct = () => {
  return (
    <div>
      <Sidebar/>
      <form style={{"padding-left":"350px","padding-top":"50px"}}>
      <h3 style={{"padding-left":"100px","padding-top":"40px","color":"green"}}>Add New Product</h3>


      <div className="form-group row py-2" >

<label for="Product Name" className="col-sm-2 col-form-label">Product Name</label>
<div className="col-sm-6">
<input type="text" className="form-control" id="email" placeholder="Product Name"/>
</div>
</div>

<div className="form-group row py-2" >

    <label for="Product Price" className="col-sm-2 col-form-label">Product Price</label>
    <div className="col-sm-6">
    <input type="text" className="form-control" id="email" placeholder="Product Price"/>
    </div>
  </div>

  <div className="form-group row py-2" >

    <label for="Product Category" className="col-sm-2 col-form-label">Product Category</label>
    <div className="col-sm-6">
    <input type="text" className="form-control" id="email" placeholder="Product Category"/>
    </div>
  </div>

  <div className="form-group row py-2" >

    <label for="ProductQuantity" className="col-sm-2 col-form-label">Product Quantity</label>
    <div className="col-sm-6">
    <input type="number" className="form-control" id="email" placeholder="Product Quantity"/>
    </div>
  </div>

  <div className="form-group row py-2" >

    <label for="Product Description" className="col-sm-2 col-form-label">Product Description</label>
    <div className="col-sm-6">
    <input type="text" className="form-control" id="email" placeholder="Product Description"/>
    </div>
  </div>

  

      
        
  
  
  <div className="form-group row">
    <label for="ProductImage" className="col-sm-2 col-form-label">Product Image</label>
    <div className="col-sm-6">
      <input type="file" className="form-control" id="inputPassword" placeholder="Product Image"/>
    </div>
  </div>
  <div >
  <button  className="btn btn-primary px-5 ml-10">Save</button>
  </div>
  
</form>
    </div>
  )
}

export default AddProduct