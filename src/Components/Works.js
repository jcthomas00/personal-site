import { works } from '../_Data';
import WorkCard from './WorkCard';

const Works = () => {
     return (
          <div className="card-inner active" id="works-card">
               <div className="card-wrap">
                    <div className="content works">
                         {/* title */}
                         <div className="title">Recent Works</div>
                         {/* content */}
                         <div className="row grid-items border-line-v">
                              {works.map((work) => { return <WorkCard key={work.id} work={work} /> })}
                              <div className="clear" />
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Works;