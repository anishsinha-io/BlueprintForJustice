import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import Heading from "components/Home/Heading";
import Resources from "components/Home/Resources";
import BlueprintInAction from "components/Home/BlueprintInAction";

import SettingsCtx from "components/ctx";

const Home = () => {
  const ctx = useContext(SettingsCtx);
  const navigate = useNavigate();
  if (ctx.promptQuestionnaire) navigate("/questionnaire");
  return (
    <section className="app-home">
      <Heading />
      <Resources />
      <BlueprintInAction />
    </section>
  );
};

export default Home;
