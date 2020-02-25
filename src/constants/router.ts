import BasicLayout from 'src/layouts/BasicLayout';
import { Roles, RouteNode } from 'src/layouts/RouterLayout';
import Dashboard from 'src/pages/Dashboard';
import HomeHeader from 'src/pages/home-header';
import Login from 'src/pages/Login';
import ProductionList from 'src/pages/ProductionList';

// ! 始终保证准确路径在前
export const router: RouteNode[] = [
  { path: '/login', name: '登录', component: Login },
  {
    path: '/',
    name: '首页',
    component: BasicLayout,
    child: HomeHeader,
    layout: true,
    authority: [Roles.Guest],
    routes: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        icon: 'dashboard',
        component: Dashboard,
      },
      {
        path: '/operation',
        name: 'Operation',
        routes: [
          {
            path: '/product',
            name: 'Product',
            component: ProductionList,
          },
        ],
      },
    ],
  },
];
