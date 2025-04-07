import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import pricingbgimage from "../../assets/pricing-bg-image.png";

import sslencryption from "../../assets/ssl-encryption.png";
import bbbimg from "../../assets/bbb-img.png";
import ComparisonTable from "../../components/ComparisonTable";

import { comparisonData } from "../../data";

const VirtualPILegit = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bgImage={pricingbgimage}
        title1="Is My Virtual"
        titleBold="PI Legit?"
        title2="Absolutely – Here’s Why"
        description="We believe in transparency, accuracy, and user privacy. See how we uphold the highest standards in people search and public records access."
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

      <section className="official-public-records">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-head">
                <p className="sec-tag">Legitimate</p>
                <h2>
                  We Use{" "}
                  <span className="fw-bold colorBlue">Official Public</span>{" "}
                  Records
                </h2>
                <p className="sec-head-desc">
                  All data provided comes from legally available public records,
                  ensuring accurate and verified results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="try-search-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-head">
                <h2>
                  See for <span className="fw-bold">Yourself</span> Try a Search
                  Now
                </h2>
                <p>
                  Join 100K+ users who trust My Virtual PI for fast and accurate
                  people searches.
                </p>
                <div className="try-search-btns">
                  <button className="try-search-btn">
                    Start Your Search Now
                  </button>
                  <button className="try-search-btn">
                    Start Your Search Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stand-out-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-head">
                <h2>
                  How We <span className="fw-bold colorBlue">Stand Out</span>{" "}
                  from the Competition
                </h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="comparisonTable-outer-div">
                <ComparisonTable data={comparisonData} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default VirtualPILegit;
