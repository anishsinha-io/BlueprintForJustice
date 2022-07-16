import React from "react";

import CreditBlock from "components/About/CreditBlock";
import websiteTeam from "components/About/websiteTeam";

const Credits = () => {
  const websiteBlocks = websiteTeam.map(
    (member: { title: string; name: string; href?: string }) => (
      <CreditBlock title={member.title} name={member.name} href={member.href} />
    )
  );
  return (
    <div className="app-credits">
      <div className="credit-container">{websiteBlocks}</div>
      <div className="credit-container">{websiteBlocks}</div>
      <div className="credit-container">{websiteBlocks}</div>
      <div className="credit-container">{websiteBlocks}</div>
    </div>
  );
};

export default Credits;
