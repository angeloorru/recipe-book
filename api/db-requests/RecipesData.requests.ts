import { AppDataSource } from '../database/config/datasource.config';
import { Recipes } from '../database/entities/recipes.entity';

export const fetchRecipes = async () => AppDataSource.manager.find(Recipes);

export const fetchRecipeById = async (recipeId: number) => {
  const recipe: Recipes[] = await AppDataSource.manager.findBy(Recipes, { id: recipeId });
  return recipe;
};

export const addRecipe = async (recipe: object) => {
  const newRecipe = new Recipes();
  newRecipe.recipe = JSON.stringify(recipe);

  await AppDataSource.manager.save(newRecipe);
};

export const deleteRecipe = async (recipeId: number) => {
  const recipes = AppDataSource.getRepository(Recipes);
  const recipesToRemove = await recipes.findOneBy({
    id: recipeId,
  });

  return recipes.remove(recipesToRemove);
};
