import React from 'react'
import './sidebar.css'
const Sidebar = () => {
  return (

    <div className="sidebar">
    <div className="logo-details">
      <i className='bx bxl-c-plus-plus'></i>
      <p className="logo_name" >Miura Floriculture</p>
      
    </div>
      <ul className="nav-links">
        <li>
          <a href="dashboard" className="active">
            <i className='bx bx-grid-alt' ></i>
            <p className="links_name">Dashboard</p>
          </a>
        </li>
        <li>
          <a href="user-details">
            <i className='bx bx-box' ></i>
            <p className="links_name">User Details</p>
          </a>
        </li>
        <li>
          <a href="add-user">
          <i className='bx bx-box' ></i>
            <p className="links_name">Add new User</p>
          </a>
        </li>
        <li>
          <a href="add-product">
            <i className='bx bx-pie-chart-alt-2' ></i>
            <p className="links_name">Add Products</p>
          </a>
        </li>
        <li>
          <a href="products">
          <i className='bx bx-pie-chart-alt-2' ></i>
            <p className="links_name">Products Details</p>
          </a>
        </li>
        <li>
          <a href="order-details">
            <i className='bx bx-book-alt' ></i>
            <p className="links_name">Order Details</p>
          </a>
        </li>
        <li>
          <a href="sold-products">
          <i className='bx bx-book-alt' ></i>
            <p className="links_name">Sold products</p>
          </a>
        </li>

        <li>
          <a href="seller-details">
            <i className='bx bx-box' ></i>
            <p className="links_name">External Seller Details</p>
          </a>
        </li>
        <li>
          <a href="add-seller">
          <i className='bx bx-box' ></i>
            <p className="links_name">Add External Seller</p>
          </a>
        </li>
        <li>
          <a href="seller-orders">
          <i className='bx bx-box' ></i>
            <p className="links_name">External Seller Orders</p>
          </a>
        </li>
        <li>
          <a href="seller-payments">
          <i className='bx bx-box' ></i>
            <p className="links_name">External Seller Payments</p>
          </a>
        </li>
        
        
        
        <li class="log_out">
          <a href="/">
            <i className='bx bx-log-out'></i>
            <p className="links_name">Log out</p>
          </a>
        </li>
      </ul>
  </div>
  )
}

export default Sidebar