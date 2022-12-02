import React from "react";

const ResumeCard = (props) => {
  return (
    <React.Fragment>
      <div className="box btn-shadow">
        <div className="text-content d_flex">
          <div className="title">
            <h2>{props.cat}</h2>
            <span>{props.school}</span> <br />
            <h4
              style={{ marginTop: "10px", color: " #3c3e41", fontSize: "20px" }}
            >
              {props.course}
            </h4>
          </div>
          <div className="rate">
            <span>{props.rate}</span>
          </div>
        </div>
        <hr />
        <p>{props.desc}</p>
      </div>
    </React.Fragment>
  );
};

export default ResumeCard;
