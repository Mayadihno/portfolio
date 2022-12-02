import React from "react";
import data from "../Clients/ClientApi";

const ClientSlider = ({
  id,
  name,
  design,
  officer,
  post,
  date,
  desc,
  image,
  valueIndex,
  index,
}) => {
  let position = "nextSlider";

  if (valueIndex === index) {
    position = "activeSlider";
  }
  if (
    valueIndex === index - 1 ||
    (index === 0 && valueIndex === data.length - 1)
  ) {
    position = "lastSlider";
  }
  return (
    <React.Fragment>
      <article className={`d_flex ${position}`} key={id}>
        <div className="left box-shadow">
          <div className="img">
            <img src={image} alt="" />
          </div>
          <div className="details mtop">
            <span>{design}</span>
            <h2>{name}</h2>
            <label>{officer}</label>
          </div>
        </div>
        <div className="right">
          <div className="icon">
            <div className="quote">
              <i class="fa fa-quote-right" aria-hidden="true"></i>
            </div>
          </div>
          <div className="content box-shadow mtop">
            <h1>{post}</h1>
            <h3>{date}</h3>
            <h3>{desc}</h3>
          </div>
        </div>
      </article>
    </React.Fragment>
  );
};

export default ClientSlider;
