import { useState, useEffect, useContext } from "react";
import axios from "axios";

import { LinkData, LinkAttrs } from "components/Resources/resourcetypes";
import ResourceBlock from "components/Resources/ResourceBlock";

import ResourceLoading from "components/Resources/ResourceLoading";

import SettingsCtx from "components/ctx";

const MediaResource = () => {
  const ctx = useContext(SettingsCtx);

  const [linkData, setLinkData] = useState<LinkData>({});
  const [loading, setLoading] = useState<boolean>(true);

  const getLinks = async () => {
    const res = await axios.get(
      "http://localhost:8080/api/resources/validate-links?resource=media"
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
        <h1 className="resource-title">Resource Links</h1>
        {final}
      </div>
    );
  }

  return (
    <div className="app-resource">
      <div className="resource-header">
        <div className="resource-header__name">
          <h1>Media Preparedness</h1>
        </div>
        <div className="resource-header__body">
          <div className="resource">
            <div
              className={`resource__subheading${ctx.darkmode ? "--dark" : ""}`}
            >
              Overview
            </div>
            <div className="resource__content">
              It becomes more challenging to process and grieve while in the
              public eye. A variety of organizations may be helpful in your
              journey to change your narrative. Should you find yourself in a
              situation where you do not wish to speak to the media, or feel
              ambushed.
            </div>
            <div
              className={`resource__subheading${ctx.darkmode ? "--dark" : ""}`}
            >
              Stories from Mothers of the Movement
            </div>
            <div className="resource__content">
              Many Mothers have become public speakers, including Lesley
              McSpadden, who has addressed the United Nations, and Sybrina
              Fulton, who has told her story through the American Program
              Bureau.
              <br />
              <br />
              <strong>Wanda Johnson</strong> is an avid public speaker. She has
              outwardly spoken about her son's murder in 2009 and the injustice
              that was carried. Over the years, she's traveled the country as a
              featured speaker, held workshops, and while she is often appearing
              in the press, she is also vocal in public city council meetings.
              Wanda pushed for AB655, a bill in California that would hold
              police officers accountable for misconduct.
              <br />
              <br />
              <strong>Angela Williams</strong> has also become a public speaker
              in the years after her son's case went viral. She blasted her
              son's story on social media, has spoken to news outlets, and is
              pursuing legal action in order to get the police officers involved
              in the physical detriment of her son to be held accountable.
              <br />
              <br />
              <strong>Geneva Reed-Veal</strong>, mother of
              <strong>Sandra Bland</strong>, has spoken in many publications
              including the Chicago-Sun Times. She was also part of a group of
              mothers, Mother of the Movement, that spoke at the Democratic
              National Convention in 2016.
              <br />
              <br />
              <strong>Lucy McBath,</strong> mother of
              <strong>Jordan Davis</strong>, has since become a US
              representative in Congress. She decided to run for office after
              the Stoneman Douglas High School shooting in Parkland, Florida. In
              January of 2019, she took office and has since been an avid
              advocate against gun violence.
              <br />
              <br />
              In the years after losing her son, <strong>Jordan Davis</strong>
              has since become an author and filmmaker in her journey to find
              justice for her son, <strong>Jordan Davis</strong>
              <br />
              <br />
              <strong>Jordan Davis</strong>
              mother of Trayvon Martin, has also become an author and public
              speaker since losing her son in 2012.
            </div>
          </div>
        </div>
        <hr />
      </div>
      {loading ? <ResourceLoading /> : jsx}
    </div>
  );
};

export default MediaResource;
