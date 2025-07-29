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

// const reviewsData = [
//   {
//     title:
//       "I used My Virtual PI to check on a new business partner, and I found a lawsuit history.",
//     ratingNumber: "5/5",
//     name: "Robert T.",
//     state: "California",
//     userImg: sammantha_r,
//   },
//   {
//     title:
//       "I was able to locate my long-lost cousin using the people search tool. It was so easy!",
//     ratingNumber: "5/5",
//     name: "Jessica M.",
//     state: "New York",
//     userImg: sara_b,
//   },
//   {
//     title:
//       "The search was quick, but some of the info was outdated. Still useful though.",
//     ratingNumber: "5/5",
//     name: "David L.",
//     state: "Texas",
//     userImg: jessica_r,
//   },
//   {
//     title:
//       "I was able to locate my long-lost cousin using the people search tool. It was so easy!",
//     ratingNumber: "5/5",
//     name: "Jessica M.",
//     state: "New York",
//     userImg: sara_b,
//   },
// ];

const reviewsData = [
  {
    title: "I used My Virtual PI to check on a new business partner, and I found a lawsuit history.",
    name: "Robert T.",
    state: "California",
  },
  {
    title: "I was able to locate my long-lost cousin using the people search tool. It was so easy!",
    name: "Jessica M.",
    state: "New York",
  },
  {
    title: "The search was quick, but some of the info was outdated. Still useful though.",
    name: "David L.",
    state: "Texas",
  },
  {
    title: "I was able to locate my long-lost cousin using the people search tool. It was so easy!",
    name: "Jessica M.",
    state: "New York",
  },
  {
    title: "I needed to verify a new marketing consultant before giving them access to client data. The report confirmed their identity and helped me proceed with confidence. Really efficient process.",
    name: "Karen K.",
    state: "Massachusetts",
  },
  {
    title: "We use this to verify every freelance designer we bring on board. We got some amazing people on board and did get some negative reports. I’d say its quick, reliable, and gives us exactly what we need to stay professional and protected.",
    name: "Michael M.",
    state: "Georgia",
  },
  {
    title: "Before submitting personal records to a legal advisor I met online, I checked their identity on the app. Thank God for this platform that I was saved from a scam. I felt way more secure moving forward with the advisor.",
    name: "Daniel D.",
    state: "Arizona",
  },
  {
    title: "Verified my dog sitter before leaving town for two weeks. I got a clean report and felt more relaxed knowing I wasn’t handing my baby to a bad person.",
    name: "Alisha A.",
    state: "Washington",
  },
  {
    title: "This is part of our SOP now for onboarding new team members. We verify each new hire’s identity and it hass helped us avoid careless security risks in the past.",
    name: "Brian B.",
    state: "New Jersey",
  },
  {
    title: "A number kept calling my teenage daughter’s phone. Reverse search showed it belonged to an old classmate who always kept bullying her in school. I am so glad we checked the number on My Virtual PI.",
    name: "Angela A.",
    state: "Ohio",
  },
  {
    title: "We used reverse search to confirm the identity of someone calling himself a delivery driver. Turned out to be a scam. This tool saved us from a dangerous situation.",
    name: "Tony T.",
    state: "Texas",
  },
  {
    title: "Reconnected with my college roommate through reverse phone lookup. He had changed numbers and I couldn’t find him anywhere else. This service really surprised me in the best way.",
    name: "Chloe C.",
    state: "California",
  },
  {
    title: "My mom kept receiving calls from a strange number late at night. I used this tool to identify the caller and we were able to block them just in time.",
    name: "Lamar L.",
    state: "Michigan",
  },
  {
    title: "When a guy from Facebook Marketplace gave me his number, I used My Virtual PI to check him out first. Found his real name and info instantly. Very useful.",
    name: "Samantha S.",
    state: "Colorado",
  },
  {
    title: "I have very bad tenant experience previously, my friend Lisa suggested this app for future and upon using it, I can vouch for it to be the safest option before getting a new person in your home.",
    name: "Priya P.",
    state: "California",
  },
  {
    title: "Ran a background check on a private tutor I was hiring for my son. The report was clean and detailed. It helped us trust her more from day one.",
    name: "Charles C.",
    state: "Tennessee",
  },
  {
    title: "We use this during volunteer intake for our youth sports program. It helps keep our kids safe and makes sure every adult is properly vetted.",
    name: "Denise D.",
    state: "North Carolina",
  },
  {
    title: "Checked the criminal history of a rideshare driver I was using regularly for my elderly father. It gave me the peace of mind I didn’t know I needed.",
    name: "Victor V.",
    state: "Pennsylvania",
  },
  {
    title: "We reviewed the history of a new delivery driver before assigning company property. The results were clear and the report was incredibly easy to understand. It’s now a norm for us to run a criminal check on My Virtual PI before we move forward with any employee.",
    name: "Renee R.",
    state: "Texas",
  },
  {
    title: "We screened a potential tenant for my duplex apartment and uncovered a prior eviction that didn’t show up on their application. This tool saved me a huge future headache.",
    name: "Nathan N.",
    state: "Minnesota",
  },
  {
    title: "I verified rental history for a college student looking to sublet. Found a previous eviction he didn’t disclose. I passed on the lease and found someone more reliable.",
    name: "Yasmine Y.",
    state: "Florida",
  },
  {
    title: "I run a small property business and use eviction checks regularly. They help me avoid unnecessary risk and make better decisions about who lives on my properties.",
    name: "John J.",
    state: "Florida",
  },
  {
    title: "I used this before renting to a couple with no credit history. Found clean records and felt comfortable moving forward. It was a great way to verify their responsibility.",
    name: "Nicole N.",
    state: "Tennessee",
  },
  {
    title: "The tool flagged an eviction on a guy claiming to have a clean record. Thanks to My Virtual PI, I didn’t give my apartment to this offender.",
    name: "Roger R.",
    state: "Maryland",
  },
  {
    title: "I hired a virtual assistant and used the workplace search to confirm her past employment. Everything seemed good and oh man I got one of my best employees.",
    name: "Elliot E.",
    state: "California",
  },
  {
    title: "Checked out a freelancer’s background with this tool before hiring. Super helpful and gave me peace of mind. Definitely something I’ll use again before bringing anyone on board.",
    name: "Sandra S.",
    state: "Oregon",
  },
  {
    title: "We hired a remote copywriter and confirmed her past agency roles using this tool. It aligned with her resume and helped us fast-track her onboarding.",
    name: "Tina T.",
    state: "Utah",
  },
  {
    title: "I always had a little difficulty trusting new employees, with this app, the problem is solved because all I have to do now is check the profile and I am good to go.",
    name: "Bruce B.",
    state: "Ohio",
  },
  {
    title: "One of our applicants claimed to work for a tech company that didn’t exist. This tool confirmed our suspicions and helped us avoid a potential security issue.",
    name: "Lily L.",
    state: "Illinois",
  },
  {
    title: "I checked out a wedding photographer’s business info before booking. The records were clean and good to go. Honestly, I felt a lot better confirming they were legitimate.",
    name: "Zaid Z.",
    state: "North Carolina",
  },
  {
    title: "We were considering a new digital marketing agency. Business search revealed some critical legal filings. That helped us choose a different provider with a clean background.",
    name: "Maggie M.",
    state: "New York",
  },
  {
    title: "We used this to check out a printing vendor for our nonprofit. Everything looked legit, and the clean history gave us confidence to move forward with a long-term deal.",
    name: "Reggie R.",
    state: "Missouri",
  },
  {
    title: "Found out a vendor who pitched us wasn’t even legally registered. Saved our finance team from making a costly mistake. We now run every new lead through here.",
    name: "Olivia O.",
    state: "California",
  },
  {
    title: "I looked for the construction manager who offered to work for half of the market prices, Goodness that I checked, this guy was a fraud. I backed off just in time.",
    name: "Isaac I.",
    state: "Idaho",
  }
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
                      modules={[Autoplay]}
                      spaceBetween={20}
                      slidesPerView={1}
                      loop={true}
                      centeredSlides={true}
                      speed={2000}
                      autoplay={{
                        delay: 100,
                        disableOnInteraction: false,
                      }}
                      onSlideChange={(swiper) =>
                        setActiveIndex(swiper.realIndex)
                      }
                      breakpoints={{
                        // 768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                      }}
                      // pagination={{ clickable: true }}
                    >
                      {reviewsData.map((item, index) => (
                        <SwiperSlide key={index}>
                          <TestimonialCard
                            // flexVariant={item.flexVariant}
                            // bgColor={item.bgColor}
                            {...({
                              flexVariant: "row",
                              bgColor: "lightGray",
                            })}
                            title={item.title}
                            ratingNumber={item.ratingNumber}
                            name={item.name}
                            state={item.state}
                            // userImg={item.userImg}
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
