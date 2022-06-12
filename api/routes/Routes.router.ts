import * as express from 'express';
import { Request, Response } from 'express';
import * as RecipeService from '../services/RecipeService.service';
import { ResponseStatus } from '../enums/ResponseStatus.enum';
import { Recipes } from '../database/entities/recipes.entity';

export const router = express.Router();

router.get('/recipes', async (req: Request, res: Response) => {
  try {
    const recipes: Recipes[] = await RecipeService.findAllRecipes();

    res.status(ResponseStatus.OK).send(recipes);
  } catch (e) {
    res.status(ResponseStatus.NOT_FOUND).send(e.message);
  }
});

router.get('/recipe', async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const recipe: Recipes[] = await RecipeService.findRecipeByName(body.name);

    res.status(ResponseStatus.OK).send(recipe);
  } catch (e) {
    res.status(ResponseStatus.NOT_FOUND).send(e.message);
  }
});

router.post('/recipes', async (req: Request, res: Response) => {
  const recipe: object = req.body;
  const { name } = req.body;

  try {
    const newRecipe: object = RecipeService.addNewRecipe(name, recipe);

    res.status(ResponseStatus.OK).send(newRecipe);
  } catch (e) {
    res.status(ResponseStatus.NOT_FOUND).send(e.message);
  }
});

router.delete('/recipes/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const recipe: Recipes = await RecipeService.deleteRecipesById(Number(id));

    res.status(ResponseStatus.OK).send(recipe);
  } catch (e) {
    res.status(ResponseStatus.NOT_FOUND).send(e.message);
  }
});
