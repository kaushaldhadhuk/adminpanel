import React from 'react'
import Footer from './footer'
import Header from './header'
import Script from './Script'

export default function Home() {
  return (
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
      {/* Container Fluid*/}
      <div className="container-fluid" id="container-wrapper">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="./">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </div>
        <div className="row mb-3">
          {/* Earnings (Monthly) Card Example */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-uppercase mb-1">
                      Earnings (Monthly)
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      $40,000
                    </div>
                    <div className="mt-2 mb-0 text-muted text-xs">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>
                      <span>Since last month</span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-calendar fa-2x text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Earnings (Annual) Card Example */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-uppercase mb-1">
                      Sales
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      650
                    </div>
                    <div className="mt-2 mb-0 text-muted text-xs">
                      <span className="text-success mr-2">
                        <i className="fas fa-arrow-up" /> 12%
                      </span>
                      <span>Since last years</span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-shopping-cart fa-2x text-success" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* New User Card Example */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-uppercase mb-1">
                      New User
                    </div>
                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                      366
                    </div>
                    <div className="mt-2 mb-0 text-muted text-xs">
                      <span className="text-success mr-2">
                        <i className="fas fa-arrow-up" /> 20.4%
                      </span>
                      <span>Since last month</span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-users fa-2x text-info" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Pending Requests Card Example */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-uppercase mb-1">
                      Pending Requests
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      18
                    </div>
                    <div className="mt-2 mb-0 text-muted text-xs">
                      <span className="text-danger mr-2">
                        <i className="fas fa-arrow-down" /> 1.10%
                      </span>
                      <span>Since yesterday</span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-comments fa-2x text-warning" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pie Chart */}
          <div className="col-xl-4 col-lg-5">
            <div className="card mb-4">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">
                  Products Sold
                </h6>
                <div className="dropdown no-arrow">
                  <a
                    className="dropdown-toggle btn btn-primary btn-sm"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Month <i className="fas fa-chevron-down" />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <div className="dropdown-header">Select Periode</div>
                    <a className="dropdown-item" href="#">
                      Today
                    </a>
                    <a className="dropdown-item" href="#">
                      Week
                    </a>
                    <a className="dropdown-item active" href="#">
                      Month
                    </a>
                    <a className="dropdown-item" href="#">
                      This Year
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <div className="small text-gray-500">
                    Oblong T-Shirt
                    <div className="small float-right">
                      <b>600 of 800 Items</b>
                    </div>
                  </div>
                  <div className="progress" style={{ height: 12 }}>
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="small text-gray-500">
                    Gundam 90'Editions
                    <div className="small float-right">
                      <b>500 of 800 Items</b>
                    </div>
                  </div>
                  <div className="progress" style={{ height: 12 }}>
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="small text-gray-500">
                    Rounded Hat
                    <div className="small float-right">
                      <b>455 of 800 Items</b>
                    </div>
                  </div>
                  <div className="progress" style={{ height: 12 }}>
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "55%" }}
                      aria-valuenow={55}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="small text-gray-500">
                    Indomie Goreng
                    <div className="small float-right">
                      <b>400 of 800 Items</b>
                    </div>
                  </div>
                  <div className="progress" style={{ height: 12 }}>
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="small text-gray-500">
                    Remote Control Car Racing
                    <div className="small float-right">
                      <b>200 of 800 Items</b>
                    </div>
                  </div>
                  <div className="progress" style={{ height: 12 }}>
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "30%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer text-center">
                <a className="m-0 small text-primary card-link" href="#">
                  View More <i className="fas fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>
          {/* Invoice Example */}
          <div className="col-xl-8 col-lg-7 mb-4">
            <div className="card">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">Invoice</h6>
                <a className="m-0 float-right btn btn-danger btn-sm" href="#">
                  View More <i className="fas fa-chevron-right" />
                </a>
              </div>
              <div className="table-responsive">
                <table className="table align-items-center table-flush">
                  <thead className="thead-light">
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Item</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a href="#">RA0449</a>
                      </td>
                      <td>Udin Wayang</td>
                      <td>Nasi Padang</td>
                      <td>
                        <span className="badge badge-success">Delivered</span>
                      </td>
                      <td>
                        <a href="#" className="btn btn-sm btn-primary">
                          Detail
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">RA5324</a>
                      </td>
                      <td>Jaenab Bajigur</td>
                      <td>Gundam 90' Edition</td>
                      <td>
                        <span className="badge badge-warning">Shipping</span>
                      </td>
                      <td>
                        <a href="#" className="btn btn-sm btn-primary">
                          Detail
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">RA8568</a>
                      </td>
                      <td>Rivat Mahesa</td>
                      <td>Oblong T-Shirt</td>
                      <td>
                        <span className="badge badge-danger">Pending</span>
                      </td>
                      <td>
                        <a href="#" className="btn btn-sm btn-primary">
                          Detail
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">RA1453</a>
                      </td>
                      <td>Indri Junanda</td>
                      <td>Hat Rounded</td>
                      <td>
                        <span className="badge badge-info">Processing</span>
                      </td>
                      <td>
                        <a href="#" className="btn btn-sm btn-primary">
                          Detail
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">RA1998</a>
                      </td>
                      <td>Udin Cilok</td>
                      <td>Baby Powder</td>
                      <td>
                        <span className="badge badge-success">Delivered</span>
                      </td>
                      <td>
                        <a href="#" className="btn btn-sm btn-primary">
                          Detail
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card-footer" />
            </div>
          </div>
          {/* Message From Customer*/}
          <div className="col-xl-4 col-lg-5 ">
            <div className="card">
              <div className="card-header py-4 bg-primary d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-light">
                  Message From Customer
                </h6>
              </div>
              <div>
                <div className="customer-message align-items-center">
                  <a className="font-weight-bold" href="#">
                    <div className="text-truncate message-title">
                      Hi there! I am wondering if you can help me with a problem
                      I've been having.
                    </div>
                    <div className="small text-gray-500 message-time font-weight-bold">
                      Udin Cilok · 58m
                    </div>
                  </a>
                </div>
                <div className="customer-message align-items-center">
                  <a href="#">
                    <div className="text-truncate message-title">
                      But I must explain to you how all this mistaken idea
                    </div>
                    <div className="small text-gray-500 message-time">
                      Nana Haminah · 58m
                    </div>
                  </a>
                </div>
                <div className="customer-message align-items-center">
                  <a className="font-weight-bold" href="#">
                    <div className="text-truncate message-title">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                    <div className="small text-gray-500 message-time font-weight-bold">
                      Jajang Cincau · 25m
                    </div>
                  </a>
                </div>
                <div className="customer-message align-items-center">
                  <a className="font-weight-bold" href="#">
                    <div className="text-truncate message-title">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis
                    </div>
                    <div className="small text-gray-500 message-time font-weight-bold">
                      Udin Wayang · 54m
                    </div>
                  </a>
                </div>
                <div className="card-footer text-center">
                  <a className="m-0 small text-primary card-link" href="#">
                    View More <i className="fas fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Row*/}
        <div className="row">
          <div className="col-lg-12 text-center">
            <p>
              Do you like this template ? you can download from{" "}
              <a
                href="https://github.com/indrijunanda/RuangAdmin"
                className="btn btn-primary btn-sm"
                target="_blank"
              >
                <i className="fab fa-fw fa-github" />
                &nbsp;GitHub
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
    </div>
    <Footer />
  </div>
</div>
<Script/>
    </>
  )
}
