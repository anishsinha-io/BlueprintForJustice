import React, { useContext } from "react";

import SettingsCtx from "components/ctx";

const Tab: React.FC<{
  text: string;
  active?: boolean;
  onClick?: () => void;
}> = ({ text, active, onClick }) => {
  const ctx = useContext(SettingsCtx);
  return (
    <div
      className={`app-tab ${active ? "active" : ""} ${
        active ? "active" : ""
      }--${ctx.darkmode ? "dark" : ""}`}
      onClick={onClick}
    >
      <h3>{text}</h3>
    </div>
  );
};

export default Tab;
