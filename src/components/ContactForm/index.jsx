import React from "react";

import availableicon from "../../assets/available-icon.png";
import faqicon from "../../assets/faq-icon.png";
import supporticon from "../../assets/support-icon.png";

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
              <form>
                <div className="contactForm-form-input-fields">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name*"
                  />
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address*"
                  />
                  <select className="form-select">
                    <option selected>Reason for Contact</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <textarea
                    className="form-control"
                    placeholder="Write your message...….."
                    rows="4"
                    style={{ resize: "none" }}
                  ></textarea>
                  <div className="contactForm-btn-div d-flex justify-content-between align-items-center">
                    <button className="btn">Submit Request</button>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="terms_conditions"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="terms_conditions"
                      >
                        I agree to the Terms & Privacy Policy.
                      </label>
                    </div>
                  </div>
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
