import { AppDataSource } from '../database/config/datasource.config';
import { Recipes } from '../database/entities/recipes.entity';

export const fetchRecipes = async () => AppDataSource.manager.find(Recipes);
/*
 * Search recipe by name
 */
export const fetchRecipeByName = async (recipeName: string) => AppDataSource.getRepository(Recipes)
  .createQueryBuilder('recipes')
  .where('recipes.name ilike :name', { name: `%${recipeName}%` })
  .getMany();

/*
 * Search recipe by ingredients
 */
export const fetchRecipeByIngredients = async (recipeName: string) => AppDataSource.manager
  .query(`SELECT * FROM recipes WHERE EXISTS (SELECT TRUE FROM jsonb_array_elements(recipe->'ingredients') as ingr WHERE ingr->>'name' like '%${recipeName}%')`);

/*
 * Add a new recipe
 */
export const addRecipe = async (name: string, recipe: any) => {
  const newRecipe = new Recipes();
  newRecipe.name = name;
  newRecipe.recipe = JSON.stringify(recipe.recipe);

  await AppDataSource.manager.save(newRecipe);
};

/*
 * Delete a recipe
 */
export const deleteRecipe = async (recipeId: number) => {
  const recipes = AppDataSource.getRepository(Recipes);
  const recipesToRemove = await recipes.findOneBy({
    id: recipeId,
  });

  return recipes.remove(recipesToRemove);
};
