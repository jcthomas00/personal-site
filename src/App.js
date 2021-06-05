import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <div class="container opened" data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">

        {/*
				Header
			*/}
        <Header />
        {/*
				Card - Started
			*/}
        <div className="card-started" id="home-card">
          {/*
					Profile
				*/}
          <div className="profile no-photo">
            {/* profile image */}
            <div className="slide" style={{ backgroundImage: 'url(images/man5_big.jpg)' }} />
            {/* profile titles */}
            <div className="title">Ryan Adlard</div>
            {/*<div class="subtitle">Web Designer</div>*/}
            <div className="subtitle subtitle-typed">
              <div className="typing-title">
                <p>Web Designer</p>
                <p>Developer</p>
                <p>Freelancer</p>
              </div>
            </div>
            {/* profile socials */}
            <div className="social">
              <a target="_blank" href="https://dribbble.com/"><span className="fa fa-dribbble" /></a>
              <a target="_blank" href="https://twitter.com/"><span className="fa fa-twitter" /></a>
              <a target="_blank" href="https://github.com/"><span className="fa fa-github" /></a>
              <a target="_blank" href="https://www.spotify.com/"><span className="fa fa-spotify" /></a>
              <a target="_blank" href="https://stackoverflow.com/"><span className="fa fa-stack-overflow" /></a>
            </div>
            {/* profile buttons */}
            <div className="lnks">
              <a href="#" className="lnk">
                <span className="text">Download CV</span>
              </a>
              <a href="#" className="lnk discover">
                <span className="text">Contact Me</span>
              </a>
            </div>
          </div>
        </div>
        {/* 
				Card - About
			*/}
        <div className="card-inner animated active" id="about-card">
          <div className="card-wrap">
            {/* 
						About 
					*/}
            <div className="content about">
              {/* title */}
              <div className="title">About Me</div>
              {/* content */}
              <div className="row">
                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                  <div className="text-box">
                    <p>
                      I am Ryan Adlard, web designer from USA, California. I have rich experience in
                      web site design and building and customization, also I am good at wordpress.
                      I love to talk with you about our unique.
              </p>
                  </div>
                </div>
                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                  <div className="info-list">
                    <ul>
                      <li><strong>Age . . . . .</strong> 24</li>
                      <li><strong>Residence . . . . .</strong> USA</li>
                      <li><strong>Freelance . . . . .</strong> Available</li>
                      <li><strong>Address . . . . .</strong> California, USA</li>
                    </ul>
                  </div>
                </div>
                <div className="clear" />
              </div>
            </div>
            {/*
						Services
					*/}
            <div className="content services">
              {/* title */}
              <div className="title">My Services</div>
              {/* content */}
              <div className="row service-items border-line-v">
                {/* service item */}
                <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                  <div className="service-item">
                    <div className="icon">
                      <span className="fa fa-code" />
                    </div>
                    <div className="name">
                      <span>
                        Web Development </span>
                    </div>
                    <div className="desc">
                      <div>
                        <p>Modern and mobile-ready website that will help you reach all of your marketing.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* service item */}
                <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                  <div className="service-item">
                    <div className="icon">
                      <span className="fa fa-music" />
                    </div>
                    <div className="name">
                      <span>
                        Music Writing </span>
                    </div>
                    <div className="desc">
                      <div>
                        <p>Music copying, writing, creating, transcription, arranging and composition services.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* service item */}
                <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                  <div className="service-item">
                    <div className="icon">
                      <span className="fa fa-buysellads" />
                    </div>
                    <div className="name">
                      <span>
                        Advetising </span>
                    </div>
                    <div className="desc">
                      <div>
                        <p>Advertising services include television, radio, print, mail, and web apps.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* service item */}
                <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                  <div className="service-item">
                    <div className="icon">
                      <span className="fa fa-gamepad" />
                    </div>
                    <div className="name">
                      <span>
                        Game Development </span>
                    </div>
                    <div className="desc">
                      <div>
                        <p>Developing memorable and unique mobile android, ios and video games.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clear" />
            </div>
            {/*
						Price Tables
					*/}
            <div className="content pricing">
              {/* title */}
              <div className="title">Pricing</div>
              {/* content */}
              <div className="row pricing-items">
                {/* pricing item */}
                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                  <div className="pricing-item">
                    <div className="icon"><i className="fa fa-battery-half" /></div>
                    <div className="name">Basic</div>
                    <div className="amount">
                      <span className="dollar">$</span>
                      <span className="number">22</span>
                      <span className="period">hour</span>
                    </div>
                    <div className="feature-list">
                      <ul>
                        <li>Web Development</li>
                        <li>Advetising</li>
                        <li>Game Development</li>
                        <li className="disable">Music Writing</li>
                        <li className="disable">Photography <strong>new</strong></li>
                      </ul>
                    </div>
                    <div className="lnks">
                      <a href="#" className="lnk">
                        <span className="text">Buy Basic</span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* pricing item */}
                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                  <div className="pricing-item">
                    <div className="icon"><i className="fa fa-battery-full" /></div>
                    <div className="name">Pro</div>
                    <div className="amount">
                      <span className="dollar">$</span>
                      <span className="number">48</span>
                      <span className="period">hour</span>
                    </div>
                    <div className="feature-list">
                      <ul>
                        <li>Web Development</li>
                        <li>Advetising</li>
                        <li>Game Development</li>
                        <li>Music Writing</li>
                        <li>Photography <strong>new</strong></li>
                      </ul>
                    </div>
                    <div className="lnks">
                      <a href="#" className="lnk">
                        <span className="text">Buy Pro</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="clear" />
              </div>
            </div>
            {/*
						Fun Fact
					*/}
            <div className="content fuct">
              {/* title */}
              <div className="title">Fun Fact</div>
              {/* content */}
              <div className="row fuct-items">
                {/* fuct item */}
                <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                  <div className="fuct-item">
                    <div className="icon"><span className="fa fa-music" /></div>
                    <div className="name">80 Albumes Listened</div>
                  </div>
                </div>
                {/* fuct item */}
                <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                  <div className="fuct-item">
                    <div className="icon"><span className="fa fa-trophy" /></div>
                    <div className="name">15 Awards Won</div>
                  </div>
                </div>
                {/* fuct item */}
                <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                  <div className="fuct-item">
                    <div className="icon"><span className="fa fa-coffee" /></div>
                    <div className="name">1 000 Cups of coffee</div>
                  </div>
                </div>
                {/* fuct item */}
                <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                  <div className="fuct-item">
                    <div className="icon"><span className="fa fa-flag" /></div>
                    <div className="name">10 Countries Visited</div>
                  </div>
                </div>
                <div className="clear" />
              </div>
            </div>
            {/*
						Clients
					*/}
            <div className="content clients">
              {/* title */}
              <div className="title">Clients</div>
              {/* content */}
              <div className="row client-items">
                {/* client item */}
                <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                  <div className="client-item">
                    <div className="image">
                      <a target="_blank" href="https://www.google.com">
                        <img src="images/clients/client_1.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* client item */}
                <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                  <div className="client-item">
                    <div className="image">
                      <a target="_blank" href="https://www.google.com">
                        <img src="images/clients/client_2.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* client item */}
                <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                  <div className="client-item">
                    <div className="image">
                      <a target="_blank" href="https://www.google.com">
                        <img src="images/clients/client_3.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* client item */}
                <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                  <div className="client-item">
                    <div className="image">
                      <a target="_blank" href="https://www.google.com">
                        <img src="images/clients/client_4.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="clear" />
              </div>
            </div>
            {/* Quote */}
            <div className="content quote">
              {/* title */}
              <div className="title">
                <span>Quote</span>
              </div>
              {/* content */}
              <div className="row">
                <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                  <div className="revs-item">
                    <div className="text">
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                </div>
                    </div>
                    <div className="user">
                      <div className="img">
                        <img src="images/profile.png" alt="Ryan Adlard" />
                      </div>
                      <div className="info">
                        <div className="name">Ryan Adlard</div>
                        <div className="company">Web Designer</div>
                      </div>
                      <div className="clear" />
                    </div>
                  </div>
                </div>
                <div className="clear" />
              </div>
            </div>
          </div>
        </div>
        {/*
				Card - Resume
			*/}
        <div className="card-inner" id="resume-card">
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
                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                  <div className="resume-title border-line-h">
                    <div className="icon"><i className="fa fa-briefcase" /></div>
                    <div className="name">Experience</div>
                  </div>
                  <div className="resume-items">
                    <div className="resume-item border-line-h active">
                      <div className="date">2013 - Present</div>
                      <div className="name">Art Director</div>
                      <div className="company">Facebook Inc.</div>
                      <p>
                        Collaborate with creative and development teams on the execution of ideas.
                </p>
                    </div>
                    <div className="resume-item border-line-h">
                      <div className="date">2011 - 2012</div>
                      <div className="name">Front-end Developer</div>
                      <div className="company">Google Inc.</div>
                      <p>
                        Monitored technical aspects of the front-end delivery for several projects.
                </p>
                    </div>
                    <div className="resume-item">
                      <div className="date">2009 - 2010</div>
                      <div className="name">Senior Developer</div>
                      <div className="company">Abc Inc.</div>
                      <p>
                        Optimize website performance using latest technology.
                </p>
                    </div>
                  </div>
                </div>
                {/* education */}
                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                  <div className="resume-title border-line-h">
                    <div className="icon"><i className="fa fa-university" /></div>
                    <div className="name">Education</div>
                  </div>
                  <div className="resume-items">
                    <div className="resume-item border-line-h">
                      <div className="date">2006 - 2008</div>
                      <div className="name">Art University</div>
                      <div className="company">New York</div>
                      <p>
                        Bachelor's Degree in Computer Science ABC Technical Institute, Jefferson, Missouri
                </p>
                    </div>
                    <div className="resume-item border-line-h">
                      <div className="date">2005 - 2006</div>
                      <div className="name">Programming Course</div>
                      <div className="company">Paris</div>
                      <p>
                        Coursework - Git, WordPress, Javascript, iOS, Android.
                </p>
                    </div>
                    <div className="resume-item">
                      <div className="date">2004 - 2005</div>
                      <div className="name">Web Design Course</div>
                      <div className="company">London</div>
                      <p>
                        Converted Photoshop layouts to web pages using HTML, CSS, and JavaScript
                </p>
                    </div>
                  </div>
                </div>
                <div className="clear" />
              </div>
            </div>
            {/*
						Skills
					*/}
            <div className="content skills">
              {/* title */}
              <div className="title">My Skills</div>
              {/* content */}
              <div className="row">
                {/* skill item */}
                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                  <div className="skills-list">
                    <div className="skill-title border-line-h">
                      <div className="icon"><i className="fa fa-paint-brush" /></div>
                      <div className="name">Design</div>
                    </div>
                    <ul>
                      <li className="border-line-h">
                        <div className="name">Web Design</div>
                        <div className="progress">
                          <div className="percentage" style={{ width: '90%' }} />
                        </div>
                      </li>
                      <li className="border-line-h">
                        <div className="name">Write Music</div>
                        <div className="progress">
                          <div className="percentage" style={{ width: '65%' }} />
                        </div>
                      </li>
                      <li className="border-line-h">
                        <div className="name">Photoshop</div>
                        <div className="progress">
                          <div className="percentage" style={{ width: '75%' }} />
                        </div>
                      </li>
                      <li>
                        <div className="name">Graphic Design</div>
                        <div className="progress">
                          <div className="percentage" style={{ width: '85%' }} />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* skill item */}
                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                  <div className="skills-list dotted">
                    <div className="skill-title border-line-h">
                      <div className="icon"><i className="fa fa-flag" /></div>
                      <div className="name">Languages</div>
                    </div>
                    <ul>
                      <li className="border-line-h">
                        <div className="name">English</div>
                        <div className="progress">
                          <div className="percentage" style={{ width: '90%' }} />
                        </div>
                      </li>
                      <li className="border-line-h">
                        <div className="name">German</div>
                        <div className="progress">
                          <div className="percentage" style={{ width: '60%' }} />
                        </div>
                      </li>
                      <li className="border-line-h">
                        <div className="name">Italian</div>
                        <div className="progress">
                          <div className="percentage" style={{ width: '30%' }} />
                        </div>
                      </li>
                      <li>
                        <div className="name">French</div>
                        <div className="progress ">
                          <div className="percentage" style={{ width: '70%' }} />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* skill item */}
                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                  <div className="skills-list circles">
                    <div className="skill-title border-line-h">
                      <div className="icon"><i className="fa fa-code" /></div>
                      <div className="name">Coding</div>
                    </div>
                    <ul>
                      <li>
                        <div className="name">WordPress</div>
                        <div className="progress p90">
                          <span>90%</span>
                        </div>
                      </li>
                      <li>
                        <div className="name">PHP / MYSQL</div>
                        <div className="progress p75">
                          <span>75%</span>
                        </div>
                      </li>
                      <li>
                        <div className="name">Angular / JavaScript</div>
                        <div className="progress p85">
                          <span>85%</span>
                        </div>
                      </li>
                      <li>
                        <div className="name">HTML / CSS</div>
                        <div className="progress p95">
                          <span>95%</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* skill item */}
                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                  <div className="skills-list list">
                    <div className="skill-title border-line-h">
                      <div className="icon"><i className="fa fa-list" /></div>
                      <div className="name">Knowledge</div>
                    </div>
                    <ul>
                      <li>
                        <div className="name">Website hosting</div>
                      </li>
                      <li>
                        <div className="name">iOS and android apps</div>
                      </li>
                      <li>
                        <div className="name">Create logo design</div>
                      </li>
                      <li>
                        <div className="name">Design for print</div>
                      </li>
                      <li>
                        <div className="name">Modern and mobile-ready</div>
                      </li>
                      <li>
                        <div className="name">Advertising services include</div>
                      </li>
                      <li>
                        <div className="name">Graphics and animations</div>
                      </li>
                      <li>
                        <div className="name">Search engine marketing</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="clear" />
              </div>
            </div>
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
        {/*
				Card - Works
			*/}
        <div className="card-inner" id="works-card">
          <div className="card-wrap">
            {/*
						Works
					*/}
            <div className="content works">
              {/* title */}
              <div className="title">Recent Works</div>
              {/* filters */}
              <div className="filter-menu filter-button-group">
                <div className="f_btn active">
                  <label><input type="radio" name="fl_radio" defaultValue="grid-item" />All</label>
                </div>
                <div className="f_btn">
                  <label><input type="radio" name="fl_radio" defaultValue="photo" />Image</label>
                </div>
                <div className="f_btn">
                  <label><input type="radio" name="fl_radio" defaultValue="gallery" />Gallery</label>
                </div>
                <div className="f_btn">
                  <label><input type="radio" name="fl_radio" defaultValue="video" />Video</label>
                </div>
                <div className="f_btn">
                  <label><input type="radio" name="fl_radio" defaultValue="music" />Music</label>
                </div>
                <div className="f_btn">
                  <label><input type="radio" name="fl_radio" defaultValue="design" />Content</label>
                </div>
              </div>
              {/* content */}
              <div className="row grid-items border-line-v">
                {/* work item photo */}
                <div className="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
                  <div className="box-item">
                    <div className="image">
                      <a href="images/works/work1.jpg" className="has-popup-image">
                        <img src="images/works/work1.jpg" alt="" />
                        <span className="info">
                          <span className="ion ion-image" />
                        </span>
                      </a>
                    </div>
                    <div className="desc">
                      <a href="images/works/work1.jpg" className="name has-popup-image">Motorcycle Helmet</a>
                      <div className="category">Image</div>
                    </div>
                  </div>
                </div>
                {/* work item video */}
                <div className="col col-d-6 col-t-6 col-m-12 grid-item video border-line-h">
                  <div className="box-item">
                    <div className="image">
                      <a href="https://vimeo.com/97102654" className="has-popup-video">
                        <img src="images/works/work2.jpg" alt="" />
                        <span className="info">
                          <span className="ion ion-videocamera" />
                        </span>
                      </a>
                    </div>
                    <div className="desc">
                      <a href="https://vimeo.com/97102654" className="name has-popup-video">Minimalism Shapes</a>
                      <div className="category">Video</div>
                    </div>
                  </div>
                </div>
                {/* work item music */}
                <div className="col col-d-6 col-t-6 col-m-12 grid-item music border-line-h">
                  <div className="box-item">
                    <div className="image">
                      <a href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true" className="has-popup-music">
                        <img src="images/works/work3.jpg" alt="" />
                        <span className="info">
                          <span className="ion ion-music-note" />
                        </span>
                      </a>
                    </div>
                    <div className="desc">
                      <a href="#" className="name has-popup">Staircase</a>
                      <div className="category">Music</div>
                    </div>
                  </div>
                </div>
                {/* work item design */}
                <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
                  <div className="box-item">
                    <div className="image">
                      <a href="#popup-1" className="has-popup-media">
                        <img src="images/works/work4.jpg" alt="" />
                        <span className="info">
                          <span className="ion ion-images" />
                        </span>
                      </a>
                    </div>
                    <div className="desc">
                      <a href="#popup-1" className="name has-popup-media">Mobile Application</a>
                      <div className="category">Content</div>
                    </div>
                    <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                      <div className="content">
                        <div className="image">
                          <img src="images/works/work4.jpg" alt="" />
                        </div>
                        <div className="desc">
                          <div className="post-box">
                            <h1>Mobile Application</h1>
                            <div className="blog-detail">Design</div>
                            <div className="blog-content">
                              <p>
                                So striking at of to welcomed resolved. Northward by described up household therefore
                                attention. Excellence decisively nay man yet impression for contrasted remarkably.
                        </p>
                              <p>
                                Forfeited you engrossed but gay sometimes explained. Another as studied it to evident.
                                Merry sense given he be arise. Conduct at an replied removal an amongst. Remaining
                                determine few her two cordially admitting old.
                        </p>
                              <blockquote>
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                                Curae; Pellentesque suscipit.
                        </blockquote>
                              <p>
                                Tiled say decay spoil now walls meant house. My mr interest thoughts screened of outweigh
                                removing. Evening society musical besides inhabit ye my. Lose hill well up will he over
                                on.
                                Increasing sufficient everything men him admiration unpleasing sex.
                        </p>
                              <ul className="list-style">
                                <li>Greatest properly off ham exercise all.</li>
                                <li>Unsatiable invitation its possession nor off.</li>
                                <li>All difficulty estimating unreserved increasing the solicitude.</li>
                              </ul>
                              <p>
                                Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means
                                up civil do an offer wound of.
                        </p>
                            </div>
                            <a href="#" className="button">
                              <span className="text">View Project</span>
                              <span className="arrow" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* work item photo */}
                <div className="col col-d-6 col-t-6 col-m-12 grid-item gallery border-line-h">
                  <div className="box-item">
                    <div className="image">
                      <a href="#gallery-1" className="has-popup-gallery">
                        <img src="images/works/work5.jpg" alt="" />
                        <span className="info">
                          <span className="ion ion-images" />
                        </span>
                      </a>
                      <div id="gallery-1" className="mfp-hide">
                        <a href="images/works/work6.jpg" />
                        <a href="images/works/work1.jpg" />
                        <a href="images/works/work5.jpg" />
                      </div>
                    </div>
                    <div className="desc">
                      <a href="images/works/work5.jpg" className="name has-popup-image">Gereal Travels</a>
                      <div className="category">Gallery</div>
                    </div>
                  </div>
                </div>
                {/* work item music */}
                <div className="col col-d-6 col-t-6 col-m-12 grid-item music border-line-h">
                  <div className="box-item">
                    <div className="image">
                      <a href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true" className="has-popup-music">
                        <img src="images/works/work8.jpg" alt="" />
                        <span className="info">
                          <span className="ion ion-music-note" />
                        </span>
                      </a>
                    </div>
                    <div className="desc">
                      <a href="#" className="name has-popup">Daylight Entrance</a>
                      <div className="category">Music</div>
                    </div>
                  </div>
                </div>
                {/* work item video */}
                <div className="col col-d-6 col-t-6 col-m-12 grid-item video border-line-h">
                  <div className="box-item">
                    <div className="image">
                      <a href="https://vimeo.com/97102654" className="has-popup-video">
                        <img src="images/works/work6.jpg" alt="" />
                        <span className="info">
                          <span className="ion ion-videocamera" />
                        </span>
                      </a>
                    </div>
                    <div className="desc">
                      <a href="https://vimeo.com/97102654" className="name has-popup-video">Architecture</a>
                      <div className="category">Video</div>
                    </div>
                  </div>
                </div>
                {/* work item design */}
                <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
                  <div className="box-item">
                    <div className="image">
                      <a href="#popup-2" className="has-popup-media">
                        <img src="images/works/work7.jpg" alt="" />
                        <span className="info">
                          <span className="ion ion-images" />
                        </span>
                      </a>
                    </div>
                    <div className="desc">
                      <a href="#popup-2" className="name has-popup-media">Social Website</a>
                      <div className="category">Content</div>
                    </div>
                    <div id="popup-2" className="popup-box mfp-fade mfp-hide">
                      <div className="content">
                        <div className="image">
                          <img src="images/works/work7.jpg" alt="" />
                        </div>
                        <div className="desc">
                          <div className="post-box">
                            <h1>Mobile Application</h1>
                            <div className="blog-detail">Design</div>
                            <div className="blog-content">
                              <p>
                                So striking at of to welcomed resolved. Northward by described up household therefore
                                attention. Excellence decisively nay man yet impression for contrasted remarkably.
                        </p>
                              <p>
                                Forfeited you engrossed but gay sometimes explained. Another as studied it to evident.
                                Merry sense given he be arise. Conduct at an replied removal an amongst. Remaining
                                determine few her two cordially admitting old.
                        </p>
                              <blockquote>
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                                Curae; Pellentesque suscipit.
                        </blockquote>
                              <p>
                                Tiled say decay spoil now walls meant house. My mr interest thoughts screened of outweigh
                                removing. Evening society musical besides inhabit ye my. Lose hill well up will he over
                                on.
                                Increasing sufficient everything men him admiration unpleasing sex.
                        </p>
                              <ul className="list-style">
                                <li>Greatest properly off ham exercise all.</li>
                                <li>Unsatiable invitation its possession nor off.</li>
                                <li>All difficulty estimating unreserved increasing the solicitude.</li>
                              </ul>
                              <p>
                                Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means
                                up civil do an offer wound of.
                        </p>
                            </div>
                            <a href="#" className="button">
                              <span className="text">View Project</span>
                              <span className="arrow" />
                            </a>
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
        {/*
				Card - Blog
			*/}
        <div className="card-inner blog" id="blog-card">
          <div className="card-wrap">
            {/* Blog */}
            <div className="content blog">
              {/* title */}
              <div className="title">
                <span>Blog</span>
              </div>
              {/* content */}
              <div className="row border-line-v">
                {/* blog item */}
                <div className="col col-d-6 col-t-6 col-m-12">
                  <div className="box-item">
                    <div className="image">
                      <a href="blog-post-new.html">
                        <img src="images/blog/blog1.jpg" alt="By spite about do of allow" />
                        <span className="info">
                          <span className="ion ion-document-text" />
                        </span>
                      </a>
                    </div>
                    <div className="desc">
                      <a href="blog-post-new.html">
                        <span className="date">April 28, 2020</span>
                      </a>
                      <a href="blog-post-new.html" className="name">By spite about do of allow</a>
                      <div className="text">
                        <p>Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation
                    munere noluisse. Enim torquatos…</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* blog item */}
                <div className="col col-d-6 col-t-6 col-m-12">
                  <div className="box-item">
                    <div className="image">
                      <a href="blog-post-new.html">
                        <img src="images/blog/blog2.jpg" alt="By spite about do of allow" />
                        <span className="info">
                          <span className="ion ion-document-text" />
                        </span>
                      </a>
                    </div>
                    <div className="desc">
                      <a href="blog-post-new.html">
                        <span className="date">April 28, 2020</span>
                      </a>
                      <a href="blog-post-new.html" className="name">By spite about do of allow</a>
                      <div className="text">
                        <p>Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation
                    munere noluisse. Enim torquatos…</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* blog item */}
                <div className="col col-d-6 col-t-6 col-m-12">
                  <div className="box-item">
                    <div className="image">
                      <a href="blog-post-new.html">
                        <img src="images/blog/blog3.jpg" alt="By spite about do of allow" />
                        <span className="info">
                          <span className="ion ion-document-text" />
                        </span>
                      </a>
                    </div>
                    <div className="desc">
                      <a href="blog-post-new.html">
                        <span className="date">April 28, 2020</span>
                      </a>
                      <a href="blog-post-new.html" className="name">By spite about do of allow</a>
                      <div className="text">
                        <p>Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation
                    munere noluisse. Enim torquatos…</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* blog item */}
                <div className="col col-d-6 col-t-6 col-m-12">
                  <div className="box-item">
                    <div className="image">
                      <a href="blog-post-new.html">
                        <img src="images/blog/blog1.jpg" alt="By spite about do of allow" />
                        <span className="info">
                          <span className="ion ion-document-text" />
                        </span>
                      </a>
                    </div>
                    <div className="desc">
                      <a href="blog-post-new.html">
                        <span className="date">April 28, 2020</span>
                      </a>
                      <a href="blog-post-new.html" className="name">By spite about do of allow</a>
                      <div className="text">
                        <p>Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation
                    munere noluisse. Enim torquatos…</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clear" />
              </div>
              <div className="pager">
                <nav className="navigation pagination">
                  <div className="nav-links">
                    <span className="page-numbers current">1</span>
                    <a className="page-numbers" href="#">2</a>
                    <a className="next page-numbers" href="#">Next</a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/*
				Card - Contacts
			*/}
        <div className="card-inner contacts" id="contacts-card">
          <div className="card-wrap">
            {/*
						Conacts Info
					*/}
            <div className="content contacts">
              {/* title */}
              <div className="title">Get in Touch</div>
              {/* content */}
              <div className="row">
                <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                  <div className="map" id="map" />
                  <div className="info-list">
                    <ul>
                      <li><strong>Address . . . . .</strong> California, USA</li>
                      <li><strong>Email . . . . .</strong> adlard@example.com</li>
                      <li><strong>Phone . . . . .</strong> +123 654 78900</li>
                      <li><strong>Freelance . . . . .</strong> Available</li>
                    </ul>
                  </div>
                </div>
                <div className="clear" />
              </div>
            </div>
            {/*
						Contact Form
					*/}
            <div className="content contacts">
              {/* title */}
              <div className="title">Contact Form</div>
              {/* content */}
              <div className="row">
                <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                  <div className="contact_form">
                    <form id="cform" method="post">
                      <div className="row">
                        <div className="col col-d-6 col-t-6 col-m-12">
                          <div className="group-val">
                            <input type="text" name="name" placeholder="Full Name" />
                          </div>
                        </div>
                        <div className="col col-d-6 col-t-6 col-m-12">
                          <div className="group-val">
                            <input type="text" name="email" placeholder="Email Address" />
                          </div>
                        </div>
                        <div className="col col-d-12 col-t-12 col-m-12">
                          <div className="group-val">
                            <textarea name="message" placeholder="Your Message" defaultValue={""} />
                          </div>
                        </div>
                      </div>
                      <div className="align-left">
                        <a href="#" className="button" onclick="$('#cform').submit(); return false;">
                          <span className="text">Send Message</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </form>
                    <div className="alert-success">
                      <p>Thanks, your message is sent successfully.</p>
                    </div>
                  </div>
                </div>
                <div className="clear" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
