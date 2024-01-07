import React from "react";

import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      {/* constainer 1*/}
      <div className="footerContainer">
        <h1 className="fotterSiren-logo">
          <p>The</p>
          <span>Siren</span>
        </h1>{" "}
        <hr className="hr-top" />
        <div className="fotterBlogExplaine">
          “Blogging is hard because of the grind required to stay interesting
          and relevant.”
        </div>
        <div className="fotterSocialMedia">
          <Instagram /> <Facebook /> <LinkedIn /> <Twitter />
        </div>
      </div>
      {/* constainer 2*/}
      <div className="footerContainer">
        <h1 className="fotterSiren" style={{ color: "red" }}>
          Services
        </h1>
        <hr className="hr-top" />

        <Link to="/" className="FooterNonActiveNav">
          Home
        </Link>
        <Link to="/Bollywood" className="FooterNonActiveNav">
          Bollywood
        </Link>
        <Link to="/Hollywood" className="FooterNonActiveNav">
          Hollywood
        </Link>
        <Link to="/Technology" className="FooterNonActiveNav">
          Technology
        </Link>
        <Link to="/Fitness" className="FooterNonActiveNav">
          Fitness
        </Link>
        <Link to="/Food" className="FooterNonActiveNav">
          Food
        </Link>
      </div>
      {/* constainer 3 */}
      <div className="footerContainer">
        <h1 className="Resources" style={{ color: "red" }}>
          Resources
        </h1>
        <hr className="hr-top" />
        <div className="help">Help</div>
        <div className="help">About</div>
        <div className="help">Contact Us</div>
      </div>
      {/* constainer 4*/}
      <div className="footerContainer">
        <h1 className="readMore" style={{ color: "red" }}>
          More
        </h1>
        <hr className="hr-top" />

        <a href="tel:7836947520">+97836947520</a>
        <a href="mailto:@arbabkhan4u.ak.ak@gmail.com">mail us</a>
        <div className="copyRight">
          <CopyrightIcon /> Made by Arbab khan
        </div>
      </div>
    </div>
  );
};

export default Footer;
