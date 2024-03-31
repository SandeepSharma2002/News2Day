import { createContext, useContext, useState } from "react";

export const NewsContext = createContext();

export default function NewsContextProvider({ children }) {
  const [newsData, setNewsData] = useState({});
  return (
    <NewsContext.Provider
      value={{
        newsData,
        setNewsData,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}

export function useNewsContext() {
  const context = useContext(NewsContext);
  if (context === null) {
    throw new Error("NewsContext must be used within an NewsContextProvider");
  }
  return context;
}
