import React from 'react'
import Sidebar from '../../common/sidebar'
import './dashboard.css'

const Dashboard = () => {
  return (
      <div>
        <Sidebar/>
    <section className="home-section">
    <nav>
      <div className="sidebar-button">
        <i className='bx bx-menu sidebarBtn'></i>
        <span className="dashboard">Dashboard</span>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search..."/>
        <i className='bx bx-search' ></i>
      </div>
      <div className="profile-details">
         <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="profile image"/> 
        <p className="admin_name">xyz</p>
        <i className='bx bx-chevron-down' ></i>
      </div>
    </nav>

    <div className="home-content">
      <div className="overview-boxes">
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Order</div>
            <div className="number">40,876</div>
            <div className="indicator">
              <i className='bx bx-up-arrow-alt'></i>
              <span className="text">Up from yesterday</span>
            </div>
          </div>
          <i className='bx bx-cart-alt cart'></i>
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Sales</div>
            <div className="number">38,876</div>
            <div className="indicator">
              <i className='bx bx-up-arrow-alt'></i>
              <span className="text">Up from yesterday</span>
            </div>
          </div>
          <i className='bx bxs-cart-add cart two' ></i>
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Profit</div>
            <div className="number">$12,876</div>
            <div className="indicator">
              <i className='bx bx-up-arrow-alt'></i>
              <span className="text">Up from yesterday</span>
            </div>
          </div>
          <i className='bx bx-cart cart three' ></i>
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total External Sellers</div>
            <div className="number">11,086</div>
            <div className="indicator">
              <i className='bx bx-down-arrow-alt down'></i>
              <span className="text">Down From Today</span>
            </div>
          </div>
          <i className='bx bxs-cart-download cart four' ></i>
        </div>
      </div>

      <div className="sales-boxes">
        <div className="recent-sales box">
          <div className="title">Recent Sales</div>
          <div className="sales-details">
            <ul className="details">
              <li className="topic">Date</li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">02 Jan 2021</a></li>
            </ul>
            <ul className="details">
            <li className="topic">Customer</li>
            <li><a href="#">abc</a></li>
            <li><a href="#">abc</a></li>
            <li><a href="#">abc</a></li>
            <li><a href="#">abc</a></li>
            <li><a href="#">abc</a></li>
            <li><a href="#">abc</a></li>
            <li><a href="#">abc</a></li>
            <li><a href="#">abc</a></li>
             <li><a href="#">abc</a></li>
          </ul>
          <ul className="details">
            <li className="topic">Sales</li>
            <li><a href="#">Delivered</a></li>
            <li><a href="#">Pending</a></li>
            <li><a href="#">Returned</a></li>
            <li><a href="#">Delivered</a></li>
            <li><a href="#">Pending</a></li>
            <li><a href="#">Returned</a></li>
            <li><a href="#">Delivered</a></li>
             <li><a href="#">Pending</a></li>
            <li><a href="#">Delivered</a></li>
          </ul>
          <ul className="details">
            <li className="topic">Total</li>
            <li><a href="#">Rs.204.98</a></li>
            <li><a href="#">Rs.24.55</a></li>
            <li><a href="#">Rs.25.88</a></li>
            <li><a href="#">Rs.170.66</a></li>
            <li><a href="#">Rs.56.56</a></li>
            <li><a href="#">Rs.44.95</a></li>
            <li><a href="#">Rs.67.33</a></li>
             <li><a href="#">Rs.23.53</a></li>
             <li><a href="#">Rs.46.52</a></li>
          </ul>
          </div>
          <div className="button">
            <a href="#">See All</a>
          </div>
        </div>
        <div className="top-sales box">
          <div className="title">Top Seling Products</div>
          <div className="card mb-2" >

  <div className="card-body">
      <div className='row'>
          <div className='col-4'>
          <img className='col-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQQ39XzWGrW-sKYUbU73DFfU1tYPuXaxGQ6Q&usqp=CAU"/>
          </div>
          <div className='col-4'>
          <p className="card-title">Topsy Trvey</p>
          </div>
          <div className='col-4'>
          <p className="card-title">Rs.200.00</p>
          </div>
      </div>
  
    
  </div>

  
</div>

<div className="card mb-2" >

<div className="card-body">
    <div className='row'>
        <div className='col-4'>
        <img className='col-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQQ39XzWGrW-sKYUbU73DFfU1tYPuXaxGQ6Q&usqp=CAU"/>
        </div>
        <div className='col-4'>
        <p className="card-title">Topsy Trvey</p>
        </div>
        <div className='col-4'>
        <p className="card-title">Rs.200.00</p>
        </div>
    </div>

  
</div>


</div>

<div className="card" >

<div className="card-body">
    <div className='row'>
        <div className='col-4'>
        <img className='col-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQQ39XzWGrW-sKYUbU73DFfU1tYPuXaxGQ6Q&usqp=CAU"/>
        </div>
        <div className='col-4'>
        <p className="card-title">Topsy Trvey</p>
        </div>
        <div className='col-4'>
        <p className="card-title">Rs.200.00</p>
        </div>
    </div>

  
</div>


</div>
          
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Dashboard