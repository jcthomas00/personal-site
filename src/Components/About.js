import Skills from './Skills';

const About = () => {
     return (
          <div className="card-inner animated active" id="about-card">
               <div className="card-wrap">
                    <div className="content about">
                         {/* title */}
                         <div className="title">About Me</div>
                         {/* content */}
                         <div className="row">
                              <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                                   <div className="text-box">
                                        <p>
                                             I'm Jacob Thomas, a web developer in Houston, TX. You might find me enjoying myself for hours in a coffee shop while I try to figure out why a section of code isn't working exactly the way I want. While I'm not the fastest or the smartest programmer, I make up for those qualities with my resourcefulness and perseverance. Be on the lookout for beautiful and useful web applications from me.
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