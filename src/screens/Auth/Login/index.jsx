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
import { signInWithPopup } from "firebase/auth";
import { auth, facebookProvider, googleProvider } from "../../../firebase";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import useFirebaseMessaging from "../../../useFirebaseMessaging";
import { requestPermission } from "../../../permissionRequest";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
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

  const baseURL = `${import.meta.env.VITE_BASE_URL}`;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      // remember: true,
    },
    validationSchema: LoginSchema,

    onSubmit: async (values) => {
      let messagingData = await requestPermission();
      console.log('messagingData',messagingData);
      let payLoad = {...values, ...messagingData }
      console.log('payload', payLoad);
      
      
      try {
        const response = await axios.post(`${baseURL}/user-login`, payLoad);
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
          
        } else {
          toast.error("Invalid Email or Password");
          setLoginError("Invalid Email or Password");
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

  // const handleGoogleLogin = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, googleProvider);
  //     const user = result.user;
  //     console.log("Google User:", user);
  //   } catch (error) {
  //     console.error("Google Login Error", error);
  //   }
  // };
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // 🔥 Get Firebase ID Token (JWT)
      const token = await user.getIdToken();
      const response = await axios.post(`${baseURL}/social-login`, {
        token: token,
        provider: "google.com",
      });

      const data = await response.data;
      console.log(" Response data:", data);
      if (data.status) {
        dispatch(setLogin({ token: data.token, user: data.user }));

        toast.success(data.message);
        navigate("/");
      }
    } catch (error) {
      console.error("Facebook Login Error", error.response?.data || error.message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;

      const token = await user.getIdToken();
      const response = await axios.post(`${baseURL}/social-login`, {
        token: token,
        provider: "facebook.com",
      });
      const data = await response.data;
      console.log(" Response data:", data);
      if (data.status) {
        dispatch(setLogin({ token: data.token, user: data.user }));

        toast.success(data.message);
        navigate("/");
      }
    } catch (error) {
      console.error("Facebook Login Error", error.response?.data || error.message);
    }
  };

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
                            {touched.email && errors.email && (
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
                            {touched.password && errors.password && (
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
                    <hr />
                    <div className="social-login-container d-flex flex-column align-items-center mt-3 gap-3">
                      <button
                        type="button"
                        className="btn btn-light d-flex align-items-center justify-content-center border"
                        onClick={handleGoogleLogin}
                        style={{ height: "45px" }}
                      >
                        <FcGoogle size={22} className="me-2" />
                        <span>Login with Google</span>
                      </button>
                      <button
                        type="button"
                        className="btn  d-flex align-items-center justify-content-center"
                        onClick={handleFacebookLogin}
                        style={{
                          height: "45px",
                          borderColor: "#1877F2",
                        }}
                      >
                        <FaFacebookF size={20} className="me-2" />
                        <span>Login with Facebook</span>
                      </button>
                    </div>
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
