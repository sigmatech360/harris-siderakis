import React from "react";

const PlanCard = (props) => {
  return (
    <div className="plan-card">
      <div className="plan-card-header">
        <div className="plan-card-title">
          <h3>{props.name}</h3>
          <p>({props.duration})</p>
        </div>
        <h2 className="plan-card-price">${props.price}</h2>
      </div>
      <div className="plan-card-body">
        <ul className="plan-card-list">
          {props.list.map((item, index) => (
            <li className="plan-card-list-item" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanCard;
