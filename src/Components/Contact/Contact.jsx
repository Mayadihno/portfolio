import React, { useState } from "react";
import contact1 from "../images/image2.jpeg";
import emailjs from "emailjs-com";
import "../Contact/Contact.css";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const formSubmit = (event) => {
    event.preventDefault();

    alert(
      `my name is ${data.name}.
            my phone Number is ${data.phone}.
            my email address is ${data.email}.
            my subject on ${data.subject}.
            Here is my message i want to say : ${data.message}
            `
    );

    emailjs
      .sendForm(
        "service_jlpkyyb",
        "template_6btxk8s",
        event.target,
        "0RwIucuJJihXwNViI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  };
  return (
    <React.Fragment>
      <section className="contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>
          <div className="content d_flex">
            <div className="left">
              <div className="box-shadow box">
                <div className="img">
                  <img src={contact1} alt="" />
                </div>
                <div className="details">
                  <h1>Maya Tunde Olawale</h1>
                  <p>
                    I'm available for freelancing work. Connect with me Via and
                    Call me into account
                  </p>
                  <br />
                  <p>Phone Number: +2348136908207, +2348088060220</p>
                  <p>E-mail Address: Mayadihno@gmail.com</p> <br />
                  <span>Find Me With</span>
                  <div className="button f_flex">
                    <button className="btn-shadow">
                      <i
                        className="fab fa-facebook fa-2x"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <button className="btn-shadow">
                      <i
                        className="fab fa-twitter fa-2x"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <button className="btn-shadow">
                      <i
                        className="fab fa-linkedin fa-2x"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="right box-shadow">
              <div className="text-center">
                <h2>Send Feedback to Mayadihno</h2>
              </div>
              <form onSubmit={formSubmit}>
                <div className="f_flex">
                  <div className="input row">
                    <span>YOUR NAME</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Full Name"
                      value={data.name}
                      onChange={InputEvent}
                    />
                  </div>
                  <div className="input row">
                    <span>YOUR NUMBER</span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter Phone Number"
                      value={data.phone}
                      onChange={InputEvent}
                    />
                  </div>
                </div>
                <div className="input">
                  <span>YOUR EMAIL</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter E-mail Address"
                    value={data.email}
                    onChange={InputEvent}
                  />
                </div>
                <div className="input">
                  <span>YOUR SUBJECT</span>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Message Subject"
                    value={data.subject}
                    onChange={InputEvent}
                  />
                </div>
                <div className="input">
                  <span>YOUR MESSAGE</span>
                  <textarea
                    col="50"
                    row="20"
                    placeholder="Enter Your Feedback Here"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}
                  ></textarea>
                </div>
                <button className="btn-shadow">
                  SEND MESSAGE
                  <i className="fab fa-telegram fa-2x" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
