/** Blueprint For Justice
 ** Copyright (C) 2022 Anish Sinha
 **
 ** This program is free software: you can redistribute it and/or modify
 ** it under the terms of the GNU General Public License as published by
 ** the Free Software Foundation, either version 3 of the License, or
 ** (at your option) any later version.
 **
 ** This program is distributed in the hope that it will be useful,
 ** but WITHOUT ANY WARRANTY; without even the implied warranty of
 ** MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 ** GNU General Public License for more details.
 **
 ** You should have received a copy of the GNU General Public License
 ** along with this program.  If not, see http://www.gnu.org/licenses/.
 **/

import { useContext, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

import { ReactComponent as FacebookIcon } from "assets/svg/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "assets/svg/twitter-icon.svg";
import { ReactComponent as InstagramIcon } from "assets/svg/instagram-icon.svg";
import { ReactComponent as XIcon } from "assets/svg/x-icon.svg";
import { ReactComponent as LightModeSun } from "assets/svg/light-mode.svg";
import { ReactComponent as DarkModeMoon } from "assets/svg/dark-mode.svg";

import Button from "components/Reusables/Button";
import Switch from "components/Reusables/Switch";

import SettingsCtx, {
  setDarkModeSetting,
  getDarkModeSetting,
} from "components/ctx";
import getBaseUrl from "config";

const validateEmail = (email: string) => {
  const emailRegex =
    /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/;
  return !!emailRegex.exec(email);
};

const Footer = () => {
  const [email, setEmail] = useState<string>("");
  const [alert, setAlert] = useState<{
    show: boolean;
    msg: string;
    status?: "error" | "success";
  }>({
    show: false,
    msg: "",
  });
  const ctx = useContext(SettingsCtx);
  const [toggled, setToggled] = useState<boolean>(ctx.darkmode);
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
      </div>
      <div className="app-footer__signup">
        <h2>Sign up to join our community</h2>
        <div className="community-signup__input">
          <div className="signup-inputs">
            <input
              type="email"
              placeholder="Email"
              className={`email-input ${
                alert.show && alert.status === "error"
                  ? "email-input__error"
                  : ""
              }`}
              value={email}
              onChange={(e: any) => {
                setEmail(() => e.target.value);
              }}
            />
            <Button
              className="btn btn-signup input-signup"
              text="Sign Up"
              onClick={async () => {
                if (!validateEmail(email)) {
                  setAlert((current) => ({
                    show: true,
                    msg: "Invalid email. Try again.",
                    status: "error",
                  }));
                  setEmail(() => "");
                  return;
                }
                await axios.post(`${getBaseUrl()}/mail/signup`, {
                  email,
                });
                setAlert(() => ({
                  show: true,
                  msg: "Success!",
                  status: "success",
                }));
                setEmail(() => "");
              }}
            />
          </div>
          {alert.show && (
            <div
              className={`email-error alert-contact alert-contact${
                alert.show && alert.status === "error" ? "__error" : "__success"
              }`}
            >
              {alert.msg}
              <XIcon
                className="alert-contact__exit"
                onClick={() =>
                  setAlert((current) => ({ show: false, msg: "" }))
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
