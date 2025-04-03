import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import MainBanner from "../../components/MainBanner";

import { RiSecurePaymentFill } from "react-icons/ri";

import howv_pi_work_img1 from "../../assets/how-v-pi-work-img1.png";
import howv_pi_work_img2 from "../../assets/how-v-pi-work-img2.png";
import howv_pi_work_img4 from "../../assets/how-v-pi-work-img4.png";

import viewdownloadicon from "../../assets/view-download-icon.png";
import runsearchicon from "../../assets/run-search-icon.png";
import datingappicon from "../../assets/dating-app-icon.png";
import enterdetailsicon from "../../assets/enter-details-icon.png";

import makedifferent from "../../assets/make-different.png";

import sara_b from "../../assets/sara-b.png";
import david_l from "../../assets/david-l.png";
import david_m from "../../assets/david-m.png";
import jessica_m from "../../assets/jessica-m.png";
import jessica_r from "../../assets/jessica-r.png";
import sammantha_r from "../../assets/sammantha-r.png";
import ratingimg from "../../assets/rating-img.png";

import VirtualPIWorkBox from "../../components/VirtualPIWorkBox";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import Accordion from "react-bootstrap/Accordion";

import {
  virtualPiBoxesContent,
  searchSmarterBoxContent,
  makeDifferentICon,
  whyChooseData,
  faqsData,
  plansData,
} from "../../data";
import PlanCard from "../../components/PlanCard";
import TestimonialCard from "../../components/TestimonialCard";

const Home = () => {
  return (
    <DefaultLayout>
      <MainBanner />

      <section className="virtual-pi-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="sec-head">
                <h4>
                  <span className="fw-bold colorBlue">Virtual PI</span> Searched
                  by:
                </h4>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="virtual-pi-boxes">
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
            <div className="col-xl-4">
              <div className="sec-head">
                <p>How It Works</p>
                <h3>
                  Search <span className="fw-bold colorBlue">Smarter</span>, Not
                  Harder
                </h3>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                {searchSmarterBoxContent.map((item, index) => (
                  <div className={`col-md-4 ${item.className}`} key={index}>
                    <div className="search-smarter-box">
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
          <div className="row">
            <div className="col-lg-4">
              <div className="virtual_boxes">
                <VirtualPIWorkBox
                  bgImage={howv_pi_work_img1}
                  icon={datingappicon}
                  title="Dating App Users"
                  description="Feel confident about who you’re meeting, knowing that you’ll
                    have all the relevant details and insights at your fingertips
                    to build meaningful connections and engage in productive
                    conversations."
                />
                <VirtualPIWorkBox
                  bgImage={howv_pi_work_img2}
                  icon={runsearchicon}
                  title="Run the Search"
                  description="Know who you’re sharing your space with, ensuring a comfortable and secure environment by having all the necessary information about those around you for a more harmonious and informed experience."
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="v_pi_work_middle_box">
                <p>Easy 4 Steps</p>
                <h3>
                  How My <span className="fw-bold">Virtual PI</span> Works
                </h3>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="virtual_boxes">
                <VirtualPIWorkBox
                  bgImage={howv_pi_work_img4}
                  icon={enterdetailsicon}
                  title="Enter the Details"
                  description="Gain peace of mind in your personal or professional life by staying organized, informed, and in control, knowing that you have the resources and support you need to navigate any situation with confidence and ease."
                />
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
      </section>

      <section className="why-choose-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="swiper-container">
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
                  loop={true} // Enables infinite sliding
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
                <h2>
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
                />
                {makeDifferentICon.map((item, index) => (
                  <div
                    className={`make-different-content-box make-different-content-box${
                      index + 1
                    }`}
                    key={index}
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

      <section className="testimonial-sec">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3">
              <TestimonialCard
                title={
                  "Saved me from a scam call—Reverse Phone Lookup workedperfectly!"
                }
                ratingNumber="5/5"
                name="Sarah B"
                state="Florida"
                userImg={sara_b}
              />
            </div>
            <div className="col-lg-5">
              <TestimonialCard
                flexVariant="row"
                bgColor="lightGray"
                title={
                  "I found my lost childhood friend in minutes! It was life-changing."
                }
                ratingNumber="5/5"
                name="Jessica R."
                state="Texas"
                userImg={jessica_r}
              />
            </div>
            <div className="col-lg-3">
              <TestimonialCard
                title={
                  "Helped me verify a tenant’s background before renting. Super easy!"
                }
                ratingNumber="5/5"
                name="David M"
                state="California"
                userImg={david_m}
              />
            </div>

            <div className="col-md-12">
              <div className="sec-head">
                <p>Testimonials</p>
                <h2>
                  Life-Changing{" "}
                  <span className="colorBlue fw-bold">Results</span> Pure{" "}
                  <span className="colorBlue fw-bold">Perfection!</span>
                </h2>
              </div>
            </div>

            <div className="col-lg-4">
              <TestimonialCard
                flexVariant="row"
                bgColor="lightGray"
                title={
                  "Found my childhood best friend in minutes after searching for years!"
                }
                ratingNumber="5/5"
                name="JSamantha R."
                state="New York"
                userImg={sammantha_r}
              />
            </div>
            <div className="col-lg-3">
              <TestimonialCard
                title={
                  "Used public records to find my biological siblings. Life-changing!"
                }
                ratingNumber="5/5"
                name="Jessica M."
                state="California"
                userImg={jessica_m}
              />
            </div>
            <div className="col-lg-4">
              <TestimonialCard
                flexVariant="row"
                bgColor="lightGray"
                title={
                  "Ran a quick check turns out the ‘company’ was fake. Crisis avoided!"
                }
                ratingNumber="5/5"
                name="David L."
                state="Texas"
                userImg={david_l}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="faqs-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faqs-content">
                <h2>
                  Got Questions? We’ve Got{" "}
                  <span className="fw-bold">Answers!</span>
                </h2>
                <p>
                  At My Virtual PI, we empower individuals and businesses to
                  access detailed background information effortlessly. Our
                  AI-driven tools ensure accuracy and efficiency, giving you the
                  confidence to make informed decisions.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faqs-items">
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

      <section className="plans-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-head">
                <h2>
                  Flexible <span className="fw-bold colorBlue">Plans</span> for
                  Every Need
                </h2>
              </div>
            </div>

            {plansData.map((plan, index) => (
              <div className="col-lg-4" key={index}>
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
          <div className="row">
            <div className="col-md-12">
              <div className="sec-head">
                <h2>
                  Your <span className="fw-bold">Privacy</span>, Our Priority
                </h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="privacy-box">
                <div className="privacy-box-img">
                  <RiSecurePaymentFill />
                </div>
                <h4>100% Secure Searches</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="privacy-box">
                <div className="privacy-box-img">
                  <RiSecurePaymentFill />
                </div>
                <h4>Industry-Leading Encryption</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="privacy-box">
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
