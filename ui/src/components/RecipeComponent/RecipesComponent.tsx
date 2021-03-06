import * as React from 'react';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Recipe } from '../../interfaces/recipe.interface';
import { getRecipes } from '../../requests/GetRecipes.request';
import { useGlobalState } from '../../context/GlobalContext';
import CardComponent from '../CardComponent/CardComponent';
import Typography from '@mui/material/Typography';

export function RecipesComponent() {
  const globalServiceContext = useGlobalState();
  // @ts-ignore
  const { recipes, setRecipes, isDeleted } = globalServiceContext;

  useEffect(() => {
    getRecipes()
      .then((response) => {
        if (typeof response !== 'string') {
          setRecipes(response.data);
        }
      });
  }, [isDeleted, setRecipes]);

  return (
    <>
      <Typography variant="h5">List all recipes</Typography>
      {recipes?.map((value: Recipe) => (
        <div key={value.id}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={8} style={{ padding: 20 }}>
                <CardComponent key={value.name} name={value.name} details={value.recipe} id={value.id} />
              </Grid>
            </Grid>
          </Box>
        </div>
      ))}
    </>
  );
}
