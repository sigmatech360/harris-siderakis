import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Layout/Header";
import { Form, FormikProvider, useFormik } from "formik";
import axios from "axios";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    // validationSchema: LoginSchema,

    onSubmit: async (values) => {
      try {
        const baseURL = `${import.meta.env.VITE_BASE_URL}`;
        const response = await axios.post(`${baseURL}/user-login`, values);
        console.log('Success:', response.data);
        localStorage.setItem('token', response.data.data.token)
        toast.success(response.data.message)
        resetForm();
        navigate('/')
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setSubmitting(false);
      }
      // const { email, password } = values;
      //   setloading(true);
      //   console.log("values", values);
      // // mutate({ email, password });
    },
  });
  const { errors, touched, values, handleSubmit, resetForm , getFieldProps } = formik;
  return (
    <>
      <Header registerLogin={false} className="authNavBar" />
      <div
        className="register-login-div  d-flex flex-column"
        style={{ minHeight: "100vh" }}
      >
        <div className="flex-grow-1 d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="login-sign-up-sec">
              <div className="row justify-content-center">
                <div className="col-xxl-4 col-lg-5 col-md-7 col-sm-9">
                  <div className="contactForm-form">
                    <h3 className="text-center">Login</h3>
                    <p className="text-muted text-center mb-3">Login into your Account</p>
                    <FormikProvider value={formik}>
                      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                        <div className="contactForm-form-input-fields">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            id="email"
                            {...getFieldProps("email")}
                            error={Boolean(touched.email && errors.email)}
                            helperText={touched.email && errors.email}
                            required
                          />
                          {/* <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            id="password"
                            {...getFieldProps("password")}
                            error={Boolean(touched.email && errors.email)}
                            helperText={touched.email && errors.email}
                            required
                          /> */}
                          <div className="input-group field mb-4">
                              <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="Password"
                                defaultValue="123456"
                                id="password"
                              {...getFieldProps("password")}
                              error={Boolean(touched.password && errors.password)}
                              helperText={touched.password && errors.password}
                                required
                              />
                              <div
                                className="input-group-text border-start bg-gray-2 c-pointer"
                                data-bs-toggle="tooltip"
                                title="Show/Hide Password"
                                onClick={() => setShowPassword((prev) => !prev)}
                              >
                                {showPassword ? 
                                <FiEye size={16} />
                                :
                                <FiEyeOff size={16} />
                                }
                              </div>
                            </div>
                          <button type="submit" className="btn">Login</button>
                          <p>
                            Don't have an account?{" "}
                            <Link to={"/register"} className="colorBlue">
                              Register
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

export default Login;
