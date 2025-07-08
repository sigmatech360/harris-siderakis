import React, { useState } from "react";
import DashboardLayout from "../../../components/Layout/DashboardLayout";
import { Form, FormikProvider, useFormik } from "formik";
import axios from "axios";
import { useDispatch, useSelector } from "../../../store";
import { setLogin } from "../../../store/slices/user";
import './style.css'
import { FaCamera } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(({ user }) => user);
  const [previewImage, setPreviewImage] = useState(null);



  const handleImageChange = (e, setFieldValue) => {
    const file = e.currentTarget.files[0];
    if (file) {
      setFieldValue("image", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        
      };
      reader.readAsDataURL(file);
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: user?.name || "",
      phone: user?.phone || "",
      zip_code: user?.zip_code || "",
      city: user?.city || "",
      remember: true,
    },
    // validationSchema: LoginSchema,

    onSubmit: async (values) => {
      try {
        const token = localStorage.getItem('token');
        const baseURL = `${import.meta.env.VITE_BASE_URL}`;

        const formDataMethod = new FormData();

        for (const key in values) {
            if(key == 'zip_code'){
                // setFormData((prev)=>({...prev, [key]:''}))
                formDataMethod.append(key, 'test');
            }else{

                formDataMethod.append(key, values[key]);
            }
            
        }

        const response = await axios.post(`${baseURL}/update-profile`, formDataMethod,{
            headers: {
              "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
              },
        });
        const data = response.data;
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
            dispatch(setLogin({ token: token, user: user.data }));
          }
          toast.success(response.data.message);
          navigate("/dashboard/profile");
        } else {
          if (response.data.message == "Unauthorized User!") {
            toast.error("Invalid Email or Password");
          }
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
  const { errors, touched, values, handleSubmit, resetForm, setFieldValue, getFieldProps } =
    formik;
  return (
    <DashboardLayout>
      <div className="main-content">
        <h5>Edit Profile</h5>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <div className="row auth-forms">
              <div className="col-8">
                {/* <div className="row">
                    <div className="col-4 my-4">
                        <label
                        htmlFor="profileImage" 
                        className="profileImage w-100">
                        {user?.image || previewImage  ? (
                            <img
                                    src={
                                    previewImage ||
                                    `${import.meta.env.VITE_BASE_IMAGE_URL}/${
                                        user?.image
                                    }`
                                    }
                                    className="img-fluid mt-2 w-100"
                                    alt="User Image"
                                />
                        )
                        :(
                            <FiUser size={16} className="rounded-circle border border-5-gray h-100 w-100" />
                        )
                        }
                        <input
                            type="file"
                            accept="img/*"
                            className="d-none"
                            id="profileImage"
                            onChange={(e) => handleImageChange(e, setFieldValue)}
                        />
                        <div className="position-absolute bottom-0  h-50 w-100 hstack align-items-center justify-content-center c-pointer upload-button">
                          <i aria-hidden="true" className="camera-icon">
                            <FaCamera size={16} />
                          </i>
                        </div>
                        </label>
                    </div>

                </div> */}
                <div className="row">
                    {/* Name */}
                    <div className="mb-3 col-6">
                    <input
                        type="string"
                        className="form-control"
                        placeholder="Name"
                        id="name"
                        {...getFieldProps("name")}
                    />
                    {errors.name && (
                        <div className="text-danger">{errors.name}</div>
                    )}
                    </div>
                    {/* Phone */}
                    <div className="mb-3 col-6">
                    <input
                        type="string"
                        className="form-control"
                        placeholder="Phone"
                        id="phone"
                        {...getFieldProps("phone")}
                    />
                    {errors.phone && (
                        <div className="text-danger">{errors.phone}</div>
                    )}
                    </div>
                    {/* City */}
                    <div className="mb-3 col-6">
                    <input
                        type="string"
                        className="form-control"
                        placeholder="City"
                        id="city"
                        {...getFieldProps("city")}
                    />
                    {errors.city && (
                        <div className="text-danger">{errors.city}</div>
                    )}
                    </div>
                    {/* Zip code */}
                    <div className="mb-3 col-6">
                    <input
                        type="string"
                        className="form-control"
                        placeholder="Zip Code"
                        id="zip_code"
                        {...getFieldProps("zip_code")}
                    />
                    {errors.zip_code && (
                        <div className="text-danger">{errors.zip_code}</div>
                    )}
                    </div>

                    <div className="d-flex ">
                        <button className="btn">Update</button>
                    </div>

                </div>
              </div>
            </div>
          </Form>
        </FormikProvider>
      </div>
    </DashboardLayout>
  );
};

export default EditProfile;
