import React, { useState } from 'react';
import logo from '../../src/components/images/logo.png';
import googlelogo from '../../src/components/images/search.png';
import classes from './Signuppage.module.css'
import Logo from './Logo';

const SignupPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleRegisterWithOTP = () => {
    // Implement your OTP registration logic here
  };

  const handleContinueWithGoogle = () => {
    // Implement your Google registration logic here
  };

  const handleSwitchToLoginPage = () => {
    // Implement your logic to switch to login page here
  };

  return (
    <div className={classes.container}>
      <div className={classes.left_panel}>
        <img src={logo} alt="Logo" height='560vh'/>
      </div>
      <div className={classes.right_panel}>
        <div className={classes.logospan}><Logo /></div>
        <h2 style={{fontWeight:400,fontSize:'24px',margin:'2rem'}}>Sign up to your Account</h2>
        <form className={classes.form}>
          
          <input
          placeholder='Your Mobile No.'
          className={classes.form_input}
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
          />
          <p className={classes.tnc}>By continuing you agree to 
<span style={{color:'#EA3242'}}>Terms & Conditions</span> and <span style={{color:'#EA3242'}}>Privacy Policy</span> of RevampBros</p>
          <button  className={classes.otp_button} type="button" onClick={handleRegisterWithOTP}>Register with OTP</button>
          <p style={{margin:'1rem'}}>Or</p>
          <button className={classes.google_button} type="button" onClick={handleContinueWithGoogle}><span ><img   width='20px' height='20px' src={googlelogo}></img></span> Continue with Google</button>
        </form>
        <p>
        Already have a RevampBros Account?{' '}
          <button className={classes.switch} type="button" onClick={handleSwitchToLoginPage}>Login</button>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
