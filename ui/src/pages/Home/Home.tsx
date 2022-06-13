import React from 'react';
import { Container } from '@mui/material';
import { RecipesComponent } from '../../components/RecipesComponent';

export function Home() {
  return (
    <Container maxWidth="xl">
      <h1>Recipe App</h1>
        <RecipesComponent />
    </Container>
  );
}
