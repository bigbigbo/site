import React, { createElement } from 'react';
import { Switch, Route, routerRedux } from 'dva/router';
import { dynamic } from '@/utils/router';
import App from '../../layouts/AppWrapper';
import ROUTES from './routes';

const ConnectedRouter = routerRedux.ConnectedRouter; // eslint-disable-line

/* eslint-disable import/no-dynamic-require */
function RouterConfig({ history, app }) {
  const routes = ROUTES.map(route => {
    const { models = [], component, ...restProps } = route;
    const modelsCache = models.reduce(
      (memo, model) => ({ ...memo, [model]: require(`./models/${model}`).default }),
      {}
    );

    return { ...restProps, component: dynamic({ app, models: modelsCache, component }) };
  });

  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          {routes.map((route, index) => {
            const { component: Component, ...restProps } = route;
            const _props = ROUTES[index];
            const component = props => createElement(Component, { ...props, ..._props });

            return <Route key={route.path} {...restProps} component={component} />;
          })}
        </Switch>
      </App>
    </ConnectedRouter>
  );
}

export default RouterConfig;
