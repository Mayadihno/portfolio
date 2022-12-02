import React from "react";

const Card = (props) => {
  return (
    <React.Fragment>
      <div className="box btn-shadow">
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <a href="#h">
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </React.Fragment>
  );
};

export default Card;
