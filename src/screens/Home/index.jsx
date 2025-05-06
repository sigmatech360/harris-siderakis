import React from "react";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import MainBanner from "../../components/MainBanner";

import { RiSecurePaymentFill } from "react-icons/ri";

import howv_pi_work_img1 from "../../assets/how-v-pi-work-img1.png";
import howv_pi_work_img2 from "../../assets/how-v-pi-work-img2.png";
import howv_pi_work_img3 from "../../assets/how-v-pi-work-img3.png";
import howv_pi_work_img4 from "../../assets/how-v-pi-work-img4.png";

import viewdownloadicon from "../../assets/view-download-icon.png";
import runsearchicon from "../../assets/run-search-icon.png";
import datingappicon from "../../assets/dating-app-icon.png";
import enterdetailsicon from "../../assets/enter-details-icon.png";

import makedifferent from "../../assets/make-different.png";

import VirtualPIWorkBox from "../../components/VirtualPIWorkBox";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import {
  virtualPiBoxesContent,
  searchSmarterBoxContent,
  makeDifferentICon,
  whyChooseData,
  plansData,
} from "../../data";

import PlanCard from "../../components/PlanCard";
import TestimonialSec from "../../components/TestimonialSec";
import FaqSec from "../../components/FaqSec";

const Home = () => {
  return (
    <DefaultLayout>
      <MainBanner />

      <section className="virtual-pi-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="sec-head">
                <h4
                  data-aos="fade-right"
                  data-aos-duration="3000"
                  data-aos-offset="0"
                >
                  <span className="fw-bold colorBlue">Virtual PI</span> Searched
                  by:
                </h4>
              </div>
            </div>
            <div className="col-lg-9">
              <div
                className="virtual-pi-boxes"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-offset="0"
              >
                {virtualPiBoxesContent.map((item, index) => (
                  <div className="virtual-pi-box">
                    <div className="virtual-pi-box-icon">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <h4>{item.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="search-smarter-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div
                className="sec-head"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                <p className="sec-tag">How It Works</p>
                <h3>
                  Search <span className="fw-bold colorBlue">Smarter</span>, Not
                  Harder
                </h3>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                {searchSmarterBoxContent.map((item, index) => (
                  <div
                    className={`col-lg-4 mb-lg-0 mb-4 ${item.className}`}
                    key={index}
                  >
                    <div
                      className="search-smarter-box"
                      data-aos="fade-up"
                      data-aos-duration="3000"
                      data-aos-offset="0"
                    >
                      <div className="search-smarter-box-content">
                        <div className="search-smarter-box-number">
                          {item.number}
                        </div>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                      <div className="search-smarter-box-img">
                        <img src={item.image} alt="Mobile Image" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="virtual-pi-work">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 order-lg-1">
              <div className="virtual_boxes">
                <div
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                >
                  <VirtualPIWorkBox
                    bgImage={howv_pi_work_img1}
                    icon={datingappicon}
                    title="Dating App Users"
                    description="Feel confident about who you’re meeting, knowing that you’ll
                      have all the relevant details and insights at your fingertips
                      to build meaningful connections and engage in productive
                      conversations."
                  />
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  <VirtualPIWorkBox
                    bgImage={howv_pi_work_img2}
                    icon={runsearchicon}
                    title="Run the Search"
                    description="Know who you’re sharing your space with, ensuring a comfortable and secure environment by having all the necessary information about those around you for a more harmonious and informed experience."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 order-lg-2 order-1">
              <div
                className="v_pi_work_middle_box"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-offset="0"
              >
                <p>Easy 4 Steps</p>
                <h3>
                  How My <span className="fw-bold">Virtual PI</span> Works
                </h3>
              </div>
            </div>
            <div className="col-lg-4 order-lg-3">
              <div className="virtual_boxes">
                <div
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                >
                  <VirtualPIWorkBox
                    bgImage={howv_pi_work_img3}
                    icon={enterdetailsicon}
                    title="Enter the Details"
                    description="Gain peace of mind in your personal or professional life by staying organized, informed, and in control, knowing that you have the resources and support you need to navigate any situation with confidence and ease."
                  />
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  <VirtualPIWorkBox
                    bgImage={howv_pi_work_img4}
                    icon={viewdownloadicon}
                    title="View and Download Your Report"
                    description="Ensure your team’s integrity with reliable employment history checks, providing you with accurate and thorough background information to make confident hiring decisions and maintain a trustworthy and dependable workforce."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="swiper-container"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                <div className="sec-head">
                  <h2>
                    Why Choose My <span className="fw-bold">Virtual PI?</span>
                  </h2>
                  <div className="why-choose-slide-btns">
                    <div className="swiper-button-prev">
                      <GoArrowLeft />
                    </div>
                    <div className="swiper-button-next">
                      <GoArrowRight />
                    </div>
                  </div>
                </div>
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  speed={1000}
                  breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  pagination={{ clickable: true }}
                >
                  {whyChooseData.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="why-choose-card">
                        <div className="why-choose-card-head">
                          <div className="why-choose-card-head-img">
                            <img src={item.icon} alt="" />
                          </div>
                          <h4>{item.title}</h4>
                        </div>
                        <p>{item.description}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="makes-different-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-head">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                >
                  What Makes <br />{" "}
                  <span className="colorBlue fw-medium">My Virtual PI</span>{" "}
                  Different?
                </h2>
              </div>
            </div>
          </div>
        </div>
        <section className="make-different-content-sec">
          <div className="container-fluid">
            <div className="row">
              <div className="make-different-content-img-div">
                <img
                  src={makedifferent}
                  className="make-different-content-img"
                  alt="Mobile Image"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                />
                {makeDifferentICon.map((item, index) => (
                  <div
                    className={`make-different-content-box make-different-content-box${
                      index + 1
                    }`}
                    key={index}
                    data-aos={index < 2 ? "fade-right" : "fade-left"}
                    data-aos-duration={index % 2 === 0 ? "2000" : "3000"}
                    data-aos-offset="0"
                  >
                    <div className="make-different-content-box-img">
                      <img src={item.icon} alt="" />
                    </div>
                    <div className="make-different-content-box-text">
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>

      <TestimonialSec />

      <FaqSec />

      <section className="plans-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="sec-head">
                <h2
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                >
                  Flexible <span className="fw-bold colorBlue">Plans</span> for
                  Every Need
                </h2>
              </div>
            </div>

            {plansData.map((plan, index) => (
              <div
                className="col-lg-4 col-md-6 mb-lg-0 mb-3"
                key={index}
                data-aos="fade-up"
                data-aos-duration={`${index + 1}000`}
                data-aos-offset="0"
              >
                <PlanCard
                  name={plan.name}
                  duration={plan.duration}
                  price={plan.price}
                  list={plan.list}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="your-privacy-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="sec-head">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                >
                  Your <span className="fw-bold">Privacy</span>, Our Priority
                </h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0 mb-3">
              <div
                className="privacy-box"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="0"
              >
                <div className="privacy-box-img">
                  <RiSecurePaymentFill />
                </div>
                <h4>100% Secure Searches</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0 mb-3">
              <div
                className="privacy-box"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                <div className="privacy-box-img">
                  <RiSecurePaymentFill />
                </div>
                <h4>Industry-Leading Encryption</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0 mb-3">
              <div
                className="privacy-box"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-offset="0"
              >
                <div className="privacy-box-img">
                  <RiSecurePaymentFill />
                </div>
                <h4>Data Is Never Stored or Shared</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Home;
