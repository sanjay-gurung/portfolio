import React, { Component } from 'react';
import SOCIAL_PROFILES from '../Data/socialProfiles';

class Footer extends Component {
  render() {

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           {  SOCIAL_PROFILES.map((socialProfile) => (
                  <a className="social-links" key={socialProfile.id} href={socialProfile.link} target="-blank">
                      <i className={socialProfile.image} style={{ marginRight: '20px'}} />
                  </a>
                )
            )}
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
