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

import { useContext } from "react";

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
