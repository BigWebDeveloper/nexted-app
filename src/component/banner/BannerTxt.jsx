import React from 'react'
import { TbWorldSearch } from "react-icons/tb";

const BannerTxt = () => {
  return (
    <div className="banner-txt">
          <span>Specialization over generalization</span>
          <h1>
            Next-Ed Tech Focus <br />
            Artchitect Courses <span>& GIS</span>
          </h1>
          <p>
            "Master cutting edge technology and architectural principles
            with live, interative sessions lied by industry renowned
            mentors."
          </p>
          <h2>Live Interactive Webinar Event</h2>
          <span
            className="btn white"
            onClick={() => {
              alert("Backend services is required");
            }}
          >
            <TbWorldSearch size="18" /> Join Community
          </span>
        </div>
  )
}

export default BannerTxt