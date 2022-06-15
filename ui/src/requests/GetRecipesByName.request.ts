import axios from 'axios';
import { Recipe } from '../interfaces/recipe.interface';

export async function getRecipesByName(recipeName: string) {
  try {
    const url: string = (process.env.REACT_APP_GET_RECIPE_BY_NAME as string);
    return await axios.post<Recipe[]>(
      url,
      {
        name: recipeName
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
