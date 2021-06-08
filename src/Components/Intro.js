const Intro = () => {
     return (
          <div className="card-started" id="home-card">
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
                         <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jacobcthomas/"><span className="fab fa-linkedin" /></a>
                         <a target="_blank" rel="noreferrer" href="https://github.com/jcthomas00/"><span className="fab fa-github" /></a>
                         <a target="_blank" rel="noreferrer" href="mailto:JacobThomas@outlook.com"><span className="fas fa-envelope" /></a>
                         <a target="_blank" rel="noreferrer" href="https://www.instagram.com/jcthomas00/"><span className="fab fa-instagram" /></a>
                    </div>
                    {/* profile buttons */}
                    <div className="lnks">
                         <a target="_blank" rel="noreferrer" href="docs/JacobThomasResume.pdf" className="lnk">
                              <span className="text">Download CV</span>
                         </a>
                         <a target="_blank" rel="noreferrer" href="mailto:JacobThomasResume@outlook.com" className="lnk">
                              <span className="text">Contact Me</span>
                         </a>
                    </div>
               </div>
          </div>
     )
}

export default Intro;