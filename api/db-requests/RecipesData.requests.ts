import { AppDataSource } from '../database/config/datasource.config';
import { Recipes } from '../database/entities/recipes.entity';

export const fetchRecipes = async () => AppDataSource.manager.find(Recipes);

export const fetchRecipeByName = async (recipeName: string) => AppDataSource.getRepository(Recipes)
  .createQueryBuilder('recipes')
  .where('recipes.name ilike :name', { name: `%${recipeName}%` })
  .getMany();

export const addRecipe = async (name: string, recipe: object) => {
  const newRecipe = new Recipes();
  newRecipe.name = name;
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
