import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();
const AppProvider = ({ children }) => {
  const [activeMobile, setActiveMobile] = useState(false);

  const handleMobileMenu = () => {
    setActiveMobile(!activeMobile);
  };

  useEffect(() => {
    if (activeMobile) {
      document.body.classList.add("active");
    }

    return () => {
      document.body.classList.remove("active");
    };
  }, [activeMobile]);
  return (
    <GlobalContext.Provider value={{ activeMobile, handleMobileMenu }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppProvider;
export const useGlobalContext = () => useContext(GlobalContext);
