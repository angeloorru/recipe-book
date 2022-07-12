import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
// eslint-disable-next-line import/extensions
import ButtonComponent from '../Button/ButtonComponent';
// eslint-disable-next-line import/extensions
import { getRecipesByName } from '../../requests/GetRecipesByName.request';
// eslint-disable-next-line import/extensions
import { useGlobalState } from '../../context/GlobalContext';
// eslint-disable-next-line import/extensions
import { Recipe } from '../../interfaces/recipe.interface';
// eslint-disable-next-line import/extensions
import CardComponent from '../CardComponent/CardComponent';
// eslint-disable-next-line import/extensions
import CustomAlert from '../AlertComponent/CustomAlert';

export default function SearchComponent() {
  const globalServiceContext = useGlobalState();
  // @ts-ignore
  const { searchedRecipes, setSearchedRecipes, isDeleted, setIsDeleted } = globalServiceContext;
  const [recipeName, setRecipeName] = useState<string>('');
  const [isShown, setIsShown] = useState<boolean>(false);
  const [alertEmpty, setAlertEmpty] = useState<boolean>(false);
  const [noDataAlert, setNoDataAlert] = useState<boolean>(false);

  const searchRecipe = () => {
    if (recipeName) {
      getRecipesByName(recipeName)
        . then((response) => {
          if (typeof response !== 'string') {
            setSearchedRecipes(response.data);
            setIsShown(true);
            setIsDeleted(false);
            setAlertEmpty(false);
            setNoDataAlert(false);
          }
        });
    } else {
      setAlertEmpty(true);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    searchedRecipes?.length === 0 && setNoDataAlert(true);

    if (isDeleted) {
      setIsShown(false);
      setRecipeName('');
      setIsDeleted(false);
    }
  }, [isDeleted, setIsShown, setIsDeleted, setRecipeName, searchedRecipes, noDataAlert]);

  return (
    <>
      {alertEmpty && <CustomAlert message="Text field cannot be empty" severity="error" />}
      {noDataAlert && <CustomAlert message="Nothing found" severity="info" />}
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
          label="Search recipe (Name/Ingr)"
          variant="standard"
          value={recipeName || ''}
          onChange={e => setRecipeName(e.target.value)}
        />
      </Box>
      <ButtonComponent variant="outlined" className="search-button" text="Search" onClick={searchRecipe} />
      {isShown &&
        searchedRecipes?.map((value: Recipe) => (
          <div key={value.id}>
            <Box sx={{ flexGrow: 1 }} style={{ marginTop: 20 }}>
              <Grid container spacing={2}>
                <Grid item xs={8} style={{ padding: 20 }}>
                  <CardComponent
                    key={value.name}
                    name={value.name}
                    details={value.recipe}
                    id={value.id}
                  />
                </Grid>
              </Grid>
            </Box>
          </div>
        ))}
    </>
  );
}
