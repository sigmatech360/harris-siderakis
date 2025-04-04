import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import pricingbgimage from "../../assets/pricing-bg-image.png";
import ContactForm from "../../components/ContactForm";
import FaqSec from "../../components/FaqSec";

const Pricing = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bgImage={pricingbgimage}
        title1="Transparent"
        titleBold="Pricing"
        title2="Choose What Works for You"
        description="Access background reports, phone lookups, and public records at a price that fits your needs."
      />

      {/* <section className="pricing-plan-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-head">
                <p className="sec-tag">Pricing Plan</p>
                <h2>
                  Get Unlimited{" "}
                  <span className="fw-bold colorBlue">Searches</span> with Our
                  Subscription Plans
                </h2>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="pricing-plan-card">
                <div className="pricing-plan-card-head">
                  <h4>Basic Plan</h4>
                  <p>(Per month)</p>
                </div>
                <h3 className="pricing-plan-card-price">$100</h3>
                <ul className="pricing-plan-card-list">
                  <li>Unlimited People Searches</li>
                  <li>Unlimited People Searches</li>
                  <li>Unlimited People Searches</li>
                  <li>Unlimited People Searches</li>
                </ul>
                <button className="pricing-plan-card-btn">Get this Plan</button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <ContactForm />
      <FaqSec />
    </DefaultLayout>
  );
};

export default Pricing;
