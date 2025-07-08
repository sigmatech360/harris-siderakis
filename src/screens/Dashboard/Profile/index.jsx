import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../components/Layout/DashboardLayout";
import { useSelector } from "../../../store";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaPencil } from "react-icons/fa6";
import { MdDone } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

const Profile = () => {
  const { user } = useSelector(({ user }) => user);
  const [editName, setEditName] = useState(false);
  const [editPhone, setEditPhone] = useState(false);

  const [formData, setFormData] = useState({});
  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = event.target;

    let updatedValue = value;

    setFormData({ ...formData, [name]: updatedValue });
  };

  const applyChanges = () => {
    console.log("form ", formData);
  };

  const updateProfile = async () => {
    document.querySelector(".loaderBox").classList.remove("d-none");
    const baseUrl = `${import.meta.env.VITE_BASE_URL}`;
    const token = localStorage.getItem("token");
    const formDataMethod = new FormData();
    console.log("formdata", formData);

    // for (const key in formData) {
    //   if (key == "zip_code") {
    //     formDataMethod.append(key, "test");
    //   } else if (key === "image") {
    //     if (value instanceof File) {
    //       formDataMethod.append("profile_image", value);
    //     }
    //     // else skip appending image
    //   } else {
    //     formDataMethod.append(key, formData[key]);
    //   }
    // }
    for (const key in formData) {
      const value = formData[key];

      if (key === "zip_code") {
        formDataMethod.append(key, "test");
      } else if (key === "image") {
        if (value instanceof File) {
          formDataMethod.append("profile_image", value);
        }
        // else skip appending image
      } else {
        formDataMethod.append(key, value);
      }
    }
    try {
      console.log("token", token);

      const response = await axios.post(
        `${baseUrl}/update-profile`,
        formDataMethod,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data;
      if (data.status) {
        const userResponse = await axios.get(`${baseUrl}/edit-profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (userResponse.status) {
          const user = userResponse.data;
          dispatch(setLogin({ token: token, user: user.data }));
        }
        toast.success(response.data.message);
        document.querySelector(".loaderBox").classList.add("d-none");
        // navigate("/dashboard/profile");
      }

      // console.log("response", responseData);
      // if (responseData.status) {
      //   document.querySelector(".loaderBox").classList.add("d-none");
      //   toast.success("Profile Updated Successfully");
      //   const user = responseData.data;
      //   dispatch(setLogin({ token: token, user: user }));
      //   // navigate('/login');
      // }
    } catch (error) {
      document.querySelector(".loaderBox").classList.add("d-none");
      console.error("Error:", error);
    }
  };

  const handleProfileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file); // Generate a preview URL
      setFormData((prevData) => ({
        ...prevData,
        image: file, // Store the actual file for backend upload
        imageFile: previewURL, // Store the preview URL for immediate display
      }));
    }
  };
  return (
    <>
      <DashboardLayout>
        <div className="main-content">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 className=" fw-bold mb-3"> Profile Details</h4>
            <button
              onClick={updateProfile}
              className="btn btn-primary text-white border-0"
            >
              {/* <FaPencil size={16} className="me-2" /> */}
              Update
            </button>
          </div>
          <div className="row ">
            <div className="col-12">
              {/* <div className="row">
                <div className="col-4 my-4">
                  <div className="profileImage w-100">
                    {user?.image ? (
                      <img
                        src={
                          `${import.meta.env.VITE_BASE_IMAGE_URL}/${user?.image}`
                        }
                        className="img-fluid mt-2 w-100"
                        alt="User Image"
                      />
                    ) : (
                      <FiUser
                        size={16}
                        className="rounded-circle border border-5-gray h-100 w-100"
                      />
                    )}
                    
                  </div>
                </div>
              </div> */}
              {/* <div className="row">
                <div className="mb-3 col-6">
                  Name : <strong> {user?.name}</strong>
                </div>
                <div className="mb-3 col-6">
                  Phone : <strong> {user?.phone}</strong>
                </div>
                <div className="mb-3 col-6">
                  City : <strong> {user?.city}</strong>
                </div>
                <div className="mb-3 col-6">
                  Zip code : <strong> {user?.zip_code}</strong>
                  
                </div>
              </div> */}

              <div className="row profile align-items-center">
                <div className="profileImage col-lg-3 d-inline-block position-relative mb-5">
                  {formData?.image ? (
                    <img
                      src={
                        formData?.imageFile?.startsWith("blob:")
                          ? formData.imageFile
                          : `${import.meta.env.VITE_BASE_IMAGE_URL}/${
                              formData.image
                            }`
                      }
                      className="img-fluid mt-2 "
                      alt="User Image"
                    />
                  ) : (
                    <FiUser
                      size={16}
                      className="border border-gray-100 border-3 rounded-2 h-100 w-100"
                    />
                  )}

                  <input
                    type="file"
                    accept="img/*"
                    className="d-none"
                    id="profileImage"
                    name="image"
                    onChange={handleProfileChange}
                  />
                  <label htmlFor="profileImage" className="imageUploadButton">
                    <i aria-hidden="true" className="camera-icon bg-primary">
                      <FaCamera size={16} />
                    </i>
                  </label>
                </div>
                <div className="col-lg-5 ps-4">

                <div className="mb-3  mt-3 d-flex justify-content-between">
                  <div className="editableItem">
                    Email : <strong> {formData?.email}</strong>
                  </div>
                </div>
                <div className="mb-3 mt-3 d-flex justify-content-between">
                  <div className="editableItem">
                    Name :{" "}
                    {editName ? (
                      <input
                        autoFocus
                        type="text"
                        name="name"
                        value={formData?.name}
                        onChange={handleChange}
                      />
                    ) : (
                      <strong> {formData?.name}</strong>
                    )}
                  </div>

                  <span className="edit" onClick={() => setEditName(!editName)}>
                    {editName ? (
                      <MdDone onClick={applyChanges} size={16} />
                    ) : (
                      <FaPencil size={16} />
                    )}
                  </span>
                </div>

                <div className="mb-3 mt-3 d-flex justify-content-between">
                  <div className="editableItem">
                    Phone :{" "}
                    {editPhone ? (
                      <input
                        type="text"
                        autoFocus
                        name="phone"
                        value={formData?.phone}
                        onChange={handleChange}
                      />
                    ) : (
                      <strong> {formData?.phone}</strong>
                    )}
                  </div>

                  <span
                    className="edit"
                    onClick={() => setEditPhone(!editPhone)}
                  >
                    {editPhone ? (
                      <MdDone onClick={applyChanges} size={18} />
                    ) : (
                      <FaPencil size={16} />
                    )}
                  </span>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Profile;
