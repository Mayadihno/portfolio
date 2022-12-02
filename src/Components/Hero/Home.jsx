import React from "react";
import "../Hero/Home.css";
import { useTypewriter } from "react-simple-typewriter";
import image2 from "../pics/PHP-Logo-Free-Download-PNG.png";
import image3 from "../pics/react-logo.jpg";
import image4 from "../pics/javascript.png";
import image5 from "../pics/laravel.png";
import image6 from "../images/image3.jpeg";
const Home = () => {
  const { text } = useTypewriter({
    words: [
      " Professional",
      " Frontend(React Js,Jquery)",
      " And Backend(PHP,Laravel)",
      " Web Developer.",
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <React.Fragment>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY PROGRAMMING WORLD</h3>
            <h1>
              I'm <span>Maya Tunde Olawale</span>
            </h1>
            <h2>
              a
              <span className="writer">
                {text}
                <span className="cursor">|</span>
              </span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              saepe accusamus deserunt assumenda, aliquid tenetur odio officia!
              Itaque fugiat nam esse quas natus iusto quo, voluptates
              consequatur officia quibusdam eius.
            </p>
            <div className="heroBtn d_flex">
              <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <button className="btn-shadow">
                    <i class="fab fa-facebook" aria-hidden="true"></i>
                  </button>
                  <button className="btn-shadow">
                    <i class="fab fa-instagram" aria-hidden="true"></i>
                  </button>
                  <button className="btn-shadow">
                    <i class="fab fa-linkedin" aria-hidden="true"></i>
                  </button>
                  <button className="btn-shadow">
                    <i class="fab fa-twitter" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <div className="col_1">
                <h4>BEST SKILL ON</h4>
                <button className="btn-shadow">
                  <img src={image2} alt="" className="image" />
                </button>
                <button className="btn-shadow">
                  <img src={image3} alt="" />
                </button>
                <button className="btn-shadow">
                  <img src={image4} alt="" />
                </button>
                <button className="btn-shadow">
                  <img src={image5} alt="" />
                </button>
                <button className="btn-shadow">
                  <img src={image5} alt="" />
                </button>
                <button className="btn-shadow">
                  <img src={image5} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="rightImg">
              <img src={image6} alt="" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
