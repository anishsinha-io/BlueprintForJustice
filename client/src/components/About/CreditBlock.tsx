import React from "react";

const CreditBlock: React.FC<{
  title: string;
  name: string;
  href?: string;
}> = ({ title, name, href }) => {
  return (
    <div className="credit-block">
      <div className="credit-block__title">{title}</div>
      <div className="credit-block__name">{name}</div>
      <div className="credit-block__website">
        <a href={href || ""} target="_blank" rel="noreferrer">
          Website
        </a>
      </div>
    </div>
  );
};

export default CreditBlock;
