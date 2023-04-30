import React from 'react';
import headerImage from './images/abheader.png';
import founder1Image from './images/founder1.png';
import founder2Image from './images/founder2.jpg';
import whoWeAre from './images/whoWeAre.jpg';
import ourAchievements from './images/ourAchievements.jpg';
import insta from './images/insta.jpg';
import facebook from './images/facebook.jpg';
import linkedin from './images/linkedin.jpg';


import './Aboutus.css'
import Header from './Header';

const AboutUsPage = () => {
  return (
    <><Header/>
    <div className="container">
      <div className="header">
        <img src={headerImage} alt="Header" />
      </div>
      <div className="section">
        <div className="panel">
          <h2 style={{fontWeight:600}}>Who we are</h2>
          <p style={{fontSize:'13px',fontStyle:'saira'}}>
            Do you have an old sofa that needs reupholstering? A dining table that requires refinishing or a cabinet that needs repairing? Revamp Bros has got you covered. We specialize in giving a new lease of life to the furniture you already have in your home. We believe furniture doesn't have to be discarded because it looks old or worn out. We can transform your furniture into something beautiful, stylish, and functional again. Every piece of furniture deserves to be treated with care and attention to detail. That's why we work closely with you to understand your vision and preferences so that we can deliver precisely what you're looking for. Renewing your furniture with us is not only a cost-effective and environmentally friendly option, but we'll also make sure your furniture reflects your unique style and personality. Whether it's a family heirloom or a sentimental piece, we understand the value of preserving the past while giving it a fresh new look. So, why not give your furniture a second chance and transform your home with our expert furniture renewal services? Contact us today to schedule a consultation, and let's get started!
          </p>
        </div>
        <div className="panel">
          <img src={whoWeAre} width='611px' height='363px' alt="Who we are" />
        </div>
      </div>
      <div className="section">
        <div className="panel">
          <img src={ourAchievements} alt="Our Achievements" />
        </div>
        <div className="panel">
          <h2 style={{fontWeight:600}}>Our Achievements</h2>
          <p style={{fontSize:'13px'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>
      <div className="founders" >
        <h2 style={{textAlign:'center',fontSize:'32px',fontWeight:'bold'}}>Meet Our Founders</h2>
        <p style={{margin:'2rem',lineHeight:'20px',fontSize:'16px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <div  style={{display:'flex',justifyContent:'space-around'}}>
        <div className="founder">
          <div>
          <img className='founderimage' src={founder1Image} alt="Founder 1" />
          </div>
          <div className="founder-details">
            <h3 style={{fontWeight:'bold',fontSize:'20px'}}>John Doe</h3>
            <p>Co-founder</p>
            <div className="social-links">
              <a href="#"><img src={insta}></img></a>
              <a href="#"><img src={facebook}></img></a>
              <a href="#"><img src={linkedin}></img></a>
            </div>
          </div>
        </div>
        <div className="founder">
          <div>
          <img className='founderimage' src={founder2Image} alt="Founder 2" />
          </div>
          <div className="founder-details">
            <h3 style={{fontWeight:'bold',fontSize:'20px'}}>Jane Doe</h3>
            <p>Co-founder</p>
            <div className="social-links">
              <a href="#"><img src={insta}></img></a>
              <a href="#"><img src={facebook}></img></a>
              <a href="#"><img src={linkedin}></img></a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUsPage;
