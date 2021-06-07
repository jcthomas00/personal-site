import { Link } from 'react-router-dom';

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
               {/* menu btn */}
               <a href="#" className="menu-btn"><span /></a>
               {/* menu */}
               <div className="top-menu">
                    <ul>
                         <li>
                              <Link to="/">
                                   <span className="icon ion-person" />
                                   <span className="link">About</span>
                              </Link>
                         </li>
                         <li>
                              <Link to="/experience">
                                   <span className="icon ion-android-list" />
                                   <span className="link">Work History</span>
                              </Link>
                         </li>
                         <li>
                              <Link to="/works">
                                   <span className="icon fa fa-briefcase" />
                                   <span className="link">Portfolio</span>
                              </Link>
                         </li>
                         <li>
                              <Link to="/education">
                                   <span className="icon fa fa-university" />
                                   <span className="link">Education</span>
                              </Link>
                         </li>
                         <li>
                              <Link to="/resume">
                                   <span className="icon ion-android-list" />
                                   <span className="link">Skills</span>
                              </Link>
                         </li>
                         <li>
                              <Link to="/contact">
                                   <span className="icon ion-at" />
                                   <span className="link">Contact</span>
                              </Link>
                         </li>
                    </ul>
               </div>
          </header>
     );
}

export default Header;