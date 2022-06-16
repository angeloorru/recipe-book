import { Home } from '../pages/Home/Home';
import { Url } from './routes.enum';
import { RecipesComponent } from '../components/RecipeComponent/RecipesComponent';

export const routes = [
  {
    path: Url.HOME,
    component: Home,
    title: { desktop: 'Chef app', mobile: 'Chef app' },
  },
  //TODO: Implement routing with TabView MUI Component
  {
    path: Url.ADD_NEW_RECIPE,
    component: RecipesComponent,
    title: { desktop: 'Add new recipe', mobile: 'Add new recipe' },
  },
  {
    path: Url.VIEW_ALL_RECIPES,
    component: RecipesComponent,
    title: { desktop: 'View all recipes', mobile: 'View all recipes' },
  },
];
