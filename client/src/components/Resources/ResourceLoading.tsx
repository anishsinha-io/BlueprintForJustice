import React, { useContext } from "react";

import { ReactComponent as MainLogo } from "assets/svg/blackmothersfilm-logo.svg";
import { ReactComponent as MainLogoDark } from "assets/svg/blackmothersfilm-logo-dark.svg";
import SettingsCtx from "components/ctx";

const LoadingBlock = () => {
  const ctx = useContext(SettingsCtx);
  const LoadingSvg = ctx.darkmode ? MainLogoDark : MainLogo;
  return (
    <div className="loading-block">
      {/* <LoadingSvg className="loading" /> */}
      <div className={`loading-skeleton`} />
    </div>
  );
};

const ResourceLoading = () => {
  const ctx = useContext(SettingsCtx);
  return (
    <>
      <div className="loading-wrapper">
        <div className="skeleton-heading"></div>
        <LoadingBlock />
        <LoadingBlock />
        <LoadingBlock />
        <LoadingBlock />
        <LoadingBlock />
        <LoadingBlock />
      </div>
    </>
  );
};

export default ResourceLoading;
