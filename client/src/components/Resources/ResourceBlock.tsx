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

import React, { useContext } from "react";

import { LinkAttrs } from "./resourcetypes";
import SettingsCtx from "components/ctx";

const ResourceBlock: React.FC<{ attrs: LinkAttrs }> = ({ attrs }) => {
  const ctx = useContext(SettingsCtx);
  return (
    <div className="resource-block">
      <div className="resource-block__link">
        <h4
          className={`link-heading ${ctx.darkmode ? "link-heading-dark" : ""}`}
        >
          <a href={attrs.href} target="_blank" rel="noreferrer">
            {attrs.text}
          </a>
        </h4>
      </div>
      <div className="resource-block__description">{attrs.description}</div>
    </div>
  );
};

export default ResourceBlock;
