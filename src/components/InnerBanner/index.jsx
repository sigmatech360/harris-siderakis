import React from "react";

const InnerBanner = (props) => {
  return (
    <section
      className="innerBanner"
      style={{ backgroundImage: `url(${props.bgImage})` }}
    >
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
          <div className="col-lg-6"></div>
        </div>
      </div>
    </section>
  );
};

export default InnerBanner;
