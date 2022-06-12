import { fetchRecipes, fetchRecipeById } from '../db-requests/RecipesData.requests';

/**
 * Service Methods GET Operations
 */
export const findAllRecipes = async () => fetchRecipes();

export const findRecipesById = async (recipeId: number) => fetchRecipeById(recipeId);
