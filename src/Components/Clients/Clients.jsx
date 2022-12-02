import React, { useEffect, useState } from "react";
import data from "./ClientApi";
import ClientSlider from "./ClientSlider";
import "./Clients.css";

const Clients = () => {
  const [date] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = date.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, date]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <React.Fragment>
      <section className="client" id="client">
        <div className="container top">
          <div className="heading text-center">
            <h4>WHAT CLIENTS SAY ABOUT ME </h4>
            <h1>Testimonials</h1>
          </div>
          <div className="slider">
            {date.map((value, valueIndex) => {
              return (
                <ClientSlider
                  key={value.id}
                  {...value}
                  valueIndex={valueIndex}
                  index={index}
                />
              );
            })}
            <div className="slide-btn">
              <button
                className="btn-shadow prev-btn"
                onClick={() => setIndex(index - 1)}
              >
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
              </button>
              <button
                className="btn-shadow next-btn"
                onClick={() => setIndex(index + 1)}
              >
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Clients;
