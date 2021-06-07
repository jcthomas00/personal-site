import { Link } from 'react-router-dom';

const Intro = () => {
     return (
          <div className="card-started" id="home-card">
               {/*
					Profile
				*/}
               <div className="profile no-photo">
                    {/* profile image */}
                    <div className="slide" style={{ backgroundImage: 'url(images/jct-bw.jpg)' }} />
                    {/* profile titles */}
                    <div className="title">Jacob C Thomas</div>
                    <div className="subtitle subtitle-typed">
                         <div className="typing-title">
                              <p>Developer</p>
                              <p>Probrem Solver</p>
                              <p>Eternal Student</p>
                         </div>
                    </div>
                    {/* profile socials */}
                    <div className="social">
                         <a target="_blank" href="https://www.linkedin.com/in/jacobcthomas/"><span className="fab fa-linkedin" /></a>
                         <a target="_blank" href="https://github.com/jcthomas00/"><span className="fab fa-github" /></a>
                         <a target="_blank" href="mailto:JacobThomas@outlook.com"><span className="fas fa-envelope" /></a>
                         <a target="_blank" href="https://www.instagram.com/jcthomas00/"><span className="fab fa-instagram" /></a>
                    </div>
                    {/* profile buttons */}
                    <div className="lnks">
                         <a href="docs/JacobThomasResume.pdf" className="lnk">
                              <span className="text">Download CV</span>
                         </a>
                         <Link to="/contact" className="lnk discover">
                              <span className="text">Contact Me</span>
                         </Link>
                    </div>
               </div>
          </div>
     )
}

export default Intro;