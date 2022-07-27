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

import React, { useState } from "react";

import { Link } from "react-router-dom";

export interface DropdownAttrs {
  text?: string;
  href: string;
  component?: any;
}

const Dropdown: React.FC<{
  title?: string;
  items: DropdownAttrs[];
  className?: string;
  children?: any;
  icon?: any;
  justify?: "left" | "right" | "center";
}> = ({ title, items, className, children, icon: Icon, justify }) => {
  const [active, setActive] = useState<boolean>(false);
  const options = items.map((item: DropdownAttrs) => (
    <div key={item.href}>
      <Link to={item.href}>{item.text}</Link>
    </div>
  ));

  return (
    <div
      className={`app-dropdown ${className} app-dropdown--${justify}`}
      onMouseEnter={() => setActive(() => true)}
      onMouseLeave={() => setActive(() => false)}
    >
      <div className={`app-dropdown__title ${className}__title`}>
        {Icon ? <Icon /> : title}
      </div>
      {children}
      <div
        className={`app-dropdown__options ${className}__options ${
          active ? "" : "hidden"
        } app-dropdown__options--${justify}`}
      >
        {options}
      </div>
    </div>
  );
};

export default Dropdown;
