import {
  RedditOutlined,
} from '@ant-design/icons';
import { lazy } from 'react';

const Home = lazy(() => import('../view/Home'));
const About = lazy(() => import('../view/About'));
const HomeC = lazy(() => import('../view/HomeC'));
const MarkDown = lazy(() => import('../view/markdown/md'));

const Login = lazy(() => import('../view/login/login'));

const CapableTable = lazy(() => import('../view/tables/CapableTable'));

const Error404 = lazy(() => import('../view/error/404'));
const Error500 = lazy(() => import('../view/error/500'));
const Error403 = lazy(() => import('../view/error/403'));

const Language = lazy(() => import('../view/basic/Language'));
const DevicesInfo = lazy(() => import('../view/basic/DevicesInfo'));
const PreviewOverlay = lazy(() => import('../view/basic/PreviewOverlay'));
const SoundPreview = lazy(() => import('../view/basic/SoundPreview'));

// 错误处理
const ErrorView: RouterFace[] = [
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
const multistageView: RouterFace[] = [
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

// 基本设置
const basicView: RouterFace[] = [
  {
    path: 'basic',
    title: '基本设置',
    exact: true,
    icon: RedditOutlined,
    childern: [{
      path: 'Language',
      title: '语言设置',
      exact: true,
      component: Language,
      icon: RedditOutlined,
    },
    {
      path: 'DevicesInfo',
      title: '车辆信息',
      exact: true,
      component: DevicesInfo,
      icon: RedditOutlined,
    },
    {
      path: 'videoSettings',
      title: '视频输出设置',
      exact: true,
      icon: RedditOutlined,
      childern: [
        {
          path: 'PreviewOverlay',
          title: '预览叠加',
          exact: true,
          component: PreviewOverlay,
          icon: RedditOutlined,
        },
        {
          path: 'SoundPreview',
          title: '声音预览',
          exact: true,
          component: SoundPreview,
          icon: RedditOutlined,
        },
      ]
    },]
  }
];

const tableView: RouterFace[] = [
  {
    path: 'table',
    title: '表格',
    exact: true,
    icon: RedditOutlined,
    childern: [
      {
        path: 'home',
        title: '行内 修改',
        exact: true,
        component: CapableTable,
        icon: RedditOutlined,
      },
    ],
  },
];

const RouterHSAE: RouterFace[] = [
  {
    path: 'home',
    title: '文本下发',
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
  ...basicView,
  ...multistageView,
  ...tableView,
  {
    path: 'login',
    title: '登录',
    exact: true,
    icon: RedditOutlined,
    show: false,
    component: Login,
  },
  ...ErrorView,
  {
    path: 'about',
    title: '关于',
    exact: true,
    icon: RedditOutlined,
    component: About,
  },
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
