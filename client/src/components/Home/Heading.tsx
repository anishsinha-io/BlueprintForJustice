import React, { useContext } from "react";

import HeadingImage from "assets/heading-image.png";

import SettingsCtx from "components/ctx";

const Heading = () => {
  const ctx = useContext(SettingsCtx);
  return (
    <>
      <section className="app-heading">
        <div className={`app-heading__text ${ctx.darkmode ? "" : "darkmode"}`}>
          <h3>Who We Are</h3>
          Blueprint for Justice is an organization dedicated to helping victims
          of police brutality and violence find the resources they need to both
          get justice for the harm they faced and heal from trauma incurred with
          a plethora of resources and stories of triumph.
        </div>
        <img
          className="app-heading__img"
          src={HeadingImage}
          alt="black mothers heading"
        />
      </section>
    </>
  );
};

export default Heading;
