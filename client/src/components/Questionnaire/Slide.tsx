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

import React, { useContext, useState } from "react";

import SettingsCtx from "components/ctx";

import Button from "components/Reusables/Button";

import Card from "components/Reusables/Card";

import AhmaudArbery from "assets/ahmaud-arbery-img-asset.jpeg";
import Law101 from "assets/law-101.png";

import PhilandoCastile from "assets/philando-castile-img-asset.jpeg";
import TakingAction from "assets/taking-action.png";

import ElijahMcClain from "assets/elijah-mcclain-img-asset.jpeg";
import CommunityConnections from "assets/community-connections.png";

import { ReactComponent as MainLogoDark } from "assets/svg/blackmothersfilm-logo-dark.svg";

const Slide: React.FC<{ slideNum: number }> = ({ slideNum }) => {
  const optionsList: string[][] = [
    ["Option1-1", "Option1-2", "Option1-3"],
    ["Option2-1", "Option2-2", "Option2-3"],
    ["Option3-1", "Option3-2", "Option3-3"],
    ["Option4-1", "Option4-2", "Option4-3"],
    ["Option5-1", "Option5-2", "Option5-3"],
    ["Option6-1", "Option6-2", "Option6-3"],
  ];

  const [currSlide, setCurrSlide] = useState<number>(slideNum);

  const [finished, setFinished] = useState<boolean>(false);

  const ctx = useContext(SettingsCtx);

  const handleNext = () => {
    if (currSlide === 6) {
      setFinished(() => true);
    }
    setCurrSlide((prevCurrSlide) => prevCurrSlide + 1);
  };

  if (!finished)
    return (
      <div className="questionnaire-slide">
        <fieldset className="questionnaire-slide__options">
          <legend>
            <h2>Question {currSlide || "--"}</h2>
          </legend>
          <div className={`option-checkbox ${ctx.darkmode ? "dark" : ""}`}>
            <input
              type="checkbox"
              id="option1"
              name="interest"
              value="option1"
            />
            <label htmlFor="option1">
              {optionsList[currSlide - 1][0] ?? "--"}
            </label>
          </div>
          <div className={`option-checkbox ${ctx.darkmode ? "dark" : ""}`}>
            <input
              type="checkbox"
              id="option2"
              name="interest"
              value="option2"
            />
            <label htmlFor="option2">
              {optionsList[currSlide - 1][1] ?? "--"}
            </label>
          </div>
          <div className={`option-checkbox ${ctx.darkmode ? "dark" : ""}`}>
            <input
              type="checkbox"
              id="option3"
              name="interest"
              value="option3"
            />
            <label htmlFor="option3">
              {optionsList[currSlide - 1][2] ?? "--"}
            </label>
          </div>

          <Button
            className="btn btn-questionnaire"
            text="next"
            onClick={handleNext}
          />
        </fieldset>
      </div>
    );
  return (
    <div className="questionnaire-results">
      <div className="questionnaire-results__heading">
        <h2>Here's some resources for you</h2>
      </div>
      <div className="questionnaire-results__cards">
        <Card
          className="questionnaire-card"
          title="Legal Aid"
          imgSrc={AhmaudArbery}
          imgAlt="Ahmaud Arbery memorial"
          icon={MainLogoDark}
          size="sm"
          label="Legal Aid"
        />
        <Card
          className="questionnaire-card"
          title="Taking Action"
          imgSrc={PhilandoCastile}
          imgAlt="Philando Castile memorial"
          icon={MainLogoDark}
          size="sm"
          label="Taking Action"
        />
        <Card
          className="questionnaire-card"
          title="Community Connections"
          imgSrc={ElijahMcClain}
          imgAlt="Elijah McClain memorial"
          icon={MainLogoDark}
          size="sm"
          label="Community Connections"
        />
      </div>
    </div>
  );
};

export default Slide;
