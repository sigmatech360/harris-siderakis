import React, { useState } from "react";
import DefaultLayout from "../../components/Layout/DefaultLayout";

import pricingbgimage from "../../assets/pricing-bg-image.png";
import sslencryption from "../../assets/ssl-encryption.png";
import bbbimg from "../../assets/bbb-img.png";
import InnerBanner from "../../components/InnerBanner";

import ContactForm from "../../components/ContactForm";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TestimonialCard from "../../components/TestimonialCard";
import sara_b from "../../assets/sara-b.png";
import david_l from "../../assets/david-l.png";
import david_m from "../../assets/david-m.png";
import jessica_m from "../../assets/jessica-m.png";
import jessica_r from "../../assets/jessica-r.png";
import sammantha_r from "../../assets/sammantha-r.png";

const reviewsData = [
  {
    title:
      "I used My Virtual PI to check on a new business partner, and I found a lawsuit history.",
    ratingNumber: "5/5",
    name: "Robert T.",
    state: "California",
    userImg: sammantha_r,
  },
  {
    title:
      "I was able to locate my long-lost cousin using the people search tool. It was so easy!",
    ratingNumber: "5/5",
    name: "Jessica M.",
    state: "New York",
    userImg: sara_b,
  },
  {
    title:
      "The search was quick, but some of the info was outdated. Still useful though.",
    ratingNumber: "5/5",
    name: "David L.",
    state: "Texas",
    userImg: jessica_r,
  },
  {
    title:
      "I was able to locate my long-lost cousin using the people search tool. It was so easy!",
    ratingNumber: "5/5",
    name: "Jessica M.",
    state: "New York",
    userImg: sara_b,
  },
];

