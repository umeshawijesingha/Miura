import React from 'react'
import Sidebar from '../../common/sidebar'
const ExternalPayments = () => {
  return (
    <div>
          <div className='row'>
          <div className='col=3'>
          <Sidebar/>
          </div>
          <div className='col=9'>
              
          <table className="table table-striped">
  <thead>
  <h2 style={{"textAlign":"right","color":"green"}}>External Seller Payments</h2>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Payment Id</th>
      <th scope="col">Seller Id</th>
      <th scope="col">Payment Status</th>
      <th scope="col">Paid Date</th>
      <th >Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>145555</td>
      <td>12</td>
      <td>Paid</td>
      <td>28/02/2022</td>
      <td><i className='fa fa-trash'/></td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>145555</td>
      <td>12</td>
      <td>Pending</td>
      <td>28/02/2022</td>
      <td><i className='fa fa-trash'/></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>145555</td>
      <td>12</td>
      <td>Paid</td>
      <td>28/02/2022</td>
      <td><i className='fa fa-trash'/></td>
    </tr>
  </tbody>
</table>
          </div>
          </div>
        
        
    
    
    </div>
  )
}

export default ExternalPayments