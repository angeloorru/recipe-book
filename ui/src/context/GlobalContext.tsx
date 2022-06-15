import React, {
  createContext, useContext, useState,
} from 'react';

interface GlobalProviderProps {
  children: any;
}

const GlobalContext = createContext({});

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [recipes, setRecipes] = useState();
  const [searchedRecipes, setSearchedRecipes] = useState();

  return (
    <GlobalContext.Provider
      value={{
        recipes,
        setRecipes,
        searchedRecipes,
        setSearchedRecipes,
        // Add more global state as needed
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalState = () => useContext(GlobalContext);
