import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import ButtonComponent from '../Button/ButtonComponent';
import { FormControl, FormHelperText } from '@mui/material';
import { addNewRecipe } from '../../requests/AddNewRecipe.request';
import mockedData from '../../requests/addNewRecipeUtil';
import CustomAlert from '../AlertComponent/CustomAlert';


export default function FormComponent() {
  const [recipeName, setRecipeName] = useState<string>('');
  const [alert, setAlert] = useState<boolean>(false);

  const requestNewRecipe = () => {
    if(recipeName) {
      const fakeNewRecipe: object = mockedData(recipeName);

      addNewRecipe(recipeName, fakeNewRecipe)
        .then((response) => {
          if (typeof response !== 'string') {
            setAlert(true);
          }
        });
    }else{
      setAlert(true);
    }
  }

  return (
    <>
      {alert && (<CustomAlert message={'The new recipe has been added'} severity={'success'} />)}
      <Typography variant="h5">Add a new recipe</Typography>
      <FormControl>
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          value={recipeName || ''}
          onChange={e => setRecipeName(e.target.value)}
        />
        <FormHelperText id="my-helper-text">*POC Recipe details</FormHelperText>
      </FormControl>

      <ButtonComponent variant={'outlined'} text={'Add'} onClick={requestNewRecipe} />
    </>
  );
}
