import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../components/Layout/Header";
import { Form, FormikProvider, useFormik } from "formik";
import axios from "axios";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";
import { useDispatch } from "../../../store";
import { setLogin } from "../../../store/slices/user";
import * as Yup from "yup";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    remember: Yup.boolean(),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,

    onSubmit: async (values) => {
      try {
        const baseURL = `${import.meta.env.VITE_BASE_URL}`;
        const response = await axios.post(`${baseURL}/user-login`, values);
        const data = response.data;
        const token = data?.data?.token;
        console.log("Success:", response?.data);
        // console.log("token:", token);
        if (data.status) {
          const userResponse = await axios.get(`${baseURL}/edit-profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (userResponse.status) {
            const user = userResponse.data;
            dispatch(setLogin({ token: data.data.token, user: user.data }));
          }
          toast.success(response.data.message);
          navigate("/");
        }
        else{
          toast.error('Invalid Email or Password');
          setLoginError('Invalid Email or Password');
          
        }
        // localStorage.setItem('token', response.data.data.token);
        resetForm();
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });
  const { errors, touched, values, handleSubmit, resetForm, getFieldProps } =
    formik;
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
                <div className="col-lg-5 col-md-7 col-sm-9">
                  <div className="contactForm-form">
                    <h3 className="text-center">Login</h3>
                    <p className="text-muted text-center mb-3">
                      Login into your Account
                    </p>
                    {loginError && (
                      <div className="text-danger text-center mb-3">
                        {loginError}
                      </div>
                    )}
                    <FormikProvider value={formik}>
                      <Form
                        autoComplete="off"
                        noValidate
                        onSubmit={handleSubmit}
                      >
                        <div className="auth-forms">
                          <div className="mb-3">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email"
                              id="email"
                              {...getFieldProps("email")}
                            />
                            {errors.email && (
                              <div className="text-danger">{errors.email}</div>
                            )}
                          </div>
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
                          <div className="mb-5">
                            <div className="input-group field">
                              <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="Password"
                                defaultValue="123456"
                                id="password"
                                {...getFieldProps("password")}
                                error={Boolean(
                                  touched.password && errors.password
                                )}
                                helperText={touched.password && errors.password}
                                required
                              />
                              <div
                                className="input-group-text border-start bg-gray-2 c-pointer"
                                data-bs-toggle="tooltip"
                                title="Show/Hide Password"
                                onClick={() => setShowPassword((prev) => !prev)}
                              >
                                {showPassword ? (
                                  <FiEye size={16} />
                                ) : (
                                  <FiEyeOff size={16} />
                                )}
                              </div>
                            </div>
                            <div className="d-flex justify-content-end">
                              <Link className="fs-6" to={"/forgot-password"}>
                                Forgot Password?
                              </Link>
                            </div>
                            {errors.password && (
                              <div className="text-danger">
                                {errors.password}
                              </div>
                            )}
                          </div>
                          <button type="submit" className="btn w-100 mb-3">
                            Login
                          </button>
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
