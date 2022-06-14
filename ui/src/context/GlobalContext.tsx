import React, {
  createContext, ReactNode, useContext, useState,
} from 'react';

interface GlobalProviderProps {
  children: any;
}

const GlobalContext = createContext({});

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [recipes, setRecipes] = useState();
  const [recipeName, setRecipeName] = useState();
  const [recipeDetails, setRecipeDetails] = useState();

  return (
    <GlobalContext.Provider
      value={{
        recipes,
        setRecipes,
        recipeName,
        setRecipeName,
        recipeDetails,
        setRecipeDetails,
        // Add more global state as needed
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalState = () => useContext(GlobalContext);
