import React from "react";

export default function Education() {
  const progressBarStyle = {
    background: '#b636ff',
    borderRadius: '3px',
    WebkitTransition: 'width 1.5s ease-in-out',
    MsTransition: 'width 1.5s ease-in-out',
    MozTransition: 'width 1.5s ease-in-out',
    OTransition: 'width 1.5s ease-in-out',
    transition: 'width 1.5s ease-in-out'
  };


  return (
    <>
      <section id="education" className="education">
        <div className="section-heading text-center">
          <h2>education</h2>
        </div>
        <div className="container">
          <div className="education-horizontal-timeline">
            <div className="row">
              <div className="col-sm-4">
                <div className="single-horizontal-timeline">
                  <div className="experience-time">
                    <h2>2017 - 2021</h2>
                    <h3>
                      Barchelor <span>in </span> Actuarial Science
                    </h3>
                  </div>
                  <div className="timeline-horizontal-border">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <span className="single-timeline-horizontal"></span>
                  </div>
                  <div className="timeline">
                    <div className="timeline-content">
                      <h4 className="title">
                        The Catholic University
                      </h4>
                      <h5>Eastern Africa, Kenya</h5>
                      <p className="description">
                        I graduated with a Bachelor of degree in Actuarial science.
                        The course is mainly about  mathematical computations , with
                        some focus on programming.
                       I happened to have learned about <b>C</b> programming 
                       and <b>R</b> programming language for data science.
                      
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="single-horizontal-timeline">
                  <div className="experience-time">
                    <h2>2020 - 2021</h2>
                    <h3>
                      Certificate <span>in </span> Enterpise Systems Management.
                    </h3>
                  </div>
                  <div className="timeline-horizontal-border">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <span className="single-timeline-horizontal"></span>
                  </div>
                  <div className="timeline">
                    <div className="timeline-content">
                      <h4 className="title">
                        university of California
                      </h4>
                      <h5>California, USA</h5>
                      <p className="description">
                       I undertook an online course in managing project risks, as well as 
                       Enterprise Systems Management.
                       I wanted to understand on developing and implementing  secure digital systems
                       in an organization.
                       All with accredited certifications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="single-horizontal-timeline">
                  <div className="experience-time">
                    <h2>2022 - 2023</h2>
                    <h3>
                    Frontend <span>and </span> web development
                    </h3>
                  </div>
                  <div className="timeline-horizontal-border">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <span
                      className="single-timeline-horizontal spacial-horizontal-line
									"
                    ></span>
                  </div>
                  <div className="timeline">
                    <div className="timeline-content">
                      <h4 className="title">ALX Bootcamp</h4>
                      <h5>Africa, Kenya</h5>
                      <p className="description">
                       I enrolled for 9 months  software engineering in ALX bootcamp, 
                       ALX bootcamp provides foundation in diverse fields in Computer science.
                       The program is designed by a team of experienced developers </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="skills">
        <div className="skill-content">
          <div className="section-heading text-center">
            <h2>skills</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="single-skill-content">
                  <div className="barWrapper">
                    <span className="progressText">JavaScript</span>
                    <div className="single-progress-txt">
                      <div className="progress ">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="90"
                          aria-valuemin="10"
                          aria-valuemax="100"
                          style={progressBarStyle}
                        ></div>
                      </div>
                      <h3>90%</h3>
                    </div>
                  </div>
                  <div className="barWrapper">
                    <span className="progressText">React</span>
                    <div className="single-progress-txt">
                      <div className="progress ">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="85"
                          aria-valuemin="10"
                          aria-valuemax="100"
                        //   style={""}
                        ></div>
                      </div>
                      <h3>85%</h3>
                    </div>
                  </div>
                  <div className="barWrapper">
                    <span className="progressText">HTML 5</span>
                    <div className="single-progress-txt">
                      <div className="progress ">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="97"
                          aria-valuemin="10"
                          aria-valuemax="100"
                        //   style={""}
                        ></div>
                      </div>
                      <h3>97%</h3>
                    </div>
                  </div>
                  <div className="barWrapper">
                    <span className="progressText">CSS3</span>
                    <div className="single-progress-txt">
                      <div className="progress ">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="90"
                          aria-valuemin="10"
                          aria-valuemax="100"
                        //   style={""}
                        ></div>
                      </div>
                      <h3>90%</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-skill-content">
                  <div className="barWrapper">
                    <span className="progressText">Material UI</span>
                    <div className="single-progress-txt">
                      <div className="progress ">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="90"
                          aria-valuemin="10"
                          aria-valuemax="100"
                        //   style={""}
                        ></div>
                      </div>
                      <h3>90%</h3>
                    </div>
                  </div>
                  <div className="barWrapper">
                    <span className="progressText">Python</span>
                    <div className="single-progress-txt">
                      <div className="progress ">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="85"
                          aria-valuemin="10"
                          aria-valuemax="100"
                        //   style={""}
                        ></div>
                      </div>
                      <h3>85%</h3>
                    </div>
                  </div>
                  <div className="barWrapper">
                    <span className="progressText">communication</span>
                    <div className="single-progress-txt">
                      <div className="progress ">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="97"
                          aria-valuemin="10"
                          aria-valuemax="100"
                        //   style={""}
                        ></div>
                      </div>
                      <h3>97%</h3>
                    </div>
                  </div>
                  <div className="barWrapper">
                    <span className="progressText"> creativity</span>
                    <div className="single-progress-txt">
                      <div className="progress ">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="90"
                          aria-valuemin="10"
                          aria-valuemax="100"
                        //   style={""}
                        ></div>
                      </div>
                      <h3>90%</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
