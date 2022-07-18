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

import { useEffect, useState } from "react";

import Button from "components/Reusables/Button";
import { ReactComponent as XIcon } from "assets/svg/x-icon.svg";
import axios from "axios";
import getBaseUrl from "config";

interface ContactData {
  firstName: string;
  lastName: string;
  subject: string;
  email: string;
  content: string;
}

const validateInputs = (data: ContactData) => {
  const emailRegex =
    /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/;
  return !!(
    data.firstName &&
    data.lastName &&
    data.subject &&
    data.content &&
    emailRegex.exec(data.email)
  );
};

const Contact = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  const [data, setData] = useState<ContactData>({
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    content: "",
  } as ContactData);
  const [alert, setAlert] = useState<{
    show: boolean;
    msg: string;
    status?: "error" | "success";
  }>({
    show: false,
    msg: "",
  });

  return (
    <section className="app-contact">
      <div className="app-contact__form">
        {alert.show && (
          <div
            className={`alert-contact alert-contact${
              alert.status === "error" ? "__error" : "__success"
            }`}
          >
            <div>{alert.msg}</div>
            <XIcon
              className="alert-contact__exit"
              onClick={() => setAlert((current) => ({ show: false, msg: "" }))}
            />
          </div>
        )}

        <div className="form-heading">
          <h2>Reach out to the filmmakers</h2>
          <p>
            Looking to collaborate? Host a screening? Organize together? Feel
            free to reach out! Let's make something that moves people to take
            action.
          </p>
        </div>
        <fieldset className="contact-inputs">
          <legend>
            <h3>Your message</h3>
          </legend>
          <div className="contact-inputs__entry ">
            <label htmlFor="contact-name" className="contact-label">
              First Name
            </label>
            <input
              id="contact-name"
              name="contact-name"
              placeholder="your first name"
              value={data.firstName}
              className={`${
                alert.show && alert.status === "error" ? "error-border" : ""
              }`}
              onChange={(e: any) => {
                setData((data) => ({ ...data, firstName: e.target.value }));
              }}
            />
          </div>
          <div className="contact-inputs__entry">
            <label htmlFor="contact-name" className="contact-label">
              Last Name
            </label>
            <input
              id="contact-name"
              name="contact-name"
              placeholder="your last name"
              value={data.lastName}
              className={`${
                alert.show && alert.status === "error" ? "error-border" : ""
              }`}
              onChange={(e: any) => {
                setData((data) => ({ ...data, lastName: e.target.value }));
              }}
            />
          </div>
          <div className="contact-inputs__entry">
            <label htmlFor="contact-name" className="contact-label">
              Subject
            </label>
            <input
              id="contact-name"
              name="contact-name"
              placeholder="your subject here"
              value={data.subject}
              className={`${
                alert.show && alert.status === "error" ? "error-border" : ""
              }`}
              onChange={(e: any) => {
                setData((data) => ({ ...data, subject: e.target.value }));
              }}
            />
          </div>
          <div className="contact-inputs__entry">
            <label htmlFor="contact-name" className="contact-label">
              Email
            </label>
            <input
              id="contact-email"
              name="contact-email"
              placeholder="you@example.com"
              type="email"
              value={data.email}
              className={`${
                alert.show && alert.status === "error" ? "error-border" : ""
              }`}
              onChange={(e: any) => {
                setData((data) => ({ ...data, email: e.target.value }));
              }}
            />
          </div>
          <div className="contact-inputs__entry">
            <label htmlFor="contact-name" className="contact-label">
              Message
            </label>
            <textarea
              id="contact-message"
              name="contact-message"
              placeholder="tell us what's on your mind."
              value={data.content}
              className={`${
                alert.show && alert.status === "error" ? "error-border" : ""
              }`}
              onChange={(e: any) => {
                setData((data) => ({ ...data, content: e.target.value }));
              }}
            />
            <Button
              className="btn btn-contact contact-submit"
              text="Submit"
              onClick={async () => {
                if (!validateInputs(data)) {
                  window.scrollTo(0, 0);
                  setAlert(() => ({
                    show: true,
                    msg: "One or more invalid inputs. Please try again.",
                    status: "error",
                  }));
                  setData(() => ({
                    firstName: "",
                    lastName: "",
                    subject: "",
                    email: "",
                    content: "",
                  }));
                  return;
                }
                await axios.post(`${getBaseUrl()}/mail/contact`, data);
                window.scrollTo(0, 0);
                setAlert(() => ({
                  show: true,
                  msg: "Successfully submitted message!",
                  status: "success",
                }));
                setData(() => ({
                  firstName: "",
                  lastName: "",
                  subject: "",
                  email: "",
                  content: "",
                }));
              }}
            />
          </div>
        </fieldset>
      </div>
    </section>
  );
};

export default Contact;
