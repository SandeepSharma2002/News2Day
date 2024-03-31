import { createContext, useContext, useEffect, useState } from "react";

export const SidebarContext = createContext();

export default function SidebarContextProvider({ children }) {
  const pathname = window.location.pathname;
  const [active, setActive] = useState(pathname);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1024) {
        setExpanded(false);
      } else setExpanded(true);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        active,
        setActive,
        expanded,setExpanded
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebarContext() {
  const context = useContext(SidebarContext);
  if (context === null) {
    throw new Error(
      "SidebarContext must be used within an SideBarContextProvider"
    );
  }
  return context;
}
