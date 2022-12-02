import React from "react";
import "../Features/Features.css";
import Card from "./Card";
import data from "../Features/FeaturesApi";
const Features = () => {
  return (
    <React.Fragment>
      <section className="features top" id="features">
        <div className="container">
          <div className="heading">
            <h4>Features</h4>
            <h1>What I Do</h1>
          </div>
          <div className="content grid">
            {data.map((val, index) => {
              return (
                <Card
                  key={index}
                  image={val.image}
                  title={val.title}
                  desc={val.decs}
                />
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Features;
