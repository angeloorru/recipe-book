import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonComponent from '../Button/ButtonComponent';

export default function SearchComponent() {
  const searchRecipe = () => {
    console.log('clicked');
  }
  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Search recipe" variant="standard" />
      </Box>
      <ButtonComponent variant={'outlined'} text={'Search'} onClick={searchRecipe} />
    </>
  );
}
