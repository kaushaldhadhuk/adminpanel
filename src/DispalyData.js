import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component"
import Header from './header'
import Footer from './footer'
import Script from './Script'
import { getProducts } from './Api/common.api'

export default function DispalyData() {
const [productList,setProductList]= useState([]);

const ProductListFunction = async() =>{
    const response = await getProducts();
    setProductList(response);
    console.log(response,"aaaa");
} 

const columns = [
{name:"Category",selector:row=>row.c_id.c_name},
{name:"Subcategory",selector:row=>row.s_c_id.s_c_name},
{name:"rent",selector:row=>row.rent},
{name:"city",selector:row =>row.city},
{name:"p_desc",selector:row =>row.p_desc},
{name:"p_age",selector:row =>row.p_age},
{name:"bedroom",selector:row =>row.bedroom},
{name:"bathroom",selector:row =>row.bathroom},
{name:"p_floor",selector:row =>row.p_floor},
{name:"o_mono",selector:row =>row.o_mono},
{name:"balcony",selector:row =>row.balcony},
{name:"deposit",selector:row =>row.deposit},
{name:"agreement",selector:row =>row.agreement},


]

useEffect(()=>{
    ProductListFunction();
},[])

const ExpendableRow = ({data})=>{
    return(
        <>
        <div className="expandstyle"><p><b>Description</b>:{data}</p></div>
        </>
    )
}


  return (
    <div>
      <>
    <div id="wrapper">
  <Header />
  <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
      {/* TopBar */}
      <nav className="navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top">
        <button
          id="sidebarToggleTop"
          className="btn btn-link rounded-circle mr-3"
        >
          <i className="fa fa-bars" />
        </button>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-search fa-fw" />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form className="navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-1 small"
                    placeholder="What do you want to look for?"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    style={{ borderColor: "#3f51b5" }}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-bell fa-fw" />
              <span className="badge badge-danger badge-counter">3+</span>
            </a>
            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="alertsDropdown"
            >
              <h6 className="dropdown-header">Alerts Center</h6>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-primary">
                    <i className="fas fa-file-alt text-white" />
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 12, 2019</div>
                  <span className="font-weight-bold">
                    A new monthly report is ready to download!
                  </span>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-success">
                    <i className="fas fa-donate text-white" />
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 7, 2019</div>
                  $290.29 has been deposited into your account!
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-warning">
                    <i className="fas fa-exclamation-triangle text-white" />
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 2, 2019</div>
                  Spending Alert: We've noticed unusually high spending for your
                  account.
                </div>
              </a>
              <a
                className="dropdown-item text-center small text-gray-500"
                href="#"
              >
                Show All Alerts
              </a>
            </div>
          </li>
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-envelope fa-fw" />
              <span className="badge badge-warning badge-counter">2</span>
            </a>
            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="messagesDropdown"
            >
              <h6 className="dropdown-header">Message Center</h6>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="img/man.png"
                    style={{ maxWidth: 60 }}
                    alt=""
                  />
                  <div className="status-indicator bg-success" />
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">
                    Hi there! I am wondering if you can help me with a problem
                    I've been having.
                  </div>
                  <div className="small text-gray-500">Udin Cilok · 58m</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="img/girl.png"
                    style={{ maxWidth: 60 }}
                    alt=""
                  />
                  <div className="status-indicator bg-default" />
                </div>
                <div>
                  <div className="text-truncate">
                    Am I a good boy? The reason I ask is because someone told me
                    that people say this to all dogs, even if they aren't
                    good...
                  </div>
                  <div className="small text-gray-500">Jaenab · 2w</div>
                </div>
              </a>
              <a
                className="dropdown-item text-center small text-gray-500"
                href="#"
              >
                Read More Messages
              </a>
            </div>
          </li>
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-tasks fa-fw" />
              <span className="badge badge-success badge-counter">3</span>
            </a>
            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="messagesDropdown"
            >
              <h6 className="dropdown-header">Task</h6>
              <a className="dropdown-item align-items-center" href="#">
                <div className="mb-3">
                  <div className="small text-gray-500">
                    Design Button
                    <div className="small float-right">
                      <b>50%</b>
                    </div>
                  </div>
                  <div className="progress" style={{ height: 12 }}>
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </a>
              <a className="dropdown-item align-items-center" href="#">
                <div className="mb-3">
                  <div className="small text-gray-500">
                    Make Beautiful Transitions
                    <div className="small float-right">
                      <b>30%</b>
                    </div>
                  </div>
                  <div className="progress" style={{ height: 12 }}>
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "30%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </a>
              <a className="dropdown-item align-items-center" href="#">
                <div className="mb-3">
                  <div className="small text-gray-500">
                    Create Pie Chart
                    <div className="small float-right">
                      <b>75%</b>
                    </div>
                  </div>
                  <div className="progress" style={{ height: 12 }}>
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </a>
              <a
                className="dropdown-item text-center small text-gray-500"
                href="#"
              >
                View All Taks
              </a>
            </div>
          </li>
          <div className="topbar-divider d-none d-sm-block" />
          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="img-profile rounded-circle"
                src="img/boy.png"
                style={{ maxWidth: 60 }}
              />
              <span className="ml-2 d-none d-lg-inline text-white small">
                Maman Ketoprak
              </span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <a className="dropdown-item" href="#">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                Profile
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                Settings
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                Activity Log
              </a>
              <div className="dropdown-divider" />
              <a
                className="dropdown-item"
                href="javascript:void(0);"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
      {/* Topbar */}
      <>
  {/* Container Fluid*/}
  <div className="container-fluid" id="container-wrapper">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">DataTables</h1>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="./">Home</a>
        </li>
        <li className="breadcrumb-item">Tables</li>
        <li className="breadcrumb-item active" aria-current="page">
          DataTables
        </li>
      </ol>
    </div>
    {/* Row */}
    <div className="row">
      {/* Datatables */}
      <div className="col-lg-12">
     <DataTable
     title="Products-List"
     data={productList}
     columns={columns}/>
      </div>
      {/* DataTable with Hover */}
      
    </div>
    {/*Row*/}
    {/* Documentation Link */}
    <div className="row">
      <div className="col-lg-12">
        <p>
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the
          official{" "}
          <a href="https://datatables.net/" target="_blank">
            DataTables documentation.
          </a>
        </p>
      </div>
    </div>
    {/* Modal Logout */}
    <div
      className="modal fade"
      id="logoutModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabelLogout"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabelLogout">
              Ohh No!
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to logout?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-primary"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <a href="login.html" className="btn btn-primary">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*-Container Fluid*/}
</>

    
    </div>
    <Footer />
  </div>
</div>
<Script/>
    </>
    </div>
  )
}
