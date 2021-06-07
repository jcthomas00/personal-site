import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
     content: {
          padding: '0',
          top: '0',
          inset: '0'
     }
};

const WorkCard = (props) => {
     const [modalIsOpen, setIsOpen] = React.useState(false);
     function openModal() {
          setIsOpen(true);
     }

     function closeModal() {
          setIsOpen(false);
     }


     const { id, title, technologies, image, description, more, website, github, bullets } = props.work;

     return (
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
               <div className="box-item">
                    <div className="image">
                         <a href="javascript:;" onClick={openModal} className="has-popup-media">
                              <img src={image} alt={title} />
                              <span className="info">
                                   <span className="ion ion-images" />
                              </span>
                         </a>
                    </div>
                    <div className="desc">
                         <a href={`#${id}`} className="name has-popup-media">{title}</a>
                    </div>
                    <Modal
                         isOpen={modalIsOpen}
                         onRequestClose={closeModal}
                         style={customStyles}
                         contentLabel={`${title} Modal`}
                    >
                         <div id={id} className="popup-box">
                              <div className="content">
                                   <div className="image">
                                        <img src={image} alt={title} />
                                   </div>

                                   <div className="desc">
                                        <div className="post-box">
                                             <h1>{title}</h1>
                                             <div className="blog-content">
                                                  <p>
                                                       {description}
                                                  </p>
                                                  {more ? <blockquote>{more}</blockquote> : ''}
                                                  <h3>Tools and tech used:</h3>
                                                  <ul className="list-style">
                                                       {technologies.map((tech) => { return <li>{tech}</li> })}
                                                  </ul>
                                             </div>
                                             {website ?
                                                  (
                                                       <a href={website} className="button">
                                                            <span className="text">View Project</span>
                                                            <span className="arrow" />
                                                       </a>
                                                  ) : ''
                                             }
                                             {github ?
                                                  (
                                                       <a href={website} className="button">
                                                            <span className="text">View Code</span>
                                                            <span className="arrow" />
                                                       </a>
                                                  ) : ''
                                             }

                                        </div>
                                   </div>
                                   <button title="Close (Esc)" type="button" onClick={closeModal} class="mfp-close">×</button>
                              </div>
                         </div>
                    </Modal>
               </div>
          </div>
     )
}

export default WorkCard;