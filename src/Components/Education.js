import { edu } from '../_Data';
import ExperienceCard from './ExperienceCard';

const Education = () => {
     return (
          <div className="card-inner active">
               <div className="card-wrap content resume">
                    <div className="title"><span className="first-word">Education</span> History</div>
                    <div className="row">
                         <div className="col col-d-12 border-line-v">
                              <div className="resume-title border-line-h">
                                   <div className="resume-items">
                                        {edu.map((school) => { return <ExperienceCard key={school.id} job={school} /> })}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )

}

export default Education;