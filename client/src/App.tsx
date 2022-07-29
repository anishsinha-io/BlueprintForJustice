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

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "components/Home/Home";
import About from "components/About/About";
import Navbar from "components/Base/Navbar";
import Footer from "components/Base/Footer";
import Contact from "components/Contact/Contact";
import BaseResourcePage from "components/Resources/BaseResourcePage";
import Questionnaire from "components/Questionnaire/Questionnaire";

import SettingsCtx, {
  getPromptQuestionnaire,
  getDarkModeSetting,
} from "components/ctx";

const App = () => {
  // get the user's dark mode preference
  const darkModeSetting: boolean = localStorage.getItem("darkmode")
    ? getDarkModeSetting()
    : window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
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
