import { AppDataSource } from '../database/config/datasource.config';
import { Recipes } from '../database/entities/recipes.entity';

export const fetchRecipes = async () => {
  const recipes: Recipes[] = await AppDataSource.manager.find(Recipes);

  return recipes;
};

export const fetchRecipeById = async (recipeId: number) => {
  const recipe: Recipes[] = await AppDataSource.manager.findBy(Recipes, { id: recipeId });
  return recipe;
};
