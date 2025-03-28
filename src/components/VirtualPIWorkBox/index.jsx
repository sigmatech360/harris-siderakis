import React from "react";

const VirtualPIWorkBox = (props) => {
  return (
    <div className="v_pi_work_box" style={{ backgroundImage: `url(${props.bgImage})` }}>
      <div className="v_pi_work_box_head">
        <div className="v_pi_work_box_icon">
          <img src={props.icon} alt="" />
        </div>
        <h5>{props.title}</h5>
      </div>
      <p>{props.description}</p>
    </div>
  );
};

export default VirtualPIWorkBox;
