import * as express from 'express';
import { Request, Response } from 'express';
import winston from 'winston';
import * as RecipeService from '../services/RecipeService.service';
import { ResponseStatus } from '../enums/ResponseStatus.enum';
import { Recipes } from '../database/entities/recipes.entity';
import logConfiguration from '../logger/logger';

export const router = express.Router();

const logger = winston.createLogger(logConfiguration);

router.get('/recipes', async (req: Request, res: Response) => {
  try {
    logger.info('Getting all recipes');
    const recipes: Recipes[] = await RecipeService.findAllRecipes();

    res.status(ResponseStatus.OK).send(recipes);
    logger.info('All recipes have been fetched');
  } catch (e) {
    res.status(ResponseStatus.NOT_FOUND).send(e.message);
  }
});

router.get('/recipe', async (req: Request, res: Response) => {
  const { body } = req;
  try {
    logger.info('Getting recipe by name');
    const { name } = body;
    const recipe: Recipes[] = await RecipeService.findRecipeByName(name);

    res.status(ResponseStatus.OK).send(recipe);
    logger.info(`Recipe "${name}" has been fetched`);
  } catch (e) {
    res.status(ResponseStatus.NOT_FOUND).send(e.message);
  }
});

router.post('/recipes', async (req: Request, res: Response) => {
  const recipe: object = req.body;
  const { name } = req.body;

  try {
    logger.info('Creating a new recipe');
    const newRecipe: object = RecipeService.addNewRecipe(name, recipe);

    res.status(ResponseStatus.OK).send(newRecipe);
    logger.info(`The recipe ${name} has been created`);
  } catch (e) {
    res.status(ResponseStatus.NOT_FOUND).send(e.message);
  }
});

router.delete('/recipes/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    logger.info(`Deleting recipe with id ${id}`);
    const recipe: Recipes = await RecipeService.deleteRecipesById(Number(id));

    res.status(ResponseStatus.OK).send(recipe);
    logger.info('The recipe has been deleted');
  } catch (e) {
    res.status(ResponseStatus.NOT_FOUND).send(e.message);
  }
});
