import React, { useState } from "react";

import { Link } from "react-router-dom";

export interface DropdownAttrs {
  text: string;
  href: string;
}

const Dropdown: React.FC<{
  title?: string;
  items: DropdownAttrs[];
  className?: string;
  children?: any;
}> = ({ title, items, className, children }) => {
  const [active, setActive] = useState<boolean>(false);
  const options = items.map((item: DropdownAttrs) => (
    <div key={item.href}>
      <Link to={item.href}>{item.text}</Link>
    </div>
  ));

  return (
    <div
      className={`app-dropdown ${className}`}
      onMouseEnter={() => setActive(() => true)}
      onMouseLeave={() => setActive(() => false)}
    >
      <div className={`app-dropdown__title ${className}__title`}>
        {title || ""}
      </div>
      {children}
      <div
        className={`app-dropdown__options ${className}__options ${
          active ? "" : "hidden"
        }`}
      >
        {options}
      </div>
    </div>
  );
};

export default Dropdown;
