import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import MainBanner from "../../components/MainBanner";

import { RiSecurePaymentFill } from "react-icons/ri";

import searchbyname from "../../assets/search-by-name.png";
import searchbyemail from "../../assets/search-by-email.png";
import searchbyphone from "../../assets/search-by-phone.png";
import searchbyaddress from "../../assets/search-by-address.png";

import searchSmarterImg1 from "../../assets/01-img.png";
import searchSmarterImg2 from "../../assets/02-img.png";
import searchSmarterImg3 from "../../assets/01-img.png";

import howv_pi_work_img1 from "../../assets/how-v-pi-work-img1.png";
import howv_pi_work_img2 from "../../assets/how-v-pi-work-img2.png";
import howv_pi_work_img4 from "../../assets/how-v-pi-work-img4.png";

import viewdownloadicon from "../../assets/view-download-icon.png";
import runsearchicon from "../../assets/run-search-icon.png";
import datingappicon from "../../assets/dating-app-icon.png";
import enterdetailsicon from "../../assets/enter-details-icon.png";
import VirtualPIWorkBox from "../../components/VirtualPIWorkBox";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const virtualPiBoxesContent = [
  {
    id: 1,
    image: searchbyname,
    name: "Search by Name",
  },
  {
    id: 2,
    image: searchbyemail,
    name: "Search by Email",
  },
  {
    id: 3,
    image: searchbyphone,
    name: "Search by Phone",
  },
  {
    id: 4,
    image: searchbyaddress,
    name: "Search by Address",
  },
];

const searchSmarterBoxContent = [
  {
    id: 1,
    number: "01",
    title: "Enter a Name, Phone, or Address",
    description: "Our AI-enhanced search tool scans public records instantly.",
    image: searchSmarterImg1,
    className: "first-box",
  },
  {
    id: 2,
    number: "02",
    title: "Review Instant Results",
    description: "Get quick insights on people, addresses, and backgrounds.",
    image: searchSmarterImg2,
    className: "second-box",
  },
  {
    id: 3,
    number: "03",
    title: "Access Full Reports",
    description: "Unlock deeper data with a one-time report or subscription",
    image: searchSmarterImg3,
    className: "third-box",
  },
];

const whyChooseData = [
  {
    title: "Empower Yourself to Investigate",
    description:
      "With My Virtual PI, you're in control. No need to rely on third-party investigators; our intuitive platform equips you to perform comprehensive searches.",
    icon: runsearchicon,
  },
  {
    title: "Access Detailed, Trusted Information",
    description:
      "Gain access to in-depth reports covering employment and education history, public records, and safety checks.",
    icon: runsearchicon,
  },
  {
    title: "Enhanced Accuracy with AI Assistance",
    description:
      "Our AI-driven platform doesn’t just present data; it analyzes it, helping you pinpoint relevant information quickly.",
    icon: runsearchicon,
  },
  {
    title: "Enhanced Accuracy with AI Assistance",
    description:
      "Our AI-driven platform doesn’t just present data; it analyzes it, helping you pinpoint relevant information quickly.",
    icon: runsearchicon,
  },
  {
    title: "Enhanced Accuracy with AI Assistance",
    description:
      "Our AI-driven platform doesn’t just present data; it analyzes it, helping you pinpoint relevant information quickly.",
    icon: runsearchicon,
  },
];

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

      {/* <div className="why-choose-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="text-center">
                Why Choose My <strong>Virtual PI?</strong>
              </h2>
            </div>
            <div className="col-lg-12">
              <div className="swiper-container">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
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
                      <div className="feature-card">
                        <img src={item.icon} alt="" />
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-button-prev">
                  <FaArrowLeft />
                </div>
                <div className="swiper-button-next">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

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
