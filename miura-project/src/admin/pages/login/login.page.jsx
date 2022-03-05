import React from 'react'

const AdminLoginPage = () => {
  return (
    <div className='p-500 m-100' >
		<hr/>


	<div className='row center'>
		<div className='col-3' >
			<img style={{"padding":"100px -300px 50px 300px","width":"500px","height":"600px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLhrC59qOCbBVFGUgQcLaPi5JE5ZVjNZ_ug&usqp=CAU"/>
		</div>
		<div style={{"padding":"100px 50px "}} className='col-6 py-500'>
		<div className=" card row  my-50">
			<div >
				<div className="img-left d-none d-md-flex">
				</div>
				<div  className="card-body col-12 p-10 ">
					<h4  className="title text-center mt-4">
					Admin Login
					</h4>
					<form className="form-box px-3" >



				<div className="form-input">
							
							<input type="email" placeholder="Input your Email" name="email" tabindex="20" required=""/>
						</div>
					
						<div className="form-input">
							
							<input type="password" placeholder="*********" name="password" tabindex="10" required=""/>
						</div>	
						<div className="mb-3">
							<a href="dashboard">
							<button   className="btn btn-block text-capitalize " name="submit"><a href='admin/dashboard'>Login</a></button>
							</a>
							
						</div>
					
					</form>
				</div>
				<hr/>
            </div>
        </div>
		</div>
	</div>
		<hr/>
    </div>

 
  )
}

export default AdminLoginPage