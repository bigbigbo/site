import { RouteConfig } from '@/types/router';

/**
 * 此处声明所有一级路由的配置，如果有子路由，参照react-router的实践方式
 */
const ROUTES: RouteConfig[] = [
  {
    path: '/',
    name: '首页/仪表盘',
    models: [],
    component: () => import('./dashboard')
  },
  {
    path: '/login',
    name: '登录页',
    models: [],
    component: () => import('./login'),
    exact: true
  },
  {
    path: '/setup',
    name: '设置',
    models: [],
    component: () => import('./setup')
  },
  {
    path: '/post-list',
    name: '文章列表页',
    models: [],
    component: () => import('./post-list')
  },
  {
    path: '/post-editor',
    name: '文章编辑',
    models: [],
    component: () => import('./post-editor')
  },
  // fallback
  {
    path: '*',
    name: 'not found',
    component: () => import('@/components/404')
  }
];

export default ROUTES;
