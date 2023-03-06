import React , {useState,useEffect} from 'react'
import Select from "react-select";
import {
insertproperty,
getCategory,
  getSize,
  getSubCategory,
} from "./Api/common.api";
import Footer from './footer'
import Header from './header'
import Script from './Script'


export default function Property() {

    const [propertyData, setPropertyData] = useState();
  const [categoryList, setCategoryList] = useState([]);
  const [subcategoryList, setSubCategoryList] = useState([]);
  const [sizeList, setSizeList] = useState([]);

  const onHandleChange = (e) => {
    console.log(propertyData, "propertyData");
    setPropertyData({ ...propertyData, [e.target.name]: e.target.value });
  };
  const getCategoryListFunction = async () => {
    const response = await getCategory();
    console.log(response);
    let cat_list = [];
    response?.map((list) => {
      cat_list.push({ value: list._id, label: list.c_name });
    });
    setCategoryList(cat_list);
    console.log(cat_list, "catagory called");

    console.log(response, "response called");
  };
  const getsubCatagoryListFunction = async (c_id) => {
    console.log(c_id, "aaaaa");
    const response = await getSubCategory(c_id);
    console.log(response, "subcatagory called");

    let sub_cat_list = [];
    response?.map((list) => {
      sub_cat_list.push({ value: list._id, label: list.s_c_name });
    });

    setSubCategoryList(sub_cat_list);
    console.log(sub_cat_list, "called");
  };
  const getSizeFunction = async () => {
    const response = await getSize();
    console.log(response, "Size fetched");
    let sizes = [];
    response?.map((size) => {
      sizes.push({ value: size._id, label: size.size_name });
    });
    setSizeList(sizes);
  };

  const handleSubmit = async () => {
    console.log(propertyData, "data submitted");

    const formData = new FormData();
    console.log(propertyData.p_media,"aaaaaaaaa");
    for (let keys of Object.keys(propertyData.p_media)) {

      formData.append("p_media", propertyData.p_media[keys]);
    }


    formData.append("c_id", propertyData.c_id);
    formData.append("s_c_id", propertyData.s_c_id);
    formData.append("city", propertyData.city);
    formData.append("rent", propertyData.rent);
    formData.append("p_desc", propertyData.p_desc);
    formData.append("p_age", propertyData.p_age); 
    formData.append("size_id", propertyData.size_id);
    formData.append("bedroom", propertyData.bedroom);
    formData.append("bathroom", propertyData.bathroom);
    formData.append("p_floor", propertyData.p_floor);
    formData.append("o_mono", propertyData.o_mono);
    formData.append("balcony", propertyData.balcony);
    formData.append("deposit", propertyData.deposit);
    formData.append("agreement", propertyData.agreement);


    const response = await insertproperty(formData);

    console.log(response, "response");
  };

  useEffect(() => {
    console.log("called useeffect");
    getCategoryListFunction();
    getSizeFunction();

  }, []);

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
       
      <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link href="img/logo/logo.png" rel="icon" />
        <title>RuangAdmin - Register</title>
        <link
          href="vendor/fontawesome-free/css/all.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="css/ruang-admin.min.css" rel="stylesheet" />
        {/* Register Content */}
        <div className="container-login">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-12 col-md-9">
              <div className="card shadow-sm my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="login-form">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">Register</h1>
                        </div>

                        <form>
                          <label htmlFor="exampleInputEmail1">property</label>{" "}
                          <br />
                          <Select onChange={(e) => {
                            setPropertyData({
                              ...propertyData,
                              c_id: e.value,
                            });
                            getsubCatagoryListFunction(e.value);
                          }}
                            options={categoryList}
                            />
                      
                          <label htmlFor="exampleInputEmail1">
                            Select Breed
                          </label>{" "}
                          <br />
                          <Select    onChange={(e) => {
                            setPropertyData({
                              ...propertyData,
                              s_c_id: e.value,
                            });  
                          }}
                            options={subcategoryList}                  />
                      
                          
                      <div className="form-group">
                            <label> city :</label>
                            <input
                              type="text"
                              name="city"
                              className="form-control"
                              id="exampleInputFirstName"
                              placeholder="Enter city"
                              onChange={(e) => {
                                onHandleChange(e);
                              }}
                            />
                          </div>
                          <div className="form-group">
                            <label> rent :</label>
                            <input
                              type="number"
                              name="rent"
                              className="form-control"
                              id="exampleInputFirstName"
                              placeholder="Enter rent"
                              onChange={(e) => {
                                onHandleChange(e);
                              }}
                            />
                          </div>

                          <label htmlFor="exampleInputEmail1"> Property Size</label>{" "}
                          <br />
                          <Select onChange={(e) => {
                            setPropertyData({
                              ...propertyData,
                              size_id: e.value,
                            });
                            
                          }}
                          options={sizeList}
                          
                            />
                      
                          {/* <div className="form-group">
                            <label> property size :</label>
                            <input
                              type="number"
                              name="price"
                              className="form-control"
                              id="exampleInputFirstName"
                              placeholder="Enter size"
                              onChange={(e) => {
                                setPropertyData({
                                  ...propertyData,
                                  size_id: e.value,
                                });  
                              }}
                            />
                          </div>
                           */}
                          <div className="form-group">
                            <label> Age Of Property :</label>
                            <input
                              type="number"
                              name="p_age"
                              className="form-control"
                              id="exampleInputFirstName"
                              placeholder="Enter age"
                              onChange={(e) => {
                                onHandleChange(e);
                              }}
                            />
                          </div>
                         
                          <div className="form-group">
                            <label>property Description</label>

                            <textarea
                              name="p_desc"
                              className="form-control"
                              id="exampleInputLastName"
                              placeholder="Enter property Description"
                              cols="30"
                              rows="5"
                              onChange={(e) => {
                                onHandleChange(e);
                              }}
                            ></textarea>
                          </div>
                          {/* <fieldset className="form-group">
                            <div className="row">
                              <legend className="col-form-label col-sm-3 pt-0">
                                Age Of Proprty :
                              </legend>
                              <div className="col-sm-9">
                                <div className="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    id="customRadio1"
                                    name="customRadio"
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="customRadio1"
                                  >
                                   0-10 year
                                  </label>
                                </div>
                                <div className="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    id="customRadio2"
                                    name="customRadio"
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="customRadio2"
                                  >
                                   10+ year
                                  </label>
                                </div>
                                
                              </div>
                            </div>
                          </fieldset> */}



                          <div className="form-group">
                            <label>No Of Bedroom</label>
                            <input
                              type="number"
                              name='bedroom'
                              className="form-control"
                              id="exampleInputPassword"
                              placeholder=" Enter No Of Bedroom"
                              onChange={(e) => {
                                onHandleChange(e);
                              }}
                            />
                          </div>
                          <div className="form-group">
                            <label>No Of Bathroom</label>
                            <input
                              type="number"
                              name='bathroom'
                              className="form-control"
                              id="exampleInputPassword"
                              placeholder=" Enter No Of Bathroom"
                              onChange={(e) => {
                                onHandleChange(e);
                              }}
                            />
                          </div>
                          <div className="form-group">
                            <label>Property Floor</label>
                            <input
                              type="number"
                              name='p_floor'
                              className="form-control"
                              id="exampleInputPassword"
                              placeholder=" Enter Property Floor"
                              onChange={(e) => {
                                onHandleChange(e);
                              }}
                            />
                          </div>



                       

                          {/* <fieldset className="form-group">
                            <div className="row">
                              <legend className="col-form-label col-sm-3 pt-0">
                                Furnishing :
                              </legend>
                              <div className="col-sm-9">
                                <div className="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    id="customRadio1"
                                    name="customRadio"
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="customRadio1"
                                  >
                                   Furnished
                                  </label>
                                </div>
                                <div className="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    id="customRadio2"
                                    name="customRadio"
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="customRadio2"
                                  >
                                   Unfurnished
                                  </label>
                                </div>
                              </div>
                            </div>
                          </fieldset> */}

                            {/* <div className="form-group">
                            <label> Furnishing :</label>
                            <input
                              type="number"
                              name="price"
                              className="form-control"
                              id="exampleInputFirstName"
                              placeholder=""
                              onChange={(e) => {
                                onHandleChange(e);
                              }}
                            />
                          </div> */}
                         



                          <div className="form-group">
                            <label> owner Mobile Number :</label>
                            <input
                              type="number"
                              name='o_mono'
                              className="form-control"
                              id="exampleInputPasswordRepeat"
                              placeholder="Enter Mobile Number"
                              onChange={(e) => {
                                onHandleChange(e);
                              }}
                            />
                          </div><br />

                          <div className="form-group">
                            <label> No Of Balcony :</label>
                            <input
                              type="number"
                              name='balcony'
                              className="form-control"
                              id="exampleInputPasswordRepeat"
                              placeholder="Enter no of balcony"
                              onChange={(e) => {
                                onHandleChange(e);
                              }}
                            />
                          </div><br />
       



                          <div className="form-group">
                            <label> Add property Photo: </label>
                         <input type="file" className="form-control" id="customFile"

                          multiple
                          onChange={(e) => {
                            setPropertyData({
                              ...propertyData,
                              p_media: e.target.files,
                            });  
                          }}
                         />
                          </div>



                            <div className="form-group">
                            <label>Deposit : </label>
                            <input
                              type="number"
                              name='deposit'
                              className="form-control"
                              id="exampleInputPasswordRepeat"
                              placeholder="Deposit"
                              onChange={(e) => {
                                onHandleChange(e);
                              }}
                            />
                          </div>

                          <div className="form-group">
                            <label className="labels">Duration Of agreement : </label>
                            <input
                              type="number"
                              name='agreement'
                              className="form-control"
                              id="exampleInputPasswordRepeat"
                              placeholder="Duration Of agreement"
                              onChange={(e) => {
                                onHandleChange(e);
                              }}
                            />
                          </div><br />
                          
                         

                          <div className="form-group">
                            <button
                              type="button"
                              className="btn btn-lg btn-primary btn-block"
                              onClick={() => handleSubmit()}
                            >
                              Submit
                            </button>
                          </div>
                          <hr />
                          <a
                            href="index.html"
                            className="btn btn-google btn-block"
                          >
                            <i className="fab fa-google fa-fw" /> Register with
                            Google
                          </a>
                          <a
                            href="index.html"
                            className="btn btn-facebook btn-block"
                          >
                            <i className="fab fa-facebook-f fa-fw" /> Register
                            with Facebook
                          </a>
                        </form>
                        <hr />
                        <div className="text-center">
                          <a
                            className="font-weight-bold small"
                            href="login.html"
                          >
                            Already have an account?
                          </a>
                        </div>
                        <div className="text-center"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Register Content */}

      {/*-Container Fluid*/}
    </div>
    <Footer />
  </div>
</div>
<Script/>
    </>

  );
}

  

