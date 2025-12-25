import { createContext, useState } from "react";

// 1️⃣ Create context
export const TripContext = createContext({
  tripDetails: null,
  setTripDetails: () => {},
});

// 2️⃣ Create provider
export const TripProvider = ({ children }) => {
  const [tripDetails, setTripDetails] = useState(null);

  return (
    <TripContext.Provider value={{ tripDetails, setTripDetails }}>
      {children}
    </TripContext.Provider>
  );
};
