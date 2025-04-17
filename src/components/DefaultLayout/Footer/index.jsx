import React from "react";
import { Link } from "react-router-dom";

import sslImg from "../../../assets/ssl-img.png";
import ccpaImg from "../../../assets/ccpa-img.png";
import googleplayimg from "../../../assets/google-play-img.png";
import appstoreimg from "../../../assets/app-store-img.png";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const quickSearch = [
  { id: 1, name: "People Search", link: "" },
  { id: 2, name: "Reverse Phone Lookup", link: "" },
  { id: 3, name: "Background Check", link: "" },
  { id: 4, name: "Address Lookup", link: "" },
  { id: 5, name: "Social Media Search", link: "" },
];

const company = [
  { id: 1, name: "About Us", link: "" },
  { id: 2, name: "How It Works", link: "" },
  { id: 3, name: "Careers", link: "" },
  { id: 4, name: "Press & Media", link: "" },
  { id: 5, name: "Affiliate Program", link: "" },
];

const support = [
  { id: 1, name: "Help Center", link: "" },
  { id: 2, name: "Contact Us", link: "" },
  { id: 3, name: "Report an Issue", link: "" },
  { id: 4, name: "Refund Policy", link: "" },
  { id: 5, name: "Billing Support", link: "" },
];

const legalPrivacy = [
  { id: 1, name: "Terms & Conditions", link: "" },
  { id: 2, name: "Privacy Policy", link: "" },
  { id: 3, name: "Do Not Sell My Info", link: "" },
  { id: 4, name: "California Privacy Rights", link: "" },
  { id: 5, name: "Remove My Data", link: "" },
];

const Footer = () => {
  return (
    <>
      <section className="investegate-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="sec-head">
                <h4
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  Tap to <span className="fw-bold">Download</span> Investigate
                  your Self!
                </h4>
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="apple-playstore-imgs"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                <div className="apple-playstore-img apple-store">
                  <img src={appstoreimg} alt="Apple Store Image" />
                </div>
                <div className="apple-playstore-img-devider"></div>
                <div className="apple-playstore-img pla-store">
                  <img src={googleplayimg} alt="Google Playstore Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-3 mb-lg-0 mb-3">
                  <div className="footer-links-div">
                    <h3>Quick Search</h3>
                    <div className="main-footer-links">
                      {quickSearch.map((item) => (
                        <Link key={item.id} to={item.link}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-lg-0 mb-3">
                  <div className="footer-links-div">
                    <h3>Company</h3>
                    <div className="main-footer-links">
                      {company.map((item) => (
                        <Link key={item.id} to={item.link}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-lg-0 mb-3">
                  <div className="footer-links-div">
                    <h3>Support</h3>
                    <div className="main-footer-links">
                      {support.map((item) => (
                        <Link key={item.id} to={item.link}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-lg-0 mb-3">
                  <div className="footer-links-div">
                    <h3>Legal & Privacy</h3>
                    <div className="main-footer-links">
                      {legalPrivacy.map((item) => (
                        <Link key={item.id} to={item.link}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="ssl-div">
                <h3>
                  Your Privacy & <span className="fw-bold">Security</span>{" "}
                  Matter to Us
                </h3>
                <div className="ssl-div-images">
                  <div className="ssl-img">
                    <img src={sslImg} alt="SSL Secured Image" />
                  </div>
                  <div className="ccpa-img">
                    <img src={ccpaImg} alt="CCPA Compliance" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-lg-5 my-4" />
        <div className="container">
          <div className="main-footer-copyright-sec">
            <div className="row">
              <div className="col-lg-5">
                <div className="footer-social">
                  <h4>Follow Us</h4>
                  {/* <div className="footer-social-links">
                    <a href="javascript:;" className="footer-social-link">
                      <FaFacebook />
                    </a>
                    <a href="javascript:;" className="footer-social-link">
                      <FaInstagram />
                    </a>
                    <a href="javascript:;" className="footer-social-link">
                      <FaXTwitter />
                    </a>
                    <a href="javascript:;" className="footer-social-link">
                      <FaYoutube />
                    </a>
                    <a href="javascript:;" className="footer-social-link">
                      <FaLinkedinIn />
                    </a>
                  </div> */}
                  <div className="footer-social-links">
                    <a
                      href="javascript:;"
                      className="footer-social-link facebook"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="javascript:;"
                      className="footer-social-link instagram"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="javascript:;"
                      className="footer-social-link twitter"
                    >
                      <FaXTwitter />
                    </a>
                    <a
                      href="javascript:;"
                      className="footer-social-link youtube"
                    >
                      <FaYoutube />
                    </a>
                    <a
                      href="javascript:;"
                      className="footer-social-link linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="copyright-content">
                  <p className="copyright-content-f-20">
                    © 2025 Virtual PI. All Rights Reserved. Designed by NY Web
                    Experts
                  </p>
                  <p>
                    My Virtual PI is not a consumer reporting agency and does
                    not provide private investigator services. The information
                    available on this site is sourced from publicly available
                    records and is intended for informational purposes only.
                  </p>
                  <p>
                    By using this website, you agree not to use any information
                    obtained for illegal purposes, including but not limited to:
                  </p>
                  <p>
                    Determining a person’s creditworthiness, employment
                    eligibility, or rental screening (as defined under the Fair
                    Credit Reporting Act - FCRA).
                  </p>
                  <p>
                    Harassing, stalking, or harming any individual. Any unlawful
                    surveillance or unauthorized background checks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
