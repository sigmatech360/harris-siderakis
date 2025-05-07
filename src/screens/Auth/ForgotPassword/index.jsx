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
import OtpInput from "react-otp-input";
import Countdown from "react-countdown";

const renderer = ({ minutes, seconds }) => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <div
        className="d-flex align-items-center border px-2 py-1 rounded text-center"
        style={{ maxWidth: 100 }}
      >
        <div
          className="d-flex flex-column align-items-center justify-content-center me-1"
          style={{ height: 28, width: 28 }}
        >
          <div style={{ fontWeight: 800, fontSize: 14, lineHeight: 1 }}>
            {minutes}
          </div>
          <div style={{ fontSize: 8, fontWeight: 400, lineHeight: 1 }}>MIN</div>
        </div>
        <div className="text-white mx-1">:</div>
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ height: 28, width: 28 }}
        >
          <div style={{ fontWeight: 800, fontSize: 14, lineHeight: 1 }}>
            {seconds}
          </div>
          <div style={{ fontSize: 8, fontWeight: 400, lineHeight: 1 }}>SEC</div>
        </div>
      </div>
    </div>
  );
};

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [steps, setSteps] = useState("forgot-password");
  const [otp, setOtp] = useState("");
  const [complete, setComplete] = useState(false);
  const [countdownDate, setCountdownDate] = useState(Date.now() + 120000);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onOtpChange = (value) => {
    setOtp(value);
    formik.setFieldValue("otp",value)
    // setComplete(false); // Reset complete state
  };

  const ForgotSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter valid email").required("Email is required"),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    password_confirmation: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required'),

  });

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
      password: "",
      password_confirmation: ""
    },
    // validationSchema: ForgotSchema,

    onSubmit: async (values) => {
    //   try {
    //     if(steps == 'forgot-password'){
    //         const baseURL = `${import.meta.env.VITE_BASE_URL}`;
    //         const response = await axios.post(`${baseURL}/forgot-password`, values);
    //         const data = response.data;
    //         console.log("Success:", response.data);
    //         if (!data.status) {
    //             if (data.message == "User not found") {
    //                 toast.error("Invalid email");
    //                 formik.errors.email = "Invalid email";
    //                 return;
    //             }
    //         }
    //         toast.success('OTP sent to Email')
    //         setCountdownDate(Date.now() + 120000);
    //         setSteps("otp verification");
    //     }
    //     if(steps == "otp verification"){
    //         const baseURL = `${import.meta.env.VITE_BASE_URL}`;
    //         const response = await axios.post(`${baseURL}/otp-verification`, values);
    //         const data = response.data;
    //         console.log('otp verification response', data);
    //         toast.success('OTP Verified')
    //         setComplete(true);
    //         setSteps("reset password");
    //     }
    //     if(steps == "reset password"){
    //         // const baseURL = `${import.meta.env.VITE_BASE_URL}`;
    //         if(values.password !== values.password_confirmation){
    //             errors.password_confirmation = 'Passwords must match';
    //             return
    //         }
    //         const response = await axios.post(`${baseURL}/reset-password`, values);
    //         const data = response.data;
    //         console.log('reset password response', data);
    //         toast.success('Password reset complete')
    //         console.log('form values', values);
            

    //     }
    //   } catch (error) {
    //     console.error("Error:", error);
    //   } 
    try {
        const baseURL = `${import.meta.env.VITE_BASE_URL}`;
      
        if (steps === 'forgot-password') {
          const response = await axios.post(`${baseURL}/forgot-password`, values);
          const data = response.data;
      
          console.log("Forgot password response:", data);
      
          if (!data.status) {
            if (data.message === "User not found") {
              toast.error("Invalid email");
              formik.setErrors({ email: "Invalid email" });
              return;
            }
          }
      
          toast.success('OTP sent to Email');
          setCountdownDate(Date.now() + 120000);
          setSteps("otp verification");
          return;
        }
      
        if (steps === 'otp verification') {
          const response = await axios.post(`${baseURL}/otp-verification`, values);
          const data = response.data;
      
          console.log("OTP verification response:", data);
      
          if (!data.status) {
            toast.error("OTP verification failed");
            return;
          }
      
          toast.success('OTP Verified');
          setComplete(true);
          setSteps("reset password");
          return;
        }
      
        if (steps === 'reset password') {
          if (values.password !== values.password_confirmation) {
            formik.setErrors({ password_confirmation: 'Passwords must match' });
            return;
          }
      
          const response = await axios.post(`${baseURL}/reset-password`, values);
          const data = response.data;
      
          console.log("Reset password response:", data);
      
          if (!data.status) {
            toast.error(data.message || "Password reset failed");
            return;
          }
      
          toast.success('Password reset complete');
          console.log('Form values after reset:', values);
          return;
        }
      
      } catch (error) {
        console.error("Error:", error);
        toast.error("Something went wrong. Please try again.");
      }
      
    },
  });

  const resendOtp = async () => {
    // const baseURL = `${import.meta.env.VITE_BASE_URL}`;
    // const response = await axios.post(`${baseURL}/forgot-password`, values);
    // const data = response.data;
    console.log(values);
    
    setCountdownDate(Date.now() + 120000);
    setComplete(false);
  };

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
                <div className="col-xxl-4 col-lg-5 col-md-7 col-sm-9">
                  <div className="contactForm-form">
                    <h4 className="text-center text-primary mb-3 fw-bold">
                      Recover your Account
                    </h4>
                    {/* <p className="text-muted text-center mb-3">Recover your Account</p> */}
                    <FormikProvider value={formik}>
                      <Form
                        autoComplete="off"
                        noValidate
                        onSubmit={handleSubmit}
                      >
                        <div className="contactForm-form-input-fields">
                            {steps == "forgot-password" && (
                                <div className="mb-3">
                                    <label htmlFor="email" className="mb-2 text-muted">
                                    Type Email of your account
                                    </label>
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

                            )}
                          {steps == "otp verification" && (
                            <div>
                              <div className="otp-inputs">
                                <OtpInput
                                  value={otp}
                                  onChange={onOtpChange}
                                  numInputs={5}
                                  renderSeparator={<span>-</span>}
                                  renderInput={(props) => <input {...props} />}
                                  shouldAutoFocus
                                />
                              </div>
                              {complete ? (
                                <p
                                  className="text-primary c-pointer text-end mt-2"
                                  onClick={resendOtp}
                                >
                                  Resend OTP
                                </p>
                              ) : (
                                <Countdown
                                  date={countdownDate}
                                  renderer={renderer}
                                  onComplete={() => setComplete(true)}
                                />
                              )}
                              {/* <button className="btn btn-primary w-100">Verify</button> */}
                            </div>
                           )} 
                           {steps == "reset password" && (
                            <>
                                <label htmlFor="" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control mb-3"
                                    placeholder="Password"
                                    id="password"
                                    {...getFieldProps("password")}
                                    required
                                />
                                <label htmlFor="" className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control mb-3"
                                    placeholder="Confirm Password"
                                    id="password_confirmation"
                                    {...getFieldProps("password_confirmation")}
                                />
                            </>
                            
                           )}

                          <button type="submit" className="btn w-100">
                            Next
                          </button>
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

export default ForgotPassword;
