import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      {/* Sidebar */}
  <ul
    className="navbar-nav sidebar sidebar-light accordion"
    id="accordionSidebar"
  >
    <a
      className="sidebar-brand d-flex align-items-center justify-content-center"
      href="index.html"
    >
      
      <div className="sidebar-brand-text mx-3">Admin</div>
    </a>
    <hr className="sidebar-divider my-0" />
    <li className="nav-item active">
      <Link className="nav-link" to="/">
        <i className="fas fa-fw fa-tachometer-alt" />
        <span>Dashboard</span>
      </Link>
    </li>
    <hr className="sidebar-divider" />
    <div className="sidebar-heading">Features</div>
    
    
    <li className="nav-item">
      <Link className="nav-link" to="/category">
        <i className="fas fa-fw fa-palette" />
        <span>Category</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/subcategory">
        <i className="fas fa-fw fa-palette" />
        <span>Subcategory</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/property">
        <i className="fas fa-fw fa-palette" />
        <span>property</span>
      </Link>
      
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/display">
        <i className="fas fa-fw fa-palette" />
        <span>Display</span>
      </Link>
      
    </li>
    
    <li className="nav-item">
      <Link className="nav-link" to="/size">
        <i className="fas fa-fw fa-palette" />
        <span>Size</span>
      </Link>
      
    </li>
    <hr className="sidebar-divider" />
    <div className="sidebar-heading">Examples</div>
    <li className="nav-item">
      <a
        className="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapsePage"
        aria-expanded="true"
        aria-controls="collapsePage"
      >
        <i className="fas fa-fw fa-columns" />
        <span>Pages</span>
      </a>
      <div
        id="collapsePage"
        className="collapse"
        aria-labelledby="headingPage"
        data-parent="#accordionSidebar"
      >
        <div className="bg-white py-2 collapse-inner rounded">
          <h6 className="collapse-header">Example Pages</h6>
          <Link className="collapse-item" to="/login">
            Login
          </Link>
          <Link className="collapse-item" to="/register">
            Register
          </Link>
                  </div>
      </div>
    </li>
    
    <hr className="sidebar-divider" />
    <div className="version" id="version-ruangadmin" />
  </ul>
  {/* Sidebar */}
    </div>
  )
}
