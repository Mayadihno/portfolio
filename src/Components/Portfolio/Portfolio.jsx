import React from "react";
import Cards from "./Cards";
import data from "./Portfolio_data";
import "../Portfolio/Portfolio.css";

const Portfolio = () => {
  return (
    <React.Fragment>
      <section className="portfolio top" id="portfolio">
        <div className="container">
          <div className="heading text-center">
            <h4>Welcome to my Portfolio</h4>
            <h1>My Portfolio</h1>
          </div>
          <div className="content grid">
            {data.map((val, index) => {
              return (
                <Cards
                  key={index}
                  img={val.image}
                  cat={val.category}
                  total={val.totalLikes}
                  title={val.title}
                />
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Portfolio;
