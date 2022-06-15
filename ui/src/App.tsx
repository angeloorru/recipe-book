import './App.css';
import {
  BrowserRouter, Redirect, Route, Switch
} from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import { routes } from './routes/routesObject';
import { Url } from './routes/routes.enum';

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

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
       children={(props:any) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} element={route.routes} />
      )}
    />
  );
}

export default App;
