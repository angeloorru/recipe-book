import React from 'react';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { RecipesComponent } from '../../components/RecipeComponent/RecipesComponent';

export function Home() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h3">Recipe App</Typography>
      <RecipesComponent />
    </Container>
  );
}
