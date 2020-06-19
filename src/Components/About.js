import React, { Component } from 'react';
import profilePicture from '../Assets/profilePic.jpeg';
import Resume from '../Assets/resume.PDF'

class About extends Component {
  render() {

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilePicture} alt="Sanjay Gurung" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            {/* <p>I am a self-taught, motivated and passionate Front End developer currently specialized on Angular and React. 
               As I came from a QA Engineering background, I believe, my strength lies on my skills and experience of makaing products of a high quality. </p> */}
            <p>I am a motivated and passionate Senior QA Engineer with an experience of a Front End development currently specialized on Angular and React. I believe, my strength lies on my skills and experience in makaing products of a high quality. </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Sanjay Gurung</span><br />
						   <span>(510) 709-8838</span><br />
                     <span>sanjaygurung123@gmail.com</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a className="button" href={Resume} target="_blank"><i className="fa fa-download"></i>View/ Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
