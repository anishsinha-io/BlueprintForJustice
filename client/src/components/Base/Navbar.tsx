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

import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Switch from "components/Reusables/Switch";
import Dropdown from "components/Reusables/Dropdown";

import { ReactComponent as LightModeSun } from "assets/svg/light-mode.svg";
import { ReactComponent as DarkModeMoon } from "assets/svg/dark-mode.svg";
import { ReactComponent as MainLogo } from "assets/svg/blackmothersfilm-logo.svg";
import { ReactComponent as MainLogoDark } from "assets/svg/blackmothersfilm-logo-dark.svg";
import { ReactComponent as MenuIcon } from "assets/svg/menu-icon.svg";
import { ReactComponent as MenuIconDark } from "assets/svg/menu-icon-dark.svg";

import SettingsCtx, {
  setDarkModeSetting,
  getDarkModeSetting,
} from "components/ctx";

const Navbar = () => {
  const ctx = useContext(SettingsCtx);
  const [toggled, setToggled] = useState<boolean>(ctx.darkmode);
  const Logo = ctx.darkmode ? MainLogoDark : MainLogo;
  const Icon = ctx.darkmode ? MenuIconDark : MenuIcon;

  return (
    <div className="app-navbar">
      <div className="app-navbar__logo">
        <Link to="/">
          <Logo id="logo" />
        </Link>
        <Link to="/">
          <h1 className="logo-text">Blueprint For Justice</h1>
        </Link>
      </div>
      <div className={`app-navbar__about${ctx.darkmode ? "--dark" : ""}`}>
        <Link to="/about">About</Link>
      </div>
      <div className={`app-navbar__contact${ctx.darkmode ? "--dark" : ""}`}>
        <Link to="/contact">Contact</Link>
      </div>
      <div className={`app-navbar__resources${ctx.darkmode ? "--dark" : ""}`}>
        <Dropdown
          title="Resources"
          items={[
            { text: "Legal Aid", href: "/legal-aid" },
            { text: "Healing and Support", href: "/healing-and-support" },
            { text: "Community Connections", href: "/community-connections" },
            { text: "Taking Action", href: "/taking-action" },
            { text: "Media Preparedness", href: "/media-preparedness" },
            { text: "General Resources", href: "/general" },
          ]}
          className={`navbar-resources${ctx.darkmode ? "--dark" : ""}`}
        />
      </div>
      <div className={`app-navbar__mobilemenu${ctx.darkmode ? "--dark" : ""} `}>
        <Dropdown
          items={[
            { text: "About", href: "/about" },
            { text: "Contact", href: "/contact" },
          ]}
          className={`mobile-options${ctx.darkmode ? "--dark" : ""}`}
          icon={Icon}
          justify="right"
        />
      </div>
      <div className={`app-navbar__switch`}>
        <div className="switch-container">
          <LightModeSun id="switch-sun" />
          <Switch
            defaultChecked={toggled}
            handleToggle={() => {
              setToggled(!toggled);
              setDarkModeSetting(!getDarkModeSetting());
              ctx.setDarkmode(getDarkModeSetting());
            }}
          />
          <DarkModeMoon id="switch-moon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
