import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
   state = ({ 
      name: '',
      email: '',
      subject: '',
      message: '',
      loading: false,
      messageSent: '',
      messageError: ''
   })

   sendMessage = (event) => {
      this.setState({ loading: true });
      event.preventDefault();
      
      axios.post({
         method: "POST",
         url: "/api/form",
         data: this.state,
      }).then((response) => {
         console.log('Message sent.', response);
         this.setState({ 
            messageSent: true,
            loading: false 
         });
         this.resetForm()
      }). catch((error) => {
         console.log('Error: ', error );
         this.setState({ 
            messageError: true,
            loading: false
         });
      })
   }

   resetForm = () => {
      this.setState({
         name: '',
         email: '',
         subject: '',
         message: ''
      })
   }

  render() {

    return (
      <section id="contact">
         <div className="row">
            <div className="two columns header-col">
               <h1 />
            </div>
            <div className="ten columns">
                  <p className="lead">I would like to hear from you. Give me a shout either by using the form below or by email or phone. </p>
            </div>
         </div>
         <div className="row">
            <div className="eight columns">
               <form onSubmit={this.sendMessage.bind(this)} method="POST" id="contactForm" name="contactForm">
                  <fieldset>
                     <div>
                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                        <input type="text" size="25" value={this.state.name} id="contactName" name="contactName" 
                           onChange={(event) => ( this.setState({ name: event.target.value }))} />
                     </div>
                     <div>
                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                        <input type="text" value={this.state.email} size="35" id="contactEmail" name="contactEmail" 
                           onChange={(event) => ( this.setState({ email: event.target.value }))}/>
                     </div>
                     <div>
                        <label htmlFor="contactSubject">Subject</label>
                        <input type="text" value={this.state.subject} size="35" id="contactSubject" name="contactSubject" 
                           onChange={(event) => ( this.setState({ subject: event.target.value }))}/>
                     </div>
                     <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea cols="50" rows="10" value={this.state.message} id="contactMessage" name="contactMessage" 
                           onChange={(event) => ( this.setState({ message: event.target.value }))} />
                     </div>
                     <div>
                        <button type="submit">Submit</button>
                        { 
                           this.state.loading && <span className="image-loader"><img alt="" src="images loader.gif"/></span>
                        }
                     </div>
                  </fieldset>
				   </form>
            { 
               this.state.messageSent && <div className="msg-success">Your message has been sent. Thank you!</div>
            }
            {
               this.state.messageError && <div className="msg-failure">Error. Your message was not sent.</div>
            }
            </div>
            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">
					   <h4>Contact Details:</h4>
					   <p className="address">
						   Sanjay Gurung<br />
						   sanjaygurung123@gmail.com <br />
						   <span>(510) 709 - 8838 </span>
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
