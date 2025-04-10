import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import pricingbgimage from "../../assets/pricing-bg-image.png";
import ContactForm from "../../components/ContactForm";
import FaqSec from "../../components/FaqSec";

import { pricingPlans, reportPlans } from "../../data";
import PricingPlanCard from "../../components/PricingPlanCard";
import OneReportCard from "../../components/OneReportCard";

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

      <section className="pricing-plan-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="sec-head">
                <p className="sec-tag">Pricing Plan</p>
                <h2
                  data-aos="fade-up"
                  data-aos-duration={`2000`}
                  data-aos-offset="0"
                >
                  Get Unlimited{" "}
                  <span className="fw-bold colorBlue">Searches</span> with Our
                  Subscription Plans
                </h2>
              </div>
            </div>

            {pricingPlans.map((plan, index) => (
              <div
                className="col-lg-4 col-md-6 col-sm-9 mb-lg-0 mb-md-4 mb-3"
                key={index}
                data-aos="fade-up"
                data-aos-duration={`${index + 1}000`}
                data-aos-offset="0"
              >
                <PricingPlanCard
                  title={plan.title}
                  duration={plan.duration}
                  price={plan.price}
                  features={plan.features}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="one-report-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="sec-head">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  Just Need One Report?{" "}
                  <span className="fw-bold">No Problem!</span>
                </h2>
              </div>
            </div>
            {reportPlans.map((plan, index) => (
              <div
                className="col-lg-4 col-md-6 col-sm-8 mb-lg-0 mb-md-4 mb-3"
                key={index}
                data-aos="fade-up"
                data-aos-duration={`${index + 1}000`}
                data-aos-offset="0"
              >
                <OneReportCard
                  title={plan.title}
                  duration={plan.duration}
                  price={plan.price}
                  features={plan.features}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <FaqSec />
    </DefaultLayout>
  );
};

export default Pricing;
