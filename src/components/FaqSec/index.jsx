import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { faqsData } from "../../data";

const FaqSec = () => {
  return (
    <section className="faqs-sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="faqs-content">
              <h2
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                Got Questions? We’ve Got{" "}
                <span className="fw-bold">Answers!</span>
              </h2>
              <p
                data-aos="fade-right"
                data-aos-duration="3000"
                data-aos-offset="0"
              >
                At My Virtual PI, we empower individuals and businesses to
                access detailed background information effortlessly. Our
                AI-driven tools ensure accuracy and efficiency, giving you the
                confidence to make informed decisions.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="faqs-items"
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-offset="0"
            >
              <Accordion defaultActiveKey="0">
                {faqsData.map((item, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{item.titla}</Accordion.Header>
                    <Accordion.Body>{item.description}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSec;
