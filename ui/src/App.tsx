/* eslint-disable */
import './App.css';
import React from 'react';
import { BrowserRouter, Redirect, Route, RouteChildrenProps, Switch } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import { GlobalProvider } from './context/GlobalContext';
// eslint-disable-next-line import/extensions
import { routes } from './routes/routesObject';
// eslint-disable-next-line import/extensions
import { Url } from './routes/routes.enum';

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route: any) {
  const { path, routes } = route;
  return (
    <Route
      path={path}
      children={(props:RouteChildrenProps) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} element={routes} />
      )}
    />
  );
}

function App() {
  return (
    <div className="container" data-testid="test-app">
      <BrowserRouter>
        <GlobalProvider>
          <Switch>
            {routes.map((route) => (
              <RouteWithSubRoutes key={route.path} {...route} />
            ))}
            <Redirect to={Url.HOME} />
          </Switch>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
