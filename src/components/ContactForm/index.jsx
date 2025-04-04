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
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="contactFormContent">
              <h2>
                Need <span className="fw-bold colorBlue">Help?</span> We’re Here
                for You!
              </h2>
              <p>
                Have questions about our services, billing, or privacy? Contact
                us for quick assistance.
              </p>
              <div className="contactForm-details">
                {iconTextContent.map((item, index) => (
                  <div className="contactForm-icons-text">
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
            <div className="contactForm-form">
              <h3>Send Us a Message</h3>
              <form>
                <div className="contactForm-form-input-fields">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Full Name*"
                  />
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email Address*"
                  />
                  <select class="form-select">
                    <option selected>Reason for Contact</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <textarea
                    class="form-control"
                    placeholder="Write your message...….."
                    rows="4"
                    style={{ resize: "none" }}
                  ></textarea>
                  <div className="d-flex justify-content-between">
                    <button className="btn">Submit Request</button>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="terms_conditions"
                      />
                      <label class="form-check-label" for="terms_conditions">
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
