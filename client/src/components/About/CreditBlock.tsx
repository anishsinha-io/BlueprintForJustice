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

import SettingsCtx from "components/ctx";

const CreditBlock: React.FC<{
  title: string;
  name: string;
  href?: string;
  email?: string;
}> = ({ title, name, href, email }) => {
  const ctx = useContext(SettingsCtx);
  return (
    <div className={`credit-block ${ctx.darkmode && `credit-block--dark`}`}>
      <div className="credit-block__name">{name}</div>
      <div className="credit-block__title">{title}</div>
      <div className="credit-block__info">
        {href && (
          <>
            Website:{" "}
            <a href={href} target="_blank" rel="noreferrer">
              {href}
            </a>
            <br />
          </>
        )}
        Email: {email}
      </div>
    </div>
  );
};

export default CreditBlock;
