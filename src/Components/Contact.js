import { Component } from 'react';

class Contacts extends Component {
     test = (e) => {
          e.preventDefault();
          console.log("Mail");
     }
     mail = (e) => {

          e.preventDefault();
          const nodemailer = require("nodemailer");

          // async..await is not allowed in global scope, must use a wrapper
          async function main() {
               // Generate test SMTP service account from ethereal.email
               // Only needed if you don't have a real mail account for testing
               let testAccount = await nodemailer.createTestAccount();

               // create reusable transporter object using the default SMTP transport
               let transporter = nodemailer.createTransport({
                    host: "smtp.ethereal.email",
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                         user: testAccount.user, // generated ethereal user
                         pass: testAccount.pass, // generated ethereal password
                    },
               });

               // send mail with defined transport object
               let info = await transporter.sendMail({
                    from: '"Jacobs Website" <jacobthomas@outlook.com>', // sender address
                    to: "jacobthomas@outlook.com", // list of receivers
                    subject: "Hello ✔", // Subject line
                    text: "Hello world?", // plain text body
                    html: "<b>Hello world?</b>", // html body
               });

               console.log("Message sent: %s", info.messageId);
               // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

               // Preview only available when sending through an Ethereal account
               console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
               // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
          }

          main().catch(console.error);
     }
     render = () => {
          return (

               <div className="card-inner contacts animated fadeInLeft active" id="contacts-card">
                    <button className="button" onclick={this.test} value="Send Message" />
                    <div className="card-wrap">
                         {/*
                                 Conacts Info
                            */}
                         <div className="content contacts">
                              {/* title */}
                              <div className="title">Get in Touch</div>
                              {/* content */}
                              <div className="row">
                                   <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                                        <div className="map" id="map" />
                                        <div className="info-list">
                                             <ul>
                                                  <li><strong>Address . . . . .</strong> California, USA</li>
                                                  <li><strong>Email . . . . .</strong> adlard@example.com</li>
                                                  <li><strong>Phone . . . . .</strong> +123 654 78900</li>
                                                  <li><strong>Freelance . . . . .</strong> Available</li>
                                             </ul>
                                        </div>
                                   </div>
                                   <div className="clear" />
                              </div>
                         </div>
                         {/*
                                 Contact Form
                            */}
                         <div className="content contacts">
                              {/* title */}
                              <div className="title">Contact Form</div>
                              {/* content */}
                              <div className="row">
                                   <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                                        <div className="contact_form">
                                             <form onSubmit={this.mail}>
                                                  <div className="align-left">
                                                       <button type="submit" className="button">
                                                            <span className="text">Send Message</span>
                                                            <span className="arrow" />
                                                       </button>
                                                  </div>
                                             </form>
                                             <div className="alert-success">
                                                  <p>Thanks, your message is sent successfully.</p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="clear" />
                              </div>
                         </div>
                    </div>
               </div>
          )
     }
}


export default Contacts;