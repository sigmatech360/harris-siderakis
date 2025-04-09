import React from "react";
import videoBg from "../../assets/banner-bg-video.mp4";

const MainBanner = () => {
  return (
    <section className="main-banner">
      <video autoPlay loop muted playsInline>
        <source src={videoBg} type="video/mp4" />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
