import "../Resume/Resume.css";
import React from "react";
import data from "./ResumeApi";
import ResumeCard from "./ResumeCard";

const Resume = () => {
  return (
    <React.Fragment>
      <section className="resume" id="resume">
        <div className="container top">
          <div className="heading text-center">
            <h4>3+ YEARS OF EXPERIENCE</h4>
            <h1>My Resume</h1>
          </div>
          <div className="d_flex mtop content-section">
            <div className="left">
              <div className="heading">
                <h4>2018-Present</h4>
                <h1>Education Quality</h1>
              </div>
              <div className="content">
                {data.map((val, id) => {
                  if (val.category === "Education") {
                    return (
                      <ResumeCard
                        key={id}
                        cat={val.category}
                        school={val.school}
                        course={val.course}
                        desc={val.desc}
                        rate={val.rate}
                      />
                    );
                  }
                })}
              </div>
            </div>
            <div className="left">
              <div className="heading">
                <h4>2018-Present</h4>
                <h1>Job Experience</h1>
              </div>
              <div className="content">
                {data.map((val, id) => {
                  if (val.category === "Experience") {
                    return (
                      <ResumeCard
                        key={id}
                        cat={val.category}
                        school={val.school}
                        course={val.course}
                        desc={val.desc}
                        rate={val.rate}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Resume;
