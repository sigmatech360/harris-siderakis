import React from "react";
import DefaultLayout from "../../components/DefaultLayout";

import pricingbgimage from "../../assets/pricing-bg-image.png";
import sslencryption from "../../assets/ssl-encryption.png";
import bbbimg from "../../assets/bbb-img.png";
import InnerBanner from "../../components/InnerBanner";

import ContactForm from "../../components/ContactForm";

const Reviews = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bgImage={pricingbgimage}
        title1="Trusted by"
        titleBold="Thousands"
        title2="– See What Our Users Say!"
        description="Real reviews from real people. Discover how My Virtual PI has helped users reconnect, verify, and protect themselves."
      >
        <div className="virtualPILegit-images">
          <div className="virtualPILegit-image">
            <img src={bbbimg} alt="" />
          </div>
          <div className="virtualPILegit-image">
            <img src={sslencryption} alt="" />
          </div>
        </div>
      </InnerBanner>

      <section className="reviews-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-head">
                <h2>
                  My Virtual PI has{" "}
                  <span className="colorBlue fw-bold">helped</span> users
                  reconnect
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </DefaultLayout>
  );
};

export default Reviews;
