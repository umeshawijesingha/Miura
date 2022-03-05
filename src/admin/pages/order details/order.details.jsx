import React from 'react'
import Sidebar from '../../common/sidebar';

const OrderDetails = () => {
  return (
    <div>
    <div className='row'>
    <div className='col=3'>
    <Sidebar/>
    </div>
    <div className='col=9' style={{"padding-left":"100px"}}>
        
    <table className="table table-striped" style={{"padding-left":"100px"}}>
<thead>
<h2 style={{"textAlign":"right","color":"green","padding-left":"10px"}}>Order Details</h2>
<tr>
<th scope="col">#</th>
<th scope="col">Order Id</th>
<th scope="col">Customer Id</th>
<th scope="col">First Name</th>
<th scope="col">Last Name</th>
<th scope="col">Email</th>
<th scope="col">Total Amount</th>
<th >Delete</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row">1</th>
<td>1123</td>
<td>12</td>
<td>Mark</td>
<td>Mark</td>
<td>@mdo</td>
<td>Rs.1500.00</td>
<td><i className='fa fa-trash'/></td>

</tr>
<tr>
<th scope="row">2</th>
<td>1123</td>
<td>12</td>
<td>Mark</td>
<td>Mark</td>
<td>@mdo</td>
<td>Rs.1500.00</td>
<td><i className='fa fa-trash'/></td>
</tr>
<tr>
<th scope="row">3</th>
<td>1123</td>
<td>12</td>
<td>Mark</td>
<td>Mark</td>
<td>@mdo</td>
<td>Rs.1500.00</td>
<td><i className='fa fa-trash'/></td>
</tr>
</tbody>
</table>
    </div>
    </div>
  
  


</div>
  )
}

export default OrderDetails