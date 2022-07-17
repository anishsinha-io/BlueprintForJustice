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

import SettingsCtx from "components/ctx";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "components/Reusables/Button";
import Slide from "components/Questionnaire/Slide";

import { setPromptQuestionnaire, getPromptQuestionnaire } from "components/ctx";
import QContext, { QContextProps } from "components/Questionnaire/qctx";

const Questionnaire = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  const navigate = useNavigate();
  const ctx = useContext(SettingsCtx);
  const qctx = useContext(QContext);
  const handleExit = () => {
    setPromptQuestionnaire(false);
    ctx.setPromptQuestionnaire(getPromptQuestionnaire());
    navigate("/");
  };
  return (
    <div className="app-questionnaire">
      <Slide slideNum={1} />
      <Button
        className="btn btn-exit"
        text="Return Home"
        onClick={handleExit}
      />
    </div>
  );
};

export default Questionnaire;
