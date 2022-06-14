import { Home } from '../pages/Home/Home';
import { Url } from './routes.enum';

export const routes = [
  {
    path: Url.HOME,
    component: Home,
    title: { desktop: 'Chef app', mobile: 'Chef app' },

  },
];
