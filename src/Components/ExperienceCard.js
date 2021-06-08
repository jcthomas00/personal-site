const ExperienceCard = (props) => {
     const { dates, name, title, bullets } = props.job;
     return (
          <div className="resume-item border-line-h">
               <div className="date">{dates}</div>
               <div className="name">{name}</div>
               <div className="company">{title}</div>
               <ul>
                    {bullets.map((bullet, key) => <li key={key}>{bullet}</li>)}
               </ul>
          </div>
     )
}

export default ExperienceCard;