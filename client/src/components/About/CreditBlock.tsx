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

import { useState, useContext } from "react";

import SettingsCtx from "components/ctx";

import { ReactComponent as UpArrow } from "assets/svg/up-arrow.svg";
import { ReactComponent as UpArrowDark } from "assets/svg/up-arrow-dark.svg";

const CreditBlock: React.FC<{
  title: string;
  name: string;
  href?: string;
  email?: string;
}> = ({ title, name, href, email }) => {
  const ctx = useContext(SettingsCtx);
  const Arrow = ctx.darkmode ? UpArrowDark : UpArrow;
  const [showDetails, setShowDetails] = useState<boolean>(false);
  return (
    <div className={`credit-block`}>
      <div className="credit-block__name">
        <p className="about-name">{name}</p>
        <Arrow
          className={`accordion-toggle ${
            showDetails && "flipped"
          } credit-block-arrow`}
          onClick={() => setShowDetails(() => !showDetails)}
        />
      </div>
      {showDetails && (
        <div className="credit-block__info">
          <div className="info-title">
            <p className="">{title}</p>
          </div>
          <div className="info-email">
            <p className="">Email: {email}</p>
          </div>
          {href && (
            <div className={`info-website${ctx.darkmode ? "--dark" : ""}`}>
              <a href={href} target="_blank" rel="noreferrer">
                Website
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreditBlock;
