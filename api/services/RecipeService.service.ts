import {
  fetchRecipes, fetchRecipeByName, addRecipe, deleteRecipe,
} from '../db-requests/RecipesData.requests';

/**
 * Service Methods GET Operations
 */
export const findAllRecipes = async () => fetchRecipes();

export const findRecipeByName = async (recipeName: string) => fetchRecipeByName(recipeName);

/**
 * Service Methods POST Operations
 */
export const addNewRecipe = async (name: string, recipe: object) => addRecipe(name, recipe);

/**
 * Service Methods DELETE Operations
 */
export const deleteRecipesById = async (recipeId: number) => deleteRecipe(recipeId);
