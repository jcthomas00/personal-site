const SkillCard = (props) => {
     const { icon, name } = props.skill;
     return (
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
               <div className="fuct-item">
                    <div className="icon"><span className={icon} /></div>
                    <div className="name">{name}</div>
               </div>
          </div>
     )
}

export default SkillCard;