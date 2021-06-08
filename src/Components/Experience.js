import { xp } from '../_Data';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
     return (
          <div className="card-inner active">
               <div className="card-wrap content resume">
                    <div className="title"><span className="first-word">Experience</span> List</div>
                    <div className="row">
                         <div className="col col-d-12 border-line-v">
                              <div className="resume-title border-line-h">
                                   <div className="resume-items">
                                        {xp.map((job) => { return <ExperienceCard key={job.id} job={job} /> })}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Experience;