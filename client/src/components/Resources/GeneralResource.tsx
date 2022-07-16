import { useState, useEffect, useContext } from "react";
import axios from "axios";

import { LinkData, LinkAttrs } from "components/Resources/resourcetypes";
import ResourceBlock from "components/Resources/ResourceBlock";

import SettingsCtx from "components/ctx";

import ResourceLoading from "components/Resources/ResourceLoading";

const GeneralResource = () => {
  const ctx = useContext(SettingsCtx);
  const [linkData, setLinkData] = useState<LinkData>({});
  const [loading, setLoading] = useState<boolean>(true);

  const getLinks = async () => {
    const res = await axios.get(
      "http://localhost:8080/api/resources/validate-links?resource=general"
    );
    const data = await res.data;
    setLinkData(data);
    setLoading(false);
  };

  useEffect(() => {
    getLinks();
  }, []);

  let jsx;
  if (!loading) {
    const final = Object.entries(linkData).map(([k, v]) => {
      const items = v.map((link: LinkAttrs) => {
        return <ResourceBlock key={link.href} attrs={link} />;
      });
      return (
        <div key={k} className="block-container">
          <h1>{k}</h1> {items}
        </div>
      );
    });
    jsx = (
      <div className="resource-wrapper">
        <h1 className="resource-title">General Resources</h1>
        {final}
      </div>
    );
  }

  return (
    <div className="app-resource">
      <div className="resource-header">
        <div className="resource-header__name">
          <h1>General Resources</h1>
        </div>
        <div className="resource-header__body">
          <div className="resource">
            <div
              className={`resource__subheading${ctx.darkmode ? "--dark" : ""}`}
            >
              Overview
            </div>
            <div className="resource__content">
              This section contains a list of resources that are generally
              applicable to a wide variety of situations around police brutality
              and racial trauma.
            </div>
          </div>
        </div>
        <hr />
      </div>
      {loading ? <ResourceLoading /> : jsx}
    </div>
  );
};

export default GeneralResource;
