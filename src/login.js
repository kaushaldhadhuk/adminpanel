import React from 'react'
import Footer from './footer'
// import Header from './header'
// import Script from './Script'
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";


export default function Login() {
  
    return (
    <>

    <div id="wrapper">
  
  
  <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
     
      {/* Container Fluid*/}
      <div className="container-login">
  <div className="row justify-content-center">
    <div className="col-xl-6 col-lg-12 col-md-9">
      <div className="card shadow-sm my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="login-form">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Login</h1>
                </div>
                <form className="user">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      placeholder="Enter Email Address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <div
                      className="custom-control custom-checkbox small"
                      style={{ lineHeight: "1.5rem" }}
                    >
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck"
                      >
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <a href="index.html" className="btn btn-primary btn-block">
                      Login
                    </a>
                  </div>
                  <hr />
                  <a href="index.html" className="btn btn-google btn-block">
                    <i className="fab fa-google fa-fw" /> Login with Google
                  </a>
                  <a href="index.html" className="btn btn-facebook btn-block">
                    <i className="fab fa-facebook-f fa-fw" /> Login with
                    Facebook
                  </a>
                </form>
                <hr />
                <div className="text-center">
                  <a className="font-weight-bold small" href="register.html">
                    Create an Account!
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

      {/*-Container Fluid*/}
    </div>
    <Footer />
  </div>
</div>
{/* <Script/> */}
    </>
  )

}
