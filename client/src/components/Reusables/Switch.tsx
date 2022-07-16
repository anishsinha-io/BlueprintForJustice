import React from "react";

const Switch: React.FC<{
  defaultChecked: boolean;
  handleToggle: () => void;
}> = ({ defaultChecked, handleToggle }) => {
  return (
    <>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        checked={defaultChecked}
        onChange={handleToggle}
      />
      <label className="react-switch-label" htmlFor={`react-switch-new`}>
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
