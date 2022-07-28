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

/*
 * important note about settings: settings across domains won't carry over. for example, settings from https://blueprintforjustice.com/
 * will not automatically carry over to https://www.blueprintforjustice.com/. this is not really important but is worth noting
 */
import React from "react";

// add any other global user settings to this interface
export interface UserSettings {
  darkmode: boolean;
  setDarkmode?: any;
  promptQuestionnaire?: boolean;
  setPromptQuestionnaire?: any;
}

const SettingsCtx = React.createContext<UserSettings>({} as UserSettings);

export const getDarkModeSetting = (): boolean => {
  const darkmode: string | null = localStorage.getItem("darkmode");
  if (darkmode === "false" || !darkmode) return false;
  return true;
};

export const setDarkModeSetting = (darkmode: boolean): void => {
  if (darkmode) localStorage.setItem("darkmode", "true");
  else localStorage.setItem("darkmode", "false");
};

export const getPromptQuestionnaire = (): boolean => {
  const promptQuestionnaire: string | null = localStorage.getItem(
    "promptQuestionnaire"
  );
  if (promptQuestionnaire === "true" || !promptQuestionnaire) return true;
  return false;
};

export const setPromptQuestionnaire = (promptQuestionnaire: boolean): void => {
  if (promptQuestionnaire) localStorage.setItem("promptQuestionnaire", "true");
  else localStorage.setItem("promptQuestionnaire", "false");
};

export default SettingsCtx;
