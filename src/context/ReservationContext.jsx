import { createContext, useState } from "react";

export const ReservationContext = createContext();

export function ReservationContextProvider({ children }) {
  const [reservation, setReservation] = useState(false);

  return (
    <ReservationContext.Provider value={{ reservation, setReservation }}>
      {children}
    </ReservationContext.Provider>
  );
}

export default ReservationContext;
