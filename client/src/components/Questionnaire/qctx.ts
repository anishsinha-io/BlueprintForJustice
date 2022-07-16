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

export default QContext;
