import axios from 'axios';
import { Recipe } from '../interfaces/recipe.interface';

export async function addNewRecipe(recipeName: string, recipe: object) {
  try {
    const url: string = (process.env.REACT_APP_ADD_NEW_RECIPE as string);

    return await axios.post<Recipe[]>(
      url,
      {
        name: recipeName,
        recipe: recipe
      },
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('Request Error:: ', error.message);
      return `Request Error: ${error.message}`;
    }
    console.log('unexpected error: ', error);
    return `Unexpected error occurred: ${error}`;
  }
}
