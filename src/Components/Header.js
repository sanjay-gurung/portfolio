import React, { Component } from 'react';
import Typed from 'react-typed';
import SOCIAL_PROFILES from '../Data/socialProfiles';
import profilePic from '../Assets/profilePic.jpeg';

class Header extends Component {
  render() {

    return (
      <header id="home">
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>

      <div className="row banner">
         {/* <img className="profilePic" src={profilePic} alt="profile-pic"/> */}
         <div className="banner-text">
            <h1 className="responsive-headline">Sanjay Gurung</h1>
            <h3><Typed strings={["I'm a <strong>Front End Developer</strong> looking forward to working on a fun and challanging project."]} typeSpeed={30} /></h3>
            <hr />
            <div>
               {  SOCIAL_PROFILES.map((socialProfile) => (
                     <a className="social" key={socialProfile.id} href={socialProfile.link} target="-blank">
                        <i className={socialProfile.image} style={{ marginRight: '20px'}} />
                     </a>
               )
               )}
            </div>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#portfolio"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;