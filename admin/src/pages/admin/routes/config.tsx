import { RouteConfig } from '@/types/router';

/**
 * 此处声明所有一级路由的配置，如果有子路由，参照react-router的实践方式
 */
const ROUTES: RouteConfig[] = [
  {
    path: '/',
    name: '资源注册',
    models: [],
    component: () => import('./Home'),
    exact: true
  },
  // fallback
  {
    path: '*',
    name: 'not found',
    component: () => import('@/components/404')
  }
];

export default ROUTES;
