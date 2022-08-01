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

import React from "react";

export interface QContextProps {
  action: number;
  media: number;
  community: number;
  general: number;
  legal: number;
  healing: number;
}

const QContext = React.createContext<QContextProps>({
  action: 0,
  media: 0,
  community: 0,
  general: 0,
  legal: 0,
  healing: 0,
});

const getRecommendations = (qctx: QContextProps): string[] => {
  return [];
};

export default QContext;
