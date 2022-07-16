import { useContext } from "react";

import BreonnaTaylor from "assets/breonna-taylor-img-asset.jpeg";
import GeorgeFloyd from "assets/george-floyd-img-asset.png";

import CommunityConnections from "assets/resource-images/community-connections.png";
import TakingAction from "assets/resource-images/taking-action.png";
import LegalAid from "assets/resource-images/legal-aid.png";
import GeneralResources from "assets/resource-images/general-resources.png";

import { ReactComponent as HealingIcon } from "assets/resource-icons/healing.svg";
import { ReactComponent as CommunityConnectionsIcon } from "assets/resource-icons/community-connections.svg";
import { ReactComponent as TakingActionIcon } from "assets/resource-icons/taking-action.svg";
import { ReactComponent as LegalAidIcon } from "assets/resource-icons/legal-aid.svg";
import { ReactComponent as MediaPreparednessIcon } from "assets/resource-icons/media-preparedness.svg";
import { ReactComponent as GeneralResourcesIcon } from "assets/resource-icons/general-resources.svg";

import Card from "components/Reusables/Card";
import SettingsCtx from "components/ctx";

import { ReactComponent as MainLogoDark } from "assets/svg/blackmothersfilm-logo-dark.svg";

const Resources = () => {
  const ctx = useContext(SettingsCtx);

  const cards = [
    {
      label: "Healing and Support",
      imgSrc: BreonnaTaylor,
      imgAlt: "healing and support card",
      icon: MainLogoDark,
      title: "Healing and Support",
      link: "/healing-and-support",
      cover: HealingIcon,
    },
    {
      label: "Community Connections",
      imgSrc: CommunityConnections,
      imgAlt: "community connections card",
      icon: MainLogoDark,
      title: "Community Connections",
      link: "/community-connections",
      cover: CommunityConnectionsIcon,
    },
    {
      label: "Taking Action",
      imgSrc: TakingAction,
      imgAlt: "taking action card",
      icon: MainLogoDark,
      title: "Taking Action",
      link: "/taking-action",
      cover: TakingActionIcon,
    },
    {
      label: "Legal Aid",
      imgSrc: LegalAid,
      imgAlt: "legal aid card",
      icon: MainLogoDark,
      title: "Legal Aid",
      link: "/legal-aid",
      cover: LegalAidIcon,
    },
    {
      label: "Media Preparedness",
      imgSrc: GeorgeFloyd,
      imgAlt: "media preparedness card",
      icon: MainLogoDark,
      title: "Media Preparedness",
      link: "/media-preparedness",
      cover: MediaPreparednessIcon,
    },
    {
      label: "General Resources",
      imgSrc: GeneralResources,
      imgAlt: "resources for you card",
      icon: MainLogoDark,
      title: "General Resources",
      link: "/general",
      cover: GeneralResourcesIcon,
    },
  ];

  const cardsHtml = cards.map((card: any) => (
    <Card
      label={card.label}
      imgSrc={card.imgSrc}
      imgAlt={card.imgAlt}
      icon={card.icon}
      title={card.title}
      link={card.link}
      cover={card.cover}
    />
  ));
  return (
    <>
      <section className="app-resources">
        <div className="resources-description">
          <h2>Resources</h2>
          <p>
            We’ve prepared a list of resources for mothers and family members
            who find themselves in these unimaginable situations. Below, you’ll
            find the tools you’ll need to get prepared to talk to the media,
            find legal resources, and organizations on the local and national
            level. You’ll also find stories of triumph and strength from the
            Mothers of the Movement.
          </p>
        </div>
        <div className="resources-container">{cardsHtml}</div>
      </section>
    </>
  );
};

export default Resources;
