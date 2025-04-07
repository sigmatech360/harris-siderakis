import React from "react";

const OneReportCard = (props) => {
  return (
    <div className="one-report-card">
      <div className="one-report-card-content">
        <div className="one-report-card-head">
          <h4>{props.title}</h4>
          <p>({props.duration})</p>
        </div>
        <h3 className="one-report-card-price">{props.price}</h3>
        <ul className="one-report-card-list">
          {props.features.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <button className="one-report-card-btn">Get this Plan</button>
    </div>
  );
};

export default OneReportCard;
