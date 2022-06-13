import * as React from 'react';
import { Recipe } from '../interfaces/recipe.interface';
import { useEffect, useState } from 'react';
import { getRecipes } from '../requests/GetRecipes.request';
import Stack from '@mui/material/Stack';


export function RecipesComponent() {
  const [recipes, setRecipes] = useState<Recipe[]>();

  useEffect(() => {
   getRecipes()
     .then(response => {
       if (typeof response !== 'string') {
         setRecipes(response.data);
       }
     });
  }, []);

  return (
    <>
      {recipes?.map((value: Recipe) => {
        console.log(value)
        return (
        <div key={value.id}>
          <Stack spacing={2}>
            {value.name}
          </Stack>
        </div>
      )})}
    </>
  );
}
