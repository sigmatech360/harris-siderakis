import React from "react";
import reviewsbannerbg from "../../assets/reviews-banner-bg.mp4";

import review_b_img1 from "../../assets/review-b-img-1.png";
import review_b_img2 from "../../assets/review-b-img-2.png";
import review_b_img3 from "../../assets/review-b-img-3.png";
import review_b_img4 from "../../assets/review-b-img-4.png";
import review_b_img5 from "../../assets/review-b-img-5.png";

const bannerIconImgDta = [
  {
    id: 1,
    image: review_b_img1,
    name: "I found a lawsuit history",
  },
  {
    id: 2,
    image: review_b_img2,
    name: "I found a lawsuit history",
  },
  {
    id: 3,
    image: review_b_img3,
    name: "I found a lawsuit history",
  },
  {
    id: 4,
    image: review_b_img4,
    name: "I found a lawsuit history",
  },
  {
    id: 5,
    image: review_b_img5,
    name: "I found a lawsuit history",
  },
];

const InnerBanner = (props) => {
  return (
    <section
      className="innerBanner"
      style={{ backgroundImage: `url(${props.bgImage})` }}
    >
      {props.bgVideo && (
        <video autoPlay loop muted playsInline>
          <source src={reviewsbannerbg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="innerBanner-content">
              <h1>
                {props.title1}{" "}
                {props.titleBold && (
                  <span className="fw-bold">{props.titleBold}</span>
                )}{" "}
                {props.title2 && props.title2}
              </h1>
              <p>{props.description}</p>
              {props.children}
            </div>
          </div>
          <div className="col-lg-6">
            {props.reviewsRightContent && (
              <>
                <div className="reviewRightContent">
                  {bannerIconImgDta.map((item, index) => (
                    <div className={`reviewContentBox reviewContentBox-${index + 1}`} key={index}>
                      <img src={item.image} alt="" />
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerBanner;
