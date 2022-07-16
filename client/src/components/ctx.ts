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
