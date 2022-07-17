/** Blueprint For Justice
 ** Copyright (C) 2022 Anish Sinha
 **
 ** This program is free software: you can redistribute it and/or modify
 ** it under the terms of the GNU General Public License as published by
 ** the Free Software Foundation, either version 3 of the License, or
 ** (at your option) any later version.
 **
 ** This program is distributed in the hope that it will be useful,
 ** but WITHOUT ANY WARRANTY; without even the implied warranty of
 ** MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 ** GNU General Public License for more details.
 **
 ** You should have received a copy of the GNU General Public License
 ** along with this program.  If not, see http://www.gnu.org/licenses/.
 **/

import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import HealingResource from "components/Resources/HealingResource";
import LegalResource from "components/Resources/LegalResource";
import ActionResource from "components/Resources/ActionResource";
import GeneralResource from "components/Resources/GeneralResource";
import MediaResource from "components/Resources/MediaResource";
import CommunityResource from "components/Resources/CommunityResource";

import Dropdown from "components/Reusables/Dropdown";

import { ReactComponent as MenuIcon } from "assets/svg/menu-icon.svg";
import { ReactComponent as MenuIconDark } from "assets/svg/menu-icon-dark.svg";

import SettingsCtx from "components/ctx";

// type information required otherwise error will be thrown
const resourceMap: { [category: string]: (props: any) => JSX.Element } = {
  legal: LegalResource,
  healing: HealingResource,
  action: ActionResource,
  general: GeneralResource,
  media: MediaResource,
  community: CommunityResource,
};

const BaseResourcePage: React.FC<{ category: string }> = ({ category }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const Resource = resourceMap[category];

  const ctx = useContext(SettingsCtx);
  const FinalIcon = ctx.darkmode ? MenuIconDark : MenuIcon;
  return (
    <section className="app-baseresource">
      <div className="app-baseresource__links">
        <ul className={`sidebar-links ${ctx.darkmode ? "sidebar-dark" : ""}`}>
          <li
            className={`${
              category === "healing"
                ? `current${ctx.darkmode ? "--dark" : ""}`
                : ""
            }`}
          >
            <Link to="/healing-and-support">Healing and Support</Link>
          </li>
          <li
            className={`${
              category === "community"
                ? `current${ctx.darkmode ? "--dark" : ""}`
                : ""
            }`}
          >
            <Link to="/community-connections">Community Connections</Link>
          </li>
          <li
            className={`${
              category === "action"
                ? `current${ctx.darkmode ? "--dark" : ""}`
                : ""
            }`}
          >
            <Link to="/taking-action">Taking Action</Link>
          </li>
          <li
            className={`${
              category === "legal"
                ? `current${ctx.darkmode ? "--dark" : ""}`
                : ""
            }`}
          >
            <Link to="/legal-aid">Legal Aid</Link>
          </li>
          <li
            className={`${
              category === "media"
                ? `current${ctx.darkmode ? "--dark" : ""}`
                : ""
            }`}
          >
            <Link to="/media-preparedness">Media Preparedness</Link>
          </li>
          <li
            className={`${
              category === "general"
                ? `current${ctx.darkmode ? "--dark" : ""}`
                : ""
            }`}
          >
            <Link to="/general">General Resources</Link>
          </li>
        </ul>
      </div>
      <div className="resource-dropdown">
        <Dropdown
          className="resource-dropdown"
          items={[
            { text: "Legal Aid", href: "/legal-aid" },
            { text: "Healing and Support", href: "/healing-and-support" },
            { text: "Community Connections", href: "/community-connections" },
            { text: "Taking Action", href: "/taking-action" },
            { text: "Media Preparedness", href: "/media-preparedness" },
            { text: "Resources for You", href: "/resources-for-you" },
          ]}
        >
          <FinalIcon />
        </Dropdown>
      </div>
      <Resource className="app-baseresource__resource" />
    </section>
  );
};

export default BaseResourcePage;
