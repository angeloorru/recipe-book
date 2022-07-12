import React from 'react';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
// eslint-disable-next-line import/extensions
import TabViewComponent from '../../components/TabViewComponent/TabViewComponent';

export function Home() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h3">Recipe App</Typography>
      <TabViewComponent />
    </Container>
  );
}
