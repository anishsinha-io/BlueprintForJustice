export const devBaseUrl = "http://localhost/api";
export const prodBaseUrl = "https://blueprintforjustice.com/api";

const getBaseUrl = (): string => {
  if (process.env.NODE_ENV === "development") return devBaseUrl;
  return prodBaseUrl;
};

export default getBaseUrl;
