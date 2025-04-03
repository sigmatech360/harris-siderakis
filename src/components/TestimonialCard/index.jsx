import React from "react";
import ratingimg from "../../assets/rating-img.png";

const TestimonialCard = ({
  title,
  ratingNumber,
  name,
  state,
  userImg,
  flexVariant,
  bgColor,
}) => {
  return (
    <div
      className={`testimonial-card testimonial-card-flex-${flexVariant} ${bgColor}`}
    >
      <div className="testimonial-card-content">
        <h4>{title}</h4>
        <div className="testimonial-rating-details">
          <div className="testimonial-rating">
            <div className="testimonial-rating-stars">
              <img src={ratingimg} alt="" />
            </div>
            <p>{ratingNumber}</p>
          </div>
          <div className="testimonial-user">
            <h5>{name}</h5>
            <p>{state}</p>
          </div>
        </div>
      </div>
      <div className="testimonial-card-img">
        <img src={userImg} className="img-fluid" alt="" />
      </div>
    </div>
  );
};

export default TestimonialCard;
