import React, { useEffect } from "react";

import Button from "components/Reusables/Button";

const Contact = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <section className="app-contact">
      <div className="app-contact__form">
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
          <div className="contact-inputs__entry">
            <label htmlFor="contact-name" className="contact-label">
              Name
            </label>
            <input id="contact-name" name="contact-name" placeholder="Name" />
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
            />
          </div>
          <div className="contact-inputs__entry">
            <label htmlFor="contact-name" className="contact-label">
              Message
            </label>
            <textarea id="contact-message" name="contact-message" />
            <Button className="btn btn-contact contact-submit" text="Submit" />
          </div>
        </fieldset>
      </div>
    </section>
  );
};

export default Contact;
