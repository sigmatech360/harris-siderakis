import axios from "axios";
import { Form, FormikProvider, useFormik } from "formik";
import React, { useEffect } from "react";
import { Modal, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";

const SearchModal = ({
  showModal,
  handleClose,
  title,
  inputPlaceholder,
  inputName,
  handleChange,
  handleSearch,
  nextSearch,
  prevSearch,
  step,
  formData,
}) => {
  useEffect(() => {
    console.log("modal is open", showModal);
  }, [showModal]);

  const nextStep = () => {
    if (step < 5) {
      nextSearch();
    } else {
      handleSearch();
    }
  };

  return (
    <Modal show={showModal} centered onHide={handleClose}>
      <button className="closeButton" onClick={handleClose}>
        <FaTimes />
      </button>
      <ModalBody>
        <div className="search-forms px-3">
          <h5 className="fw-bold text-center mb-3">{title}</h5>
          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              placeholder={inputPlaceholder}
              name={inputName}
              onChange={handleChange}
              value={formData[inputName] || ""}
            />
          </div>
          <div className="d-flex justify-content-between ">
            <button onClick={prevSearch} className={`${step>0?'':'opacity-0'} btn mb-3`}>
              Back
            </button>
            <button onClick={nextStep} className={`btn  mb-3`}>
              {step < 5 ? "Next" : "Submit"}
            </button>
          </div>
        </div>
        {/* </Form>
        </FormikProvider> */}
      </ModalBody>
    </Modal>
  );
};

export default SearchModal;
