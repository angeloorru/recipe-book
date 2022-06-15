import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonComponent from '../Button/ButtonComponent';
import { useEffect, useState } from 'react';
import { getRecipesByName } from '../../requests/GetRecipesByName.request';
import { useGlobalState } from '../../context/GlobalContext';
import { Recipe } from '../../interfaces/recipe.interface';
import Grid from '@mui/material/Grid';
import CardComponent from '../CardComponent/CardComponent';
import CustomAlert from '../AlertComponent/CustomAlert';


export default function SearchComponent() {
  const globalServiceContext = useGlobalState();
  // @ts-ignore
  const { searchedRecipes, setSearchedRecipes, isDeleted, setIsDeleted } = globalServiceContext;
  const [recipeName, setRecipeName] = useState<string>('');
  const [isShown, setIsShown] = useState<boolean>(false);
  const [makeRequest, setMakeRequest] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);

  const searchRecipe = () => {
    setMakeRequest(true);
    !recipeName ? setAlert(true) : setAlert(false);

  }

  useEffect(() => {
    if(makeRequest){
      getRecipesByName(recipeName)
        . then((response )  => {
          if (typeof response !== 'string') {
            setSearchedRecipes(response.data);
            setIsShown(true);
            setIsDeleted(false);
          }
        });
      if(isDeleted) {
        setIsShown(false);
        setRecipeName('');
        setMakeRequest(false);
      }
    }
  }, [makeRequest, setSearchedRecipes, isDeleted, setIsDeleted, recipeName]);

  return (
    <>
      {alert && <CustomAlert message={'Text field cannot be empty'} severity={'error'} />}
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Search recipe"
          variant="standard"
          value={recipeName || ''}
          onChange={e => setRecipeName(e.target.value)}
        />
      </Box>
      <ButtonComponent variant={'outlined'} text={'Search'} onClick={searchRecipe} />
      {isShown &&
        searchedRecipes.map((value: Recipe) => (
          <div key={value.id}>
            <Box sx={{ flexGrow: 1}} style={{marginTop: 20}}>
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
