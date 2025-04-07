import React from "react";

const PricingPlanCard = (props) => {
  return (
    <div className="pricing-plan-card">
      <div className="pricing-plan-card-content">
        <div className="pricing-plan-card-head">
          <h4>{props.title}</h4>
          <p>({props.duration})</p>
        </div>
        <h3 className="pricing-plan-card-price">{props.price}</h3>
        <ul className="pricing-plan-card-list">
          {props.features.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <button className="pricing-plan-card-btn">Get this Plan</button>
    </div>
  );
};

export default PricingPlanCard;
