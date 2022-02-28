import React from 'react'
import Sidebar from '../../common/sidebar'
const Products = () => {
  return (
    <div>
    <div className='row'>
    <div className='col=3'>
    <Sidebar/>
    </div>
    <div className='col=9'>
        
    <table className="table table-striped">
<thead>
<h2 style={{"textAlign":"right","color":"green","padding-left":"150px"}}>Products Details</h2>
<tr>
<th scope="col">#</th>
<th scope="col">Product Name</th>
<th scope="col">Product Price</th>
<th scope="col">Product Category</th>
<th scope="col">Product Description</th>
<th scope="col">Product Quantity</th>
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
<td>@mdo</td>
<td>ffddss</td>
<td>15</td>
<td><i class="fa fa-plus" aria-hidden="true"></i></td>
<td><i className='bx bx-grid-alt' ></i></td>
<td><i className='fa fa-trash'/></td>

</tr>
<tr>
<th scope="row">2</th>
<td>Jacob</td>
<td>Thornton</td>
<td>@fat</td>
<td>ffddss</td>
<td>15</td>
<td><i class="fa fa-plus" aria-hidden="true"></i></td>
<td><i className='bx bx-grid-alt' ></i></td>
<td><i className='fa fa-trash'/></td>
</tr>
<tr>
<th scope="row">3</th>
<td>Larry</td>
<td>the Bird</td>
<td>@twitter</td>
<td>ffddss</td>
<td>15</td>
<td><i class="fa fa-plus" aria-hidden="true"></i></td>
<td><i className='bx bx-grid-alt' ></i></td>
<td><i className='fa fa-trash'/></td>
</tr>
</tbody>
</table>
    </div>
    </div>
  
  


</div>
  )
}

export default Products