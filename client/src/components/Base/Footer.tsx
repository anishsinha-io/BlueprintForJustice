import { useContext } from "react";

import { Link } from "react-router-dom";

import { ReactComponent as FacebookIcon } from "assets/svg/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "assets/svg/twitter-icon.svg";
import { ReactComponent as InstagramIcon } from "assets/svg/instagram-icon.svg";

import Button from "components/Reusables/Button";

import SettingsCtx from "components/ctx";

const Footer = () => {
  const ctx = useContext(SettingsCtx);
  return (
    <div className={`app-footer ${ctx.darkmode ? "dark-mode" : ""}`}>
      <div className="app-footer__links">
        <div className="links-header">
          <h1>Blueprint for Justice</h1>
          <div className="title-icons">
            <FacebookIcon className="flex-icon" />
            <TwitterIcon className="flex-icon" />
            <InstagramIcon className="flex-icon" />
          </div>
        </div>
        <div className="links-resource">
          <h2>Resources</h2>
          <div className={`link-container${ctx.darkmode ? "--dark" : ""}`}>
            <Link to="/healing-and-support" className="resource-link">
              Healing
            </Link>
            <Link to="/media-preparedness" className="resource-link">
              Press
            </Link>
            <Link to="/community-connections" className="resource-link">
              Community Building
            </Link>
            <Link to="/taking-action" className="resource-link">
              Legislative Change
            </Link>
            <Link to="/legal-aid" className="resource-link">
              Legal Aid
            </Link>
            <Link to="/general" className="resource-link">
              General Resources
            </Link>
            <Link to="/questionnaire" className="resource-link">
              Survey
            </Link>
          </div>
        </div>
        <div className="links-other">
          <h2>Additional Information</h2>
          <div className="link-container">
            <a
              className="resource-link"
              href="https://blackmothersfilm.com"
              target="_blank"
              rel="noreferrer"
            >
              Documentary
            </a>
            <Link to="/contact" className="resource-link">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="app-footer__signup">
        <h2>Sign up to join our community</h2>
        <div className="community-signup__input">
          <input type="email" placeholder="Email" className="email-input" />
          <Button className="btn btn-signup input-signup" text="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
