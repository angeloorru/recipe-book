import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function SpacingGrid() {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="left" spacing={2}>
          {[0, 1, 2, 3].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 300,
                  width: 260,
                  backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
