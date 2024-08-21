import { createContext, useState } from "react";

export const RequestContext = createContext();

export const RequestContextProvider = ({ children }) => {
  const [isRequestSuccessful, setIsRequestSuccessful] = useState(null);

  return (
    <RequestContext.Provider
      value={{ isRequestSuccessful, setIsRequestSuccessful }}
    >
      {children}
    </RequestContext.Provider>
  );
};
