import { NavLink } from 'react-router-dom';

const Header = () => {
     return (
          <header className="header">
               {/* header profile */}
               <div className="profile">
                    <div className="title">Jacob Thomas</div>
                    <div className="subtitle subtitle-typed">
                         <div className="typing-title">
                              <p>Developer</p>
                              <p>Probrem Solver</p>
                              <p>Eternal Student</p>
                         </div>
                    </div>
               </div>
               {/* menu */}
               <div className="top-menu">
                    <ul>
                         <li>
                              <NavLink exact to="/" activeClassName="active">
                                   <span className="icon ion-person" />
                                   <span className="link">About</span>
                              </NavLink>
                         </li>
                         <li>
                              <NavLink to="/experience" activeClassName="active">
                                   <span className="icon ion-android-list" />
                                   <span className="link">Work</span>
                              </NavLink>
                         </li>
                         <li>
                              <NavLink to="/works" activeClassName="active">
                                   <span className="icon fa fa-briefcase" />
                                   <span className="link">Portfolio</span>
                              </NavLink>
                         </li>
                         <li>
                              <NavLink to="/education" activeClassName="active">
                                   <span className="icon fa fa-university" />
                                   <span className="link">Education</span>
                              </NavLink>
                         </li>
                    </ul>
               </div>
          </header>
     );
}

export default Header;