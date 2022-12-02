import React, { useState } from "react";

const Cards = ({ img, cat, total, title }) => {
  const [Modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!Modal);
  };
  return (
    <React.Fragment>
      <div className="box btn-shadow" onClick={toggleModal}>
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="category d_flex">
          <span onClick={toggleModal}>{cat}</span>
          <label>
            <i class="fa fa-heart" aria-hidden="true"></i>
            {total}
          </label>
        </div>
        <div className="title">
          <h2 onClick={toggleModal}>{title}</h2>
          <a href="#popup" className="arrow" onClick={toggleModal}>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      {/* POPUP MODAL */}
      {Modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}>
            <div className="modal-content d_flex">
              <div className="modal-img left">
                <img src={img} alt="" />
              </div>
              <div className="modal-text right">
                <span>Featured - Design</span>
                <h1>{title}</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  praesentium reiciendis rerum repellendus. Ratione hic ipsa,
                  natus eum tempora consequuntur?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates architecto unde labore pariatur magnam delectus
                  dignissimos nulla mollitia doloribus voluptatibus.
                </p>
                <div className="button f_flex mtop">
                  <button className="btn-shadow">
                    LIKE THIS <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                  </button>
                  <button className="btn-shadow">
                    VIEW PROJECT
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                  </button>
                </div>
                <button
                  onClick={toggleModal}
                  className="close-modal btn-shadow"
                >
                  <i class="fa fa-times" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Cards;
