import React from "react";

import aboutbannerbg from "../../assets/about-banner-bg.png";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import whychooseservicesimg from "../../assets/why-choose-services-img.png";

import TestimonialSec from "../../components/TestimonialSec";
import FaqSec from "../../components/FaqSec";
import { securedDataIconsContent } from "../../data";
import ContactForm from "../../components/ContactForm";

const About = () => {
  return (
    <>
      <DefaultLayout>
        <InnerBanner
          bgImage={aboutbannerbg}
          title1="Empowering Smart & Secure"
          titleBold="Investigations."
          description="Access public records, verify identities, and uncover the
                    truth—all with the power of AI."
        >
          <button className="innerBanner-button">Start Your Search Now</button>
        </InnerBanner>

        <section className="our-mission-sec">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="sec-head">
                  <p className="sec-tag">Our Mission</p>
                  <h2>
                    Making Investigations Simple,{" "}
                    <span className="fw-bold colorBlue">Fast, and Secure</span>
                  </h2>
                  <p className="sec-head-p">
                    At My Virtual PI, we believe that everyone should have easy
                    access to public records without hiring a private
                    investigator. We use advanced AI technology to provide you
                    with fast, accurate, and confidential search results—so you
                    can make informed decisions.
                  </p>
                  <button className="btn">Try a Search Today</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why-choose-services">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="why-choose-services-content pe-5">
                  <h2>
                    Why Choose <span className="fw-bold">My Virtual PI</span>{" "}
                    Over Other Search Services?
                  </h2>
                  <div className="why-choose-services-content-lables">
                    {[
                      "AI-Powered Accuracy",
                      "Instant Search Results",
                      "Secure & Private",
                      "Clear & Readable Reports",
                      "Affordable Pricing",
                    ].map((item, index) => (
                      <button
                        className="why-choose-services-content-lable"
                        key={index}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="why-choose-services-img pe-xxl-5 pe-0 me-5">
                  <img
                    src={whychooseservicesimg}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <TestimonialSec />

        <section className="secured-data-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sec-head">
                  <h2>
                    Your Searches Are Private. Your{" "}
                    <span className="fw-bold">Data is Secure.</span>
                  </h2>
                  <p>
                    At My Virtual PI, we never store your search history, and
                    your personal information is always protected with
                    industry-leading security measures.
                  </p>
                </div>
              </div>

              {securedDataIconsContent.map((item, index) => (
                <div className="col-lg-3">
                  <div className="secured-data-box">
                    <div className="secured-data-box-icon">
                      <img src={item.icon} alt="" />
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactForm />

        <FaqSec />
      </DefaultLayout>
    </>
  );
};

export default About;
