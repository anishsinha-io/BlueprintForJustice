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

// devBaseUrl will only work if NGINX is running. if not, change `localhost` to `localhost:8080`
export const devBaseUrl = "http://localhost/api";
export const prodBaseUrl = "https://blueprintforjustice.com/api";

const getBaseUrl = (): string => {
  if (process.env.NODE_ENV === "development") return devBaseUrl;
  return prodBaseUrl;
};

export default getBaseUrl;
