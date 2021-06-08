import { skills, frontend, backend, design } from '../_Data';
import SkillCard from './SkillCard';

const Skills = () => {
     return (
          <div>
               <div className="content fuct">
                    <div className="title">Frontend</div>
                    <div className="row fuct-items">
                         {frontend.map((skill) => { return <SkillCard key={skill.name} skill={skill} /> })}
                         < div className="clear" />
                    </div>
               </div>
               <div className="content fuct">
                    <div className="title">Backend</div>
                    <div className="row fuct-items">
                         {backend.map((skill) => { return <SkillCard key={skill.name} skill={skill} /> })}
                         < div className="clear" />
                    </div>
               </div>
               <div className="content fuct">
                    <div className="title">Design</div>
                    <div className="row fuct-items">
                         {design.map((skill) => { return <SkillCard key={skill.name} skill={skill} /> })}
                         < div className="clear" />
                    </div>
               </div>
               <div className="content fuct">
                    <div className="title">More</div>
                    <div className="row fuct-items">
                         {skills.map((skill) => { return <SkillCard key={skill.name} skill={skill} /> })}
                         < div className="clear" />
                    </div>
               </div>
          </div>
     )

}

export default Skills;