import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/DefaultLayout/Header";

const Register = () => {
  return (
    <>
      <Header registerLogin={false} className="authNavBar" />
      <div
        className="register-login-div d-flex flex-column"
        style={{ minHeight: "100vh" }}
      >
        <div className="flex-grow-1 d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="login-sign-up-sec">
              <div className="row justify-content-center">
                <div className="col-xxl-4 col-lg-5 col-md-7 col-sm-9">
                  <div className="contactForm-form">
                    <h3 className="text-center">Signup</h3>
                    <form>
                      <div className="contactForm-form-input-fields">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Create Password"
                        />
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password"
                        />
                        <button className="btn">Sign UP</button>
                        <p>
                          Already have an account?{" "}
                          <Link to={"/login"} className="colorBlue">
                            Login
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
