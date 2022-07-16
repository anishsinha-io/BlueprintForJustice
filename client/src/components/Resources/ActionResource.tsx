import { useState, useEffect, useContext } from "react";
import axios from "axios";

import { LinkData, LinkAttrs } from "components/Resources/resourcetypes";
import ResourceBlock from "components/Resources/ResourceBlock";

import ResourceLoading from "components/Resources/ResourceLoading";

import SettingsCtx from "components/ctx";

const ActionResource = () => {
  const ctx = useContext(SettingsCtx);
  const [linkData, setLinkData] = useState<LinkData>({});
  const [loading, setLoading] = useState<boolean>(true);

  const getLinks = async () => {
    const res = await axios.get(
      "http://localhost:8080/api/resources/validate-links?resource=action"
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
        <h1 className="resource-title">Taking Action</h1>
        {final}
      </div>
    );
  }

  return (
    <div className="app-resource">
      <div className="resource-header">
        <div className="resource-header__name">
          <h1>Taking Action</h1>
        </div>
        <div className="resource-header__body">
          <div className="resource">
            <div
              className={`resource__subheading${ctx.darkmode ? "--dark" : ""}`}
            >
              Overview
            </div>
            <div className="resource__content">
              There are many paths you can take to seek justice and advocate for
              change. Below are stories from Mothers of the Movement advocating
              for legislative change, running for office, and creating community
              organizations. Also below are resources for you to turn pain into
              passion and progress. Some examples of taking action are listed
              below:
            </div>
            <div
              className={`resource__subheading${ctx.darkmode ? "--dark" : ""}`}
            >
              Mothers Advocating for Legislative Change
            </div>
            <div className="resource__content">
              <strong>Geneva Reed-Veal</strong>, mother of{" "}
              <strong>Sandra Bland</strong>, is on a mission to carry out her
              daughter's legacy of fighting against social injustice. She has
              appeared in front of congressional leaders at the Congressional
              Caucus on Black Women and Girls at the Library of Congress. In
              2016, she pushed for police reform in Texas. She advocated for the
              “Sandra Bland Act”, which called for the revision of racial
              profiling laws, officer training, and other accountability
              measures.
              <br />
              <br />
              <strong>Sequette Clark</strong>, mother of{" "}
              <strong>Stephon Clark</strong>. Along with her family and
              surrounding community, Sequette rallies on the capitol steps every
              year on March 18th to raise awareness of her son's murder.
              <br />
              <br />
              <strong>Tamika Palmer</strong>, mother of
              <strong>Breonna Taylor</strong>, worked to bring her daughter's
              death to national attention. Because of the tireless advocacy of
              her mother, Taylor's death attracted global attention and created
              the hashtag #sayhername. Palmer has also pushed for police reform
              legislation at the local and federal levels. Since then, cities
              and states have adopted laws, named after Taylor, that limit the
              use of no-knock warrants.
              <br />
              <br />
              <strong>Gwen Carr</strong>, mother of <strong>Eric Garner</strong>
              , has earned nation-wide recognition as an activist for the work
              she's done following her son's death. She has advocated for the
              anti-chokehold legislation and the Eric Garner Excessive Use of
              Force Prevention Act. She was also present as a speaker at the
              Democratic National Convention, along with other Mothers of the
              Movement.
              <br />
              <br />
              <strong>Lezley McSpadden</strong> has since become an author and
              filmmaker in her journey to find justice for her son,
              <strong>Michael Brown</strong>. She founded The Michael Brown
              Foundation and campaigned for the Michael Brown Bill.
              <br />
              <br />
              <strong>Samaria Rice</strong>, mother of{" "}
              <strong>Tamir Rice</strong>, has since founded the Tamir Rice
              Foundation, which “invests in the growth and enrichment of all
              children through after-school programs in arts and culture.” She
              also works as an advocate for juvenile rights in Cleveland, Ohio.
            </div>
            <div
              className={`resource__subheading${ctx.darkmode ? "--dark" : ""}`}
            >
              Mothers Running for Office
            </div>
            <div className="resource__content">
              <strong>Representative Lucy McBath </strong>ran for office after
              her son, <strong>Jordan Davis</strong>, was killed in 2012 by a
              man who fired 10 shots into his car. She decided to run for
              congress in 2017 after the Stoneman Douglas High School in
              Parkland, Florida. In January of 2019, she took her oath of office
              and “has sought bipartisan solutions to end gun violence, uplift
              small business and our economy, protect and serve our nation's
              veterans, and lower the cost of healthcare and prescription
              drugs.”
            </div>
          </div>
        </div>
        <hr />
      </div>
      {loading ? <ResourceLoading /> : jsx}
    </div>
  );
};

export default ActionResource;
