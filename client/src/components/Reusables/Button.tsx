import React from "react";

const Button: React.FC<{
  className: string;
  text: string;
  onClick?: (e: any) => any;
}> = ({ className, text, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
