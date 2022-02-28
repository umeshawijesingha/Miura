import React from 'react'
import Sidebar from '../../common/sidebar'
const SellerDetails = () => {
  return (
    <div>
         <div>
          <div className='row'>
          <div className='col=3'>
          <Sidebar/>
          </div>
          <div className='col=9'>
              
          <table className="table table-striped">
  <thead>
  <h2 style={{"textAlign":"right","color":"green","padding-left":"70px"}}>Seller Details</h2>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Adress</th>
      <th scope="col">Email</th>
      <th scope="col">Product Category</th>
      <th >Add</th>
      <th >Edit</th>
      <th >Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>Ottojjgffcf</td>
      <td>@mdo</td>
      <td>hgfcf</td>
      <td><i class="fa fa-plus" aria-hidden="true"></i></td>
      <td><i className='bx bx-grid-alt' ></i></td>
      <td><i className='fa fa-trash'/></td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>Ottojjgffcf</td>
      <td>@mdo</td>
      <td>hgfcf</td>
      <td><i class="fa fa-plus" aria-hidden="true"></i></td>
      <td><i className='bx bx-grid-alt' ></i></td>
      <td><i className='fa fa-trash'/></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>Ottojjgffcf</td>
      <td>@mdo</td>
      <td>hgfcf</td>
      <td><i class="fa fa-plus" aria-hidden="true"></i></td>
      <td><i className='bx bx-grid-alt' ></i></td>
      <td><i className='fa fa-trash'/></td>
    </tr>
  </tbody>
</table>
          </div>
          </div>
        
        
    
    
    </div>
    </div>
  )
}

export default SellerDetails