const transparencyCards = [
  {
    title: "Every opinion matters, but honesty comes first.",
    points: [
      "We do not edit or alter reviews, except for removing offensive language.",
      "Users can report suspicious or false reviews, and we act immediately.",
    ],
  },
  {
    title: "Your trust is our priority we take action fast!",
    points: [
      "If you spot a suspicious review, click the ‘Report’ button.",
      "Our moderation team investigates within 24 hours.",
    ],
  },
  {
    title: "Know which reviews you can trust at a glance.",
    points: [
      "Users who have completed a real search or purchase get this badge.",
      "This ensures you're reading real experiences, not fake marketing gimmicks.",
    ],
  },
  // {
  //   title: "Every opinion matters, but honesty comes first.",
  //   points: [
  //     "We do not edit or alter reviews, except for removing offensive language.",
  //     "Users can report suspicious or false reviews, and we act immediately.",
  //   ],
  // },
  // {
  //   title: "Your trust is our priority we take action fast!",
  //   points: [
  //     "If you spot a suspicious review, click the ‘Report’ button.",
  //     "Our moderation team investigates within 24 hours.",
  //   ],
  // },
  // {
  //   title: "Know which reviews you can trust at a glance.",
  //   points: [
  //     "Users who have completed a real search or purchase get this badge.",
  //     "This ensures you're reading real experiences, not fake marketing gimmicks.",
  //   ],
  // },
];

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <DefaultLayout>
      <InnerBanner
        // bgImage={pricingbgimage}
        bgVideo
        reviewsRightContent
        title1="Trusted by"
        titleBold="Thousands"
        title2="– See What Our Users Say!"
        description="Real reviews from real people. Discover how My Virtual PI has helped users reconnect, verify, and protect themselves."
      >
        <div
          className="virtualPILegit-images"
          data-aos="fade-right"
          data-aos-duration="3000"
          data-aos-offset="0"
        >
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
                <h2
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  My Virtual PI has{" "}
                  <span className="colorBlue fw-bold">helped</span> users
                  reconnect
                </h2>
              </div>
            </div>
            <div className="col-md-12">
              {/* <Tabs
                defaultActiveKey="peopleSearch"
                className="reviews-tabs"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-offset="0"
              >
                <Tab eventKey="peopleSearch" title="People Search">
                  <div className="reviews-sec-slider-content">
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      spaceBetween={20}
                      slidesPerView={1}
                      loop={true}
                      centeredSlides={true}
                      speed={1000}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      onSlideChange={(swiper) =>
                        setActiveIndex(swiper.realIndex)
                      }
                      breakpoints={{
                        // 768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                      }}
                      pagination={{ clickable: true }}
                    >
                      {reviewsData.map((item, index) => (
                        <SwiperSlide key={index}>
                          <TestimonialCard
                            // flexVariant={item.flexVariant}
                            // bgColor={item.bgColor}
                            {...(index !== activeIndex && {
                              flexVariant: "row",
                              bgColor: "lightGray",
                            })}
                            title={item.title}
                            ratingNumber={item.ratingNumber}
                            name={item.name}
                            state={item.state}
                            userImg={item.userImg}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </Tab>
                <Tab eventKey="backgroundCheck" title="Background Check">
                  Background Check
                </Tab>
                <Tab eventKey="criminalRecords" title="Criminal Records">
                  Criminal Records
                </Tab>
                <Tab eventKey="reversePhoneLookup" title="Reverse Phone Lookup">
                  Reverse Phone Lookup
                </Tab>
              </Tabs> */}
              <div className="reviews-sec-slider-content">
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      spaceBetween={20}
                      slidesPerView={1}
                      loop={true}
                      centeredSlides={true}
                      speed={1000}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      onSlideChange={(swiper) =>
                        setActiveIndex(swiper.realIndex)
                      }
                      breakpoints={{
                        // 768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                      }}
                      pagination={{ clickable: true }}
                    >
                      {reviewsData.map((item, index) => (
                        <SwiperSlide key={index}>
                          <TestimonialCard
                            // flexVariant={item.flexVariant}
                            // bgColor={item.bgColor}
                            {...(index !== activeIndex && {
                              flexVariant: "row",
                              bgColor: "lightGray",
                            })}
                            title={item.title}
                            ratingNumber={item.ratingNumber}
                            name={item.name}
                            state={item.state}
                            userImg={item.userImg}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
            </div>
          </div>
        </div>
      </section>

      <section className="transparent-reviews">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-head">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  Verified & Unbiased{" "}
                  <span className="fw-bold">Reviews 100%</span> Transparency
                </h2>
              </div>
            </div>

            <div className="col-md-12">
              <div className="transparent-reviews-boxes">
                <div
                  className="transparent-reviews-box"
                  data-aos="fade-left"
                  data-aos-duration="3000"
                  data-aos-offset="0"
                >
                  <h4>Every opinion matters, but honesty comes first.</h4>
                  <ul>
                    <li>
                      We do not edit or alter reviews, except for removing
                      offensive language.
                    </li>
                    <li>
                      Users can report suspicious or false reviews, and we act
                      immediately.
                    </li>
                  </ul>
                </div>
                <div
                  className="transparent-reviews-box"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                >
                  <h4>Your trust is our priority we take action fast!</h4>
                  <ul>
                    <li>
                      If you spot a suspicious review, click the ‘Report’
                      button.
                    </li>
                    <li>Our moderation team investigates within 24 hours.</li>
                  </ul>
                </div>
                <div
                  className="transparent-reviews-box"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                  data-aos-offset="0"
                >
                  <h4>Know which reviews you can trust at a glance.</h4>
                  <ul>
                    <li>
                      Users who have completed a real search or purchase get
                      this badge.
                    </li>
                    <li>
                      This ensures you're reading real experiences, not fake
                      marketing gimmicks.
                    </li>
                  </ul>
                </div>

                {/* <Swiper
                  modules={[Autoplay]}
                  spaceBetween={10}
                  slidesPerView={1}
                  loop={true}
                  centeredSlides={true}
                  speed={1000}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    768: { slidesPerView: 3 },
                  }}
                >
                  {transparencyCards.map((card, index) => (
                    <SwiperSlide key={index}>
                      <div className="transparent-reviews-box">
                        <h4>{card.title}</h4>
                        <ul>
                          {card.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper> */}
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
