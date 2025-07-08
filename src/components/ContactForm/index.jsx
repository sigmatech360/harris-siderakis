import React, { useState } from "react";

import availableicon from "../../assets/available-icon.png";
import faqicon from "../../assets/faq-icon.png";
import supporticon from "../../assets/support-icon.png";
import axios from "axios";
import toast from "react-hot-toast";

const iconTextContent = [
  {
    id: 1,
    icon: availableicon,
    text: "Available 24/7 for quick help.",
  },
  {
    id: 2,
    icon: supporticon,
    text: "support@myvirtualpi.com",
  },
  {
    id: 3,
    icon: faqicon,
    text: "Visit FAQs & Guides",
  },
];


const ContactForm = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;


    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error for the current field
    setErrors({      ...errors,
      [name]: "",
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Full Name is required*";
    }
    if (!formData.email) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email Address is invalid";
    }
    // if (!formData.reason) {
    //   newErrors.reason = "Reason for Contact is required";
    // }
    if (!formData.message) {
      newErrors.message = "Message is required";
    }
    if (!formData.terms_conditions) {
      newErrors.terms_conditions = "You must agree to the Terms & Privacy Policy";
    }
    if (Object.keys(newErrors).length === 0) {
      // Submit the form data
      try {
        console.log("Form submitted successfully:", formData);
        
        const baseURL = `${import.meta.env.VITE_BASE_URL}`;
        const response = await axios.post(`${baseURL}/submit-query`, formData);
        console.log("Success:", response.data);
        const data = response.data;
        if(data.status){
          toast.success(response.data.message);
          setFormData({});

        }
      } catch (error) {
        console.error("Error:", error);
        toast.error( error.response.data.message ||"An error occurred while submitting the form. Please try again later.");
      }
    } else {
      console.log("Form submission errors:", newErrors);
      
      setErrors(newErrors);
    }
  }
  return (
    <section className="contactForm">
      <div className="container">
        <div className="row align-items-center gap-lg-0 gap-4">
          <div className="col-lg-6">
            <div className="contactFormContent">
              <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="0"
              >
                Need <span className="fw-bold colorBlue">Help?</span> We’re Here
                for You!
              </h2>
              <p
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                Have questions about our services, billing, or privacy? Contact
                us for quick assistance.
              </p>
              <div
                className="contactForm-details"
                data-aos="fade-right"
                data-aos-duration="3000"
                data-aos-offset="0"
              >
                {iconTextContent.map((item, index) => (
                  <div className="contactForm-icons-text" key={index}>
                    <div className="contactForm-icon">
                      <img src={item.icon} alt="" />
                    </div>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="contactForm-form"
              data-aos="fade-left"
              data-aos-duration="3000"
              data-aos-offset="0"
            >
              <h3>Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="contactForm-form-input-fields">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name*"
                    name="name"
                    value={formData.name || ""}
                    onChange={handleInputChange}
                    
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name}</span>
                  )}

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Address*"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleInputChange}
                    
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone || ""}
                    onChange={handleInputChange}
                    
                  />
                  {/* {errors.phone && (
                    <span className="error-message">{errors.phone}</span>
                  )} */}

                  <select className="form-select"
                    name="reason"
                    value={formData.reason || ""}
                    onChange={handleInputChange}>
                    <option selected>Reason for Contact</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <textarea
                    className="form-control"
                    placeholder="Write your message..."
                    rows="4"
                    style={{ resize: "none" }}
                    name="message"
                    value={formData.message || ""}
                    onChange={handleInputChange}
                    
                  ></textarea>
                  {errors.message && (
                    <span className="error-message">{errors.message}</span> 
                  )}
                  <div className="contactForm-btn-div d-flex justify-content-between align-items-center">
                    <button className="btn">Submit Request</button>
                    <div className="form-check m-0 position-relative">
                      <input
                        className="form-check-input mt-1"
                        type="checkbox"
                        value=""
                        id="terms_conditions"
                        name="terms_conditions"
                        
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            terms_conditions: e.target.checked,
                          });
                          setErrors({
                            ...errors, 
                            terms_conditions: "",
                          });
                        }}
                        checked={formData.terms_conditions || false}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="terms_conditions"
                      >
                        I agree to the Terms & Privacy Policy.
                      </label>
                    {errors.terms_conditions && (
                      <span className="error-message" 
                        style={{ position: "absolute", top: "100%", left: "0" }}>
                        {errors.terms_conditions}
                      </span>
                    )}
                    </div>
                  </div>
                  <div className="d-flex justify-content-end"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
