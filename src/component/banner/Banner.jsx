import React from "react";
import "./banner.css";
import BannerTxt from './BannerTxt'
import BannerForm from './BannerForm'

const Banner = () => {
  
  return (
    <div className="banner container" id="banner">
      <div className="center">
        <BannerTxt />
        <div className="get-in-touch">
          <h1>We're here to help!</h1>
          <p>
            Lets us know who are and course you'd be 
            interested in!
          </p>
          <BannerForm />
        </div>
      </div>
    </div>
  );
};

export default Banner;

