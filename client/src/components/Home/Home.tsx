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
import { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import Heading from "components/Home/Heading";
import Resources from "components/Home/Resources";
import Stories from "components/Home/Stories";

import SettingsCtx from "components/ctx";

const Home = () => {
  const ctx = useContext(SettingsCtx);
  const navigate = useNavigate();
  useEffect(() => {
    if (ctx.promptQuestionnaire) navigate("/questionnaire");
  });
  return (
    <section className="app-home">
      <Heading />
      <Resources />
      <Stories />
    </section>
  );
};

export default Home;
