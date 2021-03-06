import React, { createElement } from 'react';
import { Switch, Route, routerRedux } from 'dva/router';
import { dynamic } from '@/utils/router';
import App from '@/layouts/AppWrapper';
import ROUTES from './pages/config';

const ConnectedRouter = routerRedux.ConnectedRouter;

function getRouterConfig({ history, app }: { history: any; app: any }) {
  const routes = ROUTES.map(route => {
    const { models = [], component, ...restProps } = route;
    const modelsCache = models.reduce(
      (memo, model) => ({ ...memo, [model]: require(`./pages/models/${model}`).default }),
      {}
    );

    return { ...restProps, component: dynamic({ app, component, models: modelsCache }) };
  });

  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          {routes.map((route, index) => {
            const { component, ...restProps } = route;
            const newProps = ROUTES[index];
            const routeComponent = (props: any) => createElement(component, { ...props, ...newProps });

            return <Route key={route.path} {...restProps} component={routeComponent} />;
          })}
        </Switch>
      </App>
    </ConnectedRouter>
  );
}

export default getRouterConfig;
