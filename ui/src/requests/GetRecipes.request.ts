import axios from 'axios';
import { Recipe } from '../interfaces/recipe.interface';

export async function getRecipes() {
  try {
    const url: string = (process.env.REACT_APP_GET_ALL_RECIPES as string);
    const data =  await axios.get<Recipe[]>(
      url,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    return data;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('Request Error:: ', error.message);
      return `Request Error: ${error.message}`;
    } else {
      console.log('unexpected error: ', error);
      return `Unexpected error occurred: ${error}`;
    }
  }
}
