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
