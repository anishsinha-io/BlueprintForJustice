export const devBaseUrl = "http://localhost:3000/";
export const prodBaseUrl = "https://blueprintforjustice.com/";

const getBaseUrl = (): string => {
  if (process.env.NODE_ENV === "development") return devBaseUrl;
  return prodBaseUrl;
};

export default getBaseUrl;
