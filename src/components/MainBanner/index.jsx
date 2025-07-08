import React from "react";
import videoBg from "../../assets/banner-bg-video.mp4";
import mainbannerbggif from "../../assets/main-banner-bg-gif.mp4";
import { useNavigate } from "react-router-dom";

const MainBanner = ({setSearchBy, setShowModal}) => {
  
  const navigate = useNavigate();
  // const handleNameModal = () =>{
  //   setShowModal(true);
  //   setSearchBy('name');
  //   navigate('/search?searchby=name')
  // }
  // const handlePhoneModal = () =>{
  //   setShowModal(true);
  //   setSearchBy('phone');
  // }
  // const handleEmailModal = () =>{
  //   setShowModal(true);
  //   setSearchBy('email');
  // }
  // const handleAddressModal = () =>{
  //   setShowModal(true);
  //   setSearchBy('address');
  // }
  return (
    <section className="main-banner">
      <video autoPlay loop muted playsInline>
        <source src={mainbannerbggif} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="main-banner-content">
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="0"
              >
                Personal investigations made easy with AI at your fingertips
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                Search Anything, Anytime From Background Checks to Criminal
                Records—All at Your Fingertips.
              </p>
            </div>
            <div className="line-animation-wrapper-outer">
              <div className="line-animation-wrapper">
                <div className="line-animation-container" id="line1">
                  <div className="line-vertical"></div>
                  <div className="line-horizontal"></div>
                  <button className="animated-btn" onClick={()=>navigate('/search?searchby=name')}>Name</button>
                </div>
                <div className="line-animation-container" id="line2">
                  <div className="line-vertical"></div>
                  <div className="line-horizontal"></div>
                  <button className="animated-btn" onClick={()=>navigate('/search?searchby=email') }>Email</button>
                </div>
                <div className="line-animation-container" id="line3">
                  <div className="line-vertical"></div>
                  <div className="line-horizontal"></div>
                  <button className="animated-btn" onClick={()=>navigate('/search?searchby=phone')}>Phone</button>
                </div>
                <div className="line-animation-container" id="line4">
                  <div className="line-vertical"></div>
                  <div className="line-horizontal"></div>
                  <button className="animated-btn" onClick={()=>navigate('/search?searchby=address')}>Address</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
