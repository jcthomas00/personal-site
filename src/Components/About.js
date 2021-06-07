import Skills from './Skills';

const About = () => {
     return (
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
                              <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                                   <div className="text-box">
                                        <p>
                                             I am Ryan Adlard, web designer from USA, California. I have rich experience in
                                             web site design and building and customization, also I am good at wordpress.
                                             I love to talk with you about our unique.
              </p>
                                   </div>
                              </div>
                              <div className="clear" />
                         </div>
                    </div>
                    <Skills />

               </div>
          </div>

     )
}

export default About;