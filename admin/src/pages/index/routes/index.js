// 路由表
const ROUTES = [
  {
    path: '/',
    name: '示例项目',
    models: ['count'],
    component: () => import('./Home'),
    exact: true
  },
  {
    path: '/demo',
    name: '2222',
    models: ['count'],
    component: () => import('./Demo'),
    exact: true
  },
  // fallback
  {
    path: '*',
    component: () => import('@/components/common/ui/404')
  }
];

export default ROUTES;
