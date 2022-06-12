import * as express from 'express';
import { Request, Response } from 'express';
import * as RecipeService from '../services/RecipeService.service';
import { ResponseStatus } from '../enums/ResponseStatus.enum';

export const router = express.Router();

router.get('/recipes', async (req: Request, res: Response) => {
  try {
    const recipes: object = await RecipeService.findAllRecipes();

    res.status(ResponseStatus.OK).send(recipes);
  } catch (e) {
    res.status(ResponseStatus.NOT_FOUND).send(e.message);
  }
});

router.get('/recipes/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const recipe: object = await RecipeService.findRecipesById(Number(id));

    res.status(ResponseStatus.OK).send(recipe);
  } catch (e) {
    res.status(ResponseStatus.NOT_FOUND).send(e.message);
  }
});

router.post('/recipes', async (req: Request, res: Response) => {
  // TODO
});

router.delete('/recipes/:id', async (req: Request, res: Response) => {
  // TODO
});
