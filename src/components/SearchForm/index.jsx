import axios from "axios";
import { Form, FormikProvider, useFormik } from "formik";
import React, { useEffect } from "react";
import { Modal, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";

const SearchForm = ({ showModal, handleClose, searchType, searchBy }) => {
  useEffect(() => {
    console.log("modal is open", showModal);
  }, [showModal]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      remember: true,
    },
    // validationSchema: LoginSchema,

    onSubmit: async (values) => {
        // document.querySelector('.loaderBox').classList.remove("d-none");
      // try {
      //   const baseURL = `${import.meta.env.VITE_BASE_URL}`;
      //   const response = await axios.post(
      //     `https://api.galaxysearchapi.com/PersonSearch`,
      //     values,
      //     {
      //       headers: {
      //         accept: "application/json",
      //         "galaxy-ap-name": `${import.meta.env.VITE_GALAXY_APP_NAME}`,
      //         "galaxy-ap-password": `${import.meta.env.VITE_GALAXY_APP_PASSWORD}`,
      //         "galaxy-search-type": "Person",
      //         "content-type": "application/json",
      //       },
      //     }
      //   );
      //   const data = response.data;
      //   const persons = data.persons;
      //   console.log("Success:", response?.data);
      //   // console.log("token:", token);
      //   // localStorage.setItem('token', response.data.data.token);
      //   resetForm();
      //   document.querySelector('.loaderBox').classList.add("d-none");
      // } catch (error) {
      //   console.error("Error:", error);
      //   document.querySelector('.loaderBox').classList.add("d-none");
      // }
    },
  });
  const { errors, touched, values, handleSubmit, resetForm, getFieldProps } =
    formik;
  return (
    <Modal show={showModal} centered onHide={handleClose}>
      {/* <ModalHeader>
        <ModalTitle>Enter Details</ModalTitle>

      </ModalHeader> */}
        <button className="closeButton" onClick={handleClose}>
          <FaTimes />
        </button>
      <ModalBody>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <div className="auth-forms px-3">
              {searchBy === "name" && (
                <>
                  <h5 className="fw-bold text-center mb-3">Search by Name</h5>
                  <div className="mb-3">
                    {/* <label htmlFor="" className="">First Name</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      id="firstName"
                      {...getFieldProps("firstName")}
                    />
                    {touched.firstName && errors.firstName && (
                      <div className="text-danger">{errors.firstName}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <input
                      type="name"
                      className="form-control"
                      placeholder="Last name"
                      id="lastName"
                      {...getFieldProps("lastName")}
                    />
                    {touched.lastName && errors.lastName && (
                      <div className="text-danger">{errors.lastName}</div>
                    )}
                  </div>
                </>
              )}
              {searchBy === "email" && (
                <>
                  <h5 className="fw-bold text-center mb-3">Search by Email</h5>
                  <div className="mb-3">
                    {/* <label htmlFor="" className="">First Name</label> */}
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      id="email"
                      //   {...getFieldProps("name")}
                    />
                    {/* {touched.name && errors.name && (
                                <div className="text-danger">{errors.name}</div>
                                )} */}
                  </div>
                </>
              )}
              {searchBy === "phone" && (
                <>
                  <h5 className="fw-bold text-center mb-3">Search by Phone</h5>
                  <div className="mb-3">
                    {/* <label htmlFor="" className="">First Name</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                      id="phone"
                      //   {...getFieldProps("name")}
                    />
                    {/* {touched.name && errors.name && (
                                <div className="text-danger">{errors.name}</div>
                                )} */}
                  </div>
                </>
              )}
              {searchBy === "address" && (
                <>
                  <h5 className="fw-bold text-center mb-3">
                    Search by Address
                  </h5>
                  <div className="mb-3">
                    {/* <label htmlFor="" className="">First Name</label> */}
                    <textarea
                      rows={2}
                      className="form-control"
                      placeholder="Address"
                      id="address"
                      //   {...getFieldProps("name")}
                    />
                    {/* {touched.name && errors.name && (
                                <div className="text-danger">{errors.name}</div>
                                )} */}
                  </div>
                </>
              )}
              <button type="submit" className="btn w-100 mb-3">
                Next
              </button>
            </div>
          </Form>
        </FormikProvider>
      </ModalBody>
    </Modal>
  );
};

export default SearchForm;
