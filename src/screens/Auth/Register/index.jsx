import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../components/Layout/Header";
import { useDispatch } from "../../../store";
import { Form, FormikProvider, useFormik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";
import * as Yup from "yup";

const Register = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm_password: false
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const RegisterSchema = Yup.object().shape({
    name: Yup.string().max(50, 'Too long!').required('First name is required'),
    email: Yup.string().email('Enter valid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  
    password_confirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
    remember: Yup.boolean()
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      remember: true,
    },
    validationSchema: RegisterSchema,

    onSubmit: async (values) => {
      try {
        console.log('submitted');
        
        const baseURL = `${import.meta.env.VITE_BASE_URL}`;
        const response = await axios.post(`${baseURL}/user-register`, values);
        console.log("Success:", response.data);
        const data = response.data;
        if(data.success){
          toast.success(response.data.message);
          resetForm();
          navigate("/login");

        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });
  const { errors, touched, values, handleSubmit, resetForm, getFieldProps } =
    formik;

    useEffect(() => {
      console.log("Errors:", formik.errors);
    }, [formik.errors]);

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
                    <FormikProvider value={formik}>
                      <Form
                        autoComplete="off"
                        noValidate
                        onSubmit={handleSubmit}
                      >
                        <div className="contactForm-form-input-fields">
                          <div className="mb-3">
                            <input
                              type="name"
                              className="form-control"
                              placeholder="Name"
                              id="name"
                              {...getFieldProps("name")}
                              
                            />
                            {errors.name && (
                              <div className="text-danger">{errors.name}</div>
                            )}

                          </div>
                          <div className="mb-3">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email"
                              id="email"
                              {...getFieldProps("email")}
                              // error={Boolean(touched.email && errors.email)}
                              // helperText={touched.email && errors.email}
                              required
                            />
                            {errors.email && (
                              <div className="text-danger">{errors.email}</div>
                            )}

                          </div>
                          {/* <input
                            type="password"
                            className="form-control"
                            placeholder="Create Password"
                          /> */}
                          <div className="mb-3">
                            <div className="input-group field">
                              <input
                                type={showPassword.password ? "text" : "password"}
                                className="form-control"
                                placeholder="Password"
                                defaultValue="123456"
                                id="password"
                                {...getFieldProps("password")}
                                // error={Boolean(
                                //   touched.password && errors.password
                                // )}
                                // helperText={touched.password && errors.password}
                                required
                              />
                              <div
                                className="input-group-text border-start bg-gray-2 c-pointer"
                                data-bs-toggle="tooltip"
                                title="Show/Hide Password"
                                onClick={() =>
                                  setShowPassword(prev => ({
                                    ...prev,
                                    password: !prev.password
                                  }))
                                }
                              >
                                {showPassword ? (
                                  <FiEye size={16} />
                                ) : (
                                  <FiEyeOff size={16} />
                                )}
                              </div>
                            </div>
                            {formik.errors.password && (
                              <div className="text-danger">{formik.errors.password}</div>
                            )}

                          </div>
                          <div className="mb-5">
                            <div className="input-group field">
                              <input
                                type={showPassword.confirm_password ? "text" : "password"}
                                className="form-control"
                                placeholder="Confirm Password"
                                defaultValue="123456"
                                id="password_confirmation"
                                {...getFieldProps("password_confirmation")}
                                error={Boolean(
                                  touched.password_confirmation && errors.password_confirmation
                                )}
                                helperText={touched.password_confirmation && errors.password_confirmation}
                                required
                              />
                              <div
                                className="input-group-text border-start bg-gray-2 c-pointer"
                                data-bs-toggle="tooltip"
                                title="Show/Hide Password"
                                onClick={() =>
                                  setShowPassword(prev => ({
                                    ...prev,
                                    confirm_password: !prev.confirm_password
                                  }))
                                }
                              >
                                {showPassword ? (
                                  <FiEye size={16} />
                                ) : (
                                  <FiEyeOff size={16} />
                                )}
                              </div>
                            </div>
                            {formik.errors.password_confirmation && (
                              <div className="text-danger ">{formik.errors.password_confirmation}</div>
                            )}

                          </div>

                          {/* <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                          /> */}
                          <button type="submit" className="btn w-100 mb-3">Signup</button>
                          <p>
                            Already have an account?{" "}
                            <Link to={"/login"} className="colorBlue">
                              Login
                            </Link>
                          </p>
                        </div>
                      </Form>
                    </FormikProvider>
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
