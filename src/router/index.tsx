import {
  RedditOutlined,
} from '@ant-design/icons';
import { lazy } from 'react';

const Home = lazy(() => import('../view/Home'));
const About = lazy(() => import('../view/About'));
const HomeC = lazy(() => import('../view/HomeC'));
const MarkDown = lazy(() => import('../view/markdown/md'));

const Error404 = lazy(() => import('../view/error/404'));
const Error500 = lazy(() => import('../view/error/500'));
const Error403 = lazy(() => import('../view/error/403'));

// 错误处理
const ErrorView:RouterFace[] = [
  {
    path: 'error',
    title: '错误处理',
    exact: true,
    icon: RedditOutlined,
    childern: [
      {
        path: '403',
        title: '403 错误',
        exact: true,
        component: Error403,
        icon: RedditOutlined,
      },
      {
        path: '404',
        title: '404 错误',
        exact: true,
        component: Error404,
        icon: RedditOutlined,
      },
      {
        path: '500',
        title: '500 错误',
        exact: true,
        component: Error500,
        icon: RedditOutlined,
      },
    ],
  },
];

// 多级路由
const multistageView:RouterFace[] = [
  {
    path: 'HomeC',
    title: '多级导航',
    exact: true,
    icon: RedditOutlined,
    childern: [
      {
        path: 'A',
        title: 'A',
        exact: true,
        component: HomeC,
        icon: RedditOutlined,
      },
      {
        path: 'B',
        title: 'B',
        exact: true,
        icon: RedditOutlined,
        childern: [
          {
            path: 'B-A',
            title: 'B-A',
            exact: true,
            component: HomeC,
            icon: RedditOutlined,
          },
          {
            path: 'B-B',
            title: 'B-B',
            exact: true,
            component: HomeC,
            icon: RedditOutlined,
          },
        ],
      },
      {
        path: 'C',
        title: 'C',
        exact: true,
        icon: RedditOutlined,
        childern: [
          {
            path: 'C-B',
            title: 'C-B',
            exact: true,
            component: HomeC,
            icon: RedditOutlined,
          },
          {
            path: 'C-A',
            title: 'C-A',
            exact: true,
            icon: RedditOutlined,
            childern: [
              {
                path: 'C-A-A',
                title: 'C-A-A',
                exact: true,
                component: HomeC,
                icon: RedditOutlined,
              },
            ],
          },
        ],
      },
    ],
  },
];

const RouterHSAE: RouterFace[] = [
  {
    path: 'home',
    title: '首页',
    exact: true,
    component: Home,
    icon: RedditOutlined,
  },
  // {
  //   path: 'markdown',
  //   title: 'markdown 文档',
  //   exact: true,
  //   icon: RedditOutlined,
  //   component: MarkDown,
  // },
  ...multistageView,
  {
    path: 'about',
    title: '关于',
    exact: true,
    icon: RedditOutlined,
    component: About,
  },
  ...ErrorView,
];

interface RouterFace {
  path: string, // 路由
  title: string, // 标题
  exact: Boolean, // 没有使用
  component?: Object, // 组件
  show?: Boolean, // 是否在导航栏 显示
  disabled?: Boolean, // 是否禁止点击
  icon: any, // 图标
  childern?: RouterFace[] // 递归
}

export {
  RouterHSAE,
};
