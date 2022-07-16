import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "components/Home/Home";
import About from "components/About/About";
import Navbar from "components/Base/Navbar";
import Footer from "components/Base/Footer";
import Contact from "components/Contact/Contact";

import BaseResourcePage from "components/Resources/BaseResourcePage";

import SettingsCtx, {
  getDarkModeSetting,
  getPromptQuestionnaire,
} from "components/ctx";

import Questionnaire from "components/Questionnaire/Questionnaire";

import Card from "components/Reusables/Card";
import BreonnaTaylor from "assets/breonna-taylor-img-asset.jpeg";
import { ReactComponent as MainLogoDark } from "assets/svg/blackmothersfilm-logo-dark.svg";

const App = () => {
  const darkModeSetting: boolean = getDarkModeSetting();
  const [darkmode, setDarkmode] = useState<boolean>(darkModeSetting);
  const [promptQuestionnaire, setPromptQuestionnaire] = useState<boolean>(
    getPromptQuestionnaire()
  );
  return (
    <Router>
      <SettingsCtx.Provider
        value={{
          darkmode,
          setDarkmode,
          promptQuestionnaire,
          setPromptQuestionnaire,
        }}
      >
        <section className={`app-container ${darkmode ? "dark-mode" : ""}`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
            <Route
              path="/healing-and-support"
              element={<BaseResourcePage category="healing" />}
            />
            <Route
              path="/legal-aid"
              element={<BaseResourcePage category="legal" />}
            />
            <Route
              path="/taking-action"
              element={<BaseResourcePage category="action" />}
            />
            <Route
              path="/general"
              element={<BaseResourcePage category="general" />}
            />
            <Route
              path="/media-preparedness"
              element={<BaseResourcePage category="media" />}
            />
            <Route
              path="/community-connections"
              element={<BaseResourcePage category="community" />}
            />
          </Routes>
          <Footer />
        </section>
      </SettingsCtx.Provider>
    </Router>
  );
};

export default App;
