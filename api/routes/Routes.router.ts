import * as express from 'express';
import { Request, Response } from 'express';
import { Recipes } from '../interfaces/Recipes.interface';
import * as RecipeService from '../services/RecipeService.service';
import { ResponseStatus } from '../enums/RoutesEnum';

export const router = express.Router();

router.get('/recipes', async (req: Request, res: Response) => {
  try {
    const recipes: Recipes = await RecipeService.findAllRecipes();

    res.status(ResponseStatus.OK).send(recipes);
  } catch (e) {
    res.status(ResponseStatus.NOT_FOUND).send(e.message);
  }
});

router.get('/recipes/:id', async (req: Request, res: Response) => {
  // TODO
});

router.post('/recipes', async (req: Request, res: Response) => {
  // TODO
});

router.delete('/recipes/:id', async (req: Request, res: Response) => {
  // TODO
});
