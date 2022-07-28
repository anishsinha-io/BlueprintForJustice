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

import CreditBlock from "components/About/CreditBlock";

const Credits = () => {
  return (
    <div className="app-credits">
      <div className="app-credits__title">
        <h1>Development Team</h1>
      </div>
      <div className="app-credits__lead">
        <CreditBlock
          name="Jacqueline Vo"
          href="https://github.com/anish-sinha1"
          title="Project Lead"
          email="jackieqvo@gmail.com"
        />
      </div>
      <div className="app-credits__eng">
        <CreditBlock
          name="Anish Sinha"
          href="https://github.com/anish-sinha1"
          title="Lead Software Engineer"
          email="anishsinha0128@gmail.com"
        />
      </div>
      <div className="app-credits__design">
        <CreditBlock
          name="Alyssa Guo"
          href="https://github.com/anish-sinha1"
          title="UX Designer and Content Writer"
          email="jackieqvo@gmail.com"
        />
        <CreditBlock
          name="Satveer Singh"
          href="https://github.com/anish-sinha1"
          title="UX Designer and Content Writer"
          email="jackieqvo@gmail.com"
        />
        <CreditBlock
          name="Sai Ravi"
          href="https://github.com/anish-sinha1"
          title="UX Designer"
          email="jackieqvo@gmail.com"
        />
      </div>
    </div>
  );
};

export default Credits;
