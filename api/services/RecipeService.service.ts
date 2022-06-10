import { fetchRecipes, fetchRecipeById } from '../db-requests/RecipesData.requests';

/**
 * Service Methods GET Operations
 */
export const findAllRecipes = async () => await fetchRecipes();

export const findRecipesById = async (recipeId: string) => await fetchRecipeById(recipeId);
