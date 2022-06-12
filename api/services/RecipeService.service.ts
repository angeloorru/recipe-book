import {
  fetchRecipes, fetchRecipeById, addRecipe, deleteRecipe,
} from '../db-requests/RecipesData.requests';

/**
 * Service Methods GET Operations
 */
export const findAllRecipes = async () => fetchRecipes();

export const findRecipesById = async (recipeId: number) => fetchRecipeById(recipeId);

/**
 * Service Methods POST Operations
 */
export const addNewRecipe = async (recipe: object) => addRecipe(recipe);

/**
 * Service Methods DELETE Operations
 */
export const deleteRecipesById = async (recipeId: number) => deleteRecipe(recipeId);
