import {fetchRecipes, fetchRecipeById} from "../db-requests/RecipesData.requests";


/**
 * Service Methods GET Operations
 */
export const findAllRecipes = async () => {
    return await fetchRecipes();
};

export const findRecipesById = async (recipeId: string) => {
    return await fetchRecipeById(recipeId);
};