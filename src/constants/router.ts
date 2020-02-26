import BasicLayout from 'src/layouts/BasicLayout';
import { Roles, RouteNode } from 'src/layouts/RouterLayout';
import Analysis from 'src/pages/analysis';
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
        img: 'dash.png',
        component: Analysis,
      },
      // {
      //   path: '/analysis',
      //   name: 'Analysis',
      //   icon: 'analysis',
      //   component: Analysis,
      // },
      {
        path: '/product',
        name: 'Product',
        img: 'time-left.png',
        routes: [
          {
            path: '/product-list',
            name: 'Product List',
            component: Dashboard,
          },
          {
            path: '/product-details',
            name: 'Product Details',
            hideInMenu: true,
            component: ProductionList,
          },
        ],
      },
      {
        path: '/dashboard1',
        name: 'Records',
        img: 'file.png',
        component: Analysis,
      },
      {
        path: '/dashboard2',
        name: 'Supply Store',
        img: 'shopping-cart.png',
        component: Analysis,
      },
      {
        path: '/dashboard3',
        name: 'Market Place',
        img: 'supply.png',
        component: Analysis,
      },
      {
        path: '/dashboard4',
        name: 'Forums',
        img: 'chat.png',
        component: Analysis,
      },
      {
        path: '/',
        redirect: '/product-list',
        hideInMenu: true,
      },
    ],
  },
];
