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
      <CreditBlock
        name="Anish Sinha"
        href="https://github.com/anish-sinha1/"
        title="Lead Software Engineer"
        email="anishsinha0128@gmail.com"
      />
      <CreditBlock
        name="Jacqueline Vo"
        title="Product Manager"
        email="jackieqvo@gmail.com"
      />
      <CreditBlock
        name="Satveer Singh"
        title="UX Designer and Content Writer"
        email="satveerxsingh@gmail.com"
      />
      <CreditBlock
        name="Alyssa Guo"
        href="https://www.alyssa.me/"
        title="UX Designer and Content Writer"
        email="hello@alyssa.me"
      />

      <CreditBlock
        name="Sai Ravi"
        title="UX Designer"
        email="anishsinha0128@gmail.com"
      />
    </div>
  );
};

export default Credits;
