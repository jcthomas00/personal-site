import Experience from "./Experience";
import Education from "./Education";

const Resume = () => {
     return (

          <div className="card-inner active" id="resume-card">
               <div className="card-wrap">
                    {/*
                            Resume
                       */}
                    <div className="content resume">
                         {/* title */}
                         <div className="title">Resume</div>
                         {/* content */}
                         <div className="row">
                              {/* experience */}
                              <Experience />
                              {/* education */}
                              <div className="clear" />
                              <Education />
                         </div>
                    </div>
                    {/*
                            Skills
                       */}
                    {/*
                            Testimonials
                       */}
                    <div className="content testimonials">
                         {/* title */}
                         <div className="title">Testimonials</div>
                         {/* content */}
                         <div className="row testimonials-items">
                              {/* client item */}
                              <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                                   <div className="revs-carousel default-revs">
                                        <div className="owl-carousel">
                                             <div className="item">
                                                  <div className="revs-item">
                                                       <div className="text">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                                                            consectetur adipiscing elit.
                  </div>
                                                       <div className="user">
                                                            <div className="img"><img src="images/man1.jpg" alt="" /></div>
                                                            <div className="info">
                                                                 <div className="name">Helen Floyd</div>
                                                                 <div className="company">Art Director</div>
                                                            </div>
                                                            <div className="clear" />
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="item">
                                                  <div className="revs-item">
                                                       <div className="text">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                                                            consectetur adipiscing elit.
                  </div>
                                                       <div className="user">
                                                            <div className="img"><img src="images/man1.jpg" alt="" /></div>
                                                            <div className="info">
                                                                 <div className="name">Robert Chase</div>
                                                                 <div className="company">CEO</div>
                                                            </div>
                                                            <div className="clear" />
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="item">
                                                  <div className="revs-item">
                                                       <div className="text">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                                                            consectetur adipiscing elit.
                  </div>
                                                       <div className="user">
                                                            <div className="img"><img src="images/man1.jpg" alt="" /></div>
                                                            <div className="info">
                                                                 <div className="name">Helen Floyd</div>
                                                                 <div className="company">Art Director</div>
                                                            </div>
                                                            <div className="clear" />
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="clear" />
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Resume;