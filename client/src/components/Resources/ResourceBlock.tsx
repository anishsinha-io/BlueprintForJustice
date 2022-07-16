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
