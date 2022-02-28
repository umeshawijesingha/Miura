import React from 'react'
import Sidebar from '../../common/sidebar'
const ExternalOrders = () => {
  return (
    <div>
    <div className='row'>
    <div className='col=3'>
    <Sidebar/>
    </div>
    <div className='col=9' style={{"padding-left":"100px"}}>
        
    <table className="table table-striped" style={{"padding-left":"100px"}}>
<thead>
<h2 style={{"textAlign":"right","color":"green"}}>External Order Details</h2>
<tr>
<th scope="col">#</th>
<th scope="col">Order Id</th>
<th scope="col">Seller Id</th>
<th scope="col">Category</th>
<th scope="col">Quantity</th>
<th scope="col">Unit Price</th>
<th scope="col">Total Amount</th>
<th >Delete</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row">1</th>
<td>1123</td>
<td>12</td>
<td>cccc</td>
<td>20</td>
<td>Rs.200.00</td>
<td>Rs.4000.00</td>
<td><i className='fa fa-trash'/></td>

</tr>
<tr>
<th scope="row">2</th>
<td>1123</td>
<td>12</td>
<td>cccc</td>
<td>20</td>
<td>Rs.200.00</td>
<td>Rs.4000.00</td>
<td><i className='fa fa-trash'/></td>
</tr>
<tr>
<th scope="row">3</th>
<td>1123</td>
<td>12</td>
<td>cccc</td>
<td>20</td>
<td>Rs.200.00</td>
<td>Rs.4000.00</td>
<td><i className='fa fa-trash'/></td>
</tr>
</tbody>
</table>
    </div>
    </div>
  
  


</div>
  )
}

export default ExternalOrders