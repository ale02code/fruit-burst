import { createContext, useState } from "react";

export const RequestContext = createContext();

export const RequestContextProvider = ({ children }) => {
  const [responseMessage, setResponseMessage] = useState(null);

  return (
    <RequestContext.Provider value={{ responseMessage, setResponseMessage }}>
      {children}
    </RequestContext.Provider>
  );
};
