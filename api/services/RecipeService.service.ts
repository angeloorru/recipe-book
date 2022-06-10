import { fetchRecipes, fetchRecipeById } from '../db-requests/RecipesData.requests.ts';

/**
 * Service Methods GET Operations
 */
export const findAllRecipes = async () => fetchRecipes();

export const findRecipesById = async (recipeId: string) => fetchRecipeById(recipeId);
