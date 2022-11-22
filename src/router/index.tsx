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

// 基本设置
const Language = lazy(() => import('../view/basic/Language'));
const DevicesInfo = lazy(() => import('../view/basic/DevicesInfo'));
const PreviewOverlay = lazy(() => import('../view/basic/PreviewOverlay'));
const SoundPreview = lazy(() => import('../view/basic/SoundPreview'));
const Transparency = lazy(() => import('../view/basic/Transparency'));
const VideoOutput = lazy(() => import('../view/basic/VideoOutput'));
const SystemTime = lazy(() => import('../view/basic/SystemTime'));
const Power = lazy(() => import('../view/basic/Power'));
const Maintain = lazy(() => import('../view/basic/Maintain'));
const ShuTdcwn = lazy(() => import('../view/basic/ShuTdcwn'));
const GpsUpdate = lazy(() => import('../view/basic/GpsUpdate'));
const MileSet = lazy(() => import('../view/basic/MileSet'));
const SpeedSource = lazy(() => import('../view/basic/SpeedSource'));
const ShortMessage = lazy(() => import('../view/basic/ShortMessage'));

// 网络设置
const DiAL = lazy(() => import('../view/newWork/DiAL'));
const Lan = lazy(() => import('../view/newWork/Lan'));

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

// 网络设置
const newWorkView: RouterFace[] = [
  {
    path: 'newWork',
    title: '网络设置',
    exact: true,
    icon: RedditOutlined,
    childern: [
      {
        path: '3G4G',
        title: '3G/4G 拨号设置',
        exact: true,
        icon: RedditOutlined,
        childern: [
          {
            path: 'ShortMessage',
            title: '拨号',
            exact: true,
            icon: RedditOutlined,
            component: DiAL,
          }
        ]
      },
      {
        path: 'wiredNewWork',
        title: '有线网络设置',
        exact: true,
        icon: RedditOutlined,
        childern: [
          {
            path: 'Lan',
            title: '拨号',
            exact: true,
            icon: RedditOutlined,
            component: Lan,
          }
        ]
      },
    ]
  }
]

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
        {
          path: 'Transparency',
          title: '菜单透明度',
          exact: true,
          component: Transparency,
          icon: RedditOutlined,
        },
        {
          path: 'VideoOutput',
          title: '视频输出',
          exact: true,
          component: VideoOutput,
          icon: RedditOutlined,
        },
      ]
    }
      , {
      path: 'timeSettings',
      title: '时间设置',
      exact: true,
      icon: RedditOutlined,
      childern: [
        {
          path: 'SystemTime',
          title: '系统时间设置',
          exact: true,
          component: SystemTime,
          icon: RedditOutlined,
        },
        {
          path: 'Power',
          title: '电源设置',
          exact: true,
          component: Power,
          icon: RedditOutlined,
        },
        {
          path: 'Maintain',
          title: '定时重启',
          exact: true,
          component: Maintain,
          icon: RedditOutlined,
        },
        {
          path: 'ShuTdcwn',
          title: '关机延时设置',
          exact: true,
          component: ShuTdcwn,
          icon: RedditOutlined,
        },
      ]

    },
    {
      path: 'gpsSettings',
      title: 'GPS 设置',
      exact: true,
      icon: RedditOutlined,
      childern: [
        {
          path: 'GpsUpdate',
          title: 'GPS 上报设置',
          exact: true,
          component: GpsUpdate,
          icon: RedditOutlined,
        },
        {
          path: 'MileSet',
          title: '修改里程',
          exact: true,
          component: MileSet,
          icon: RedditOutlined,
        },
        {
          path: 'SpeedSource',
          title: '速度源设置',
          exact: true,
          component: SpeedSource,
          icon: RedditOutlined,
        }
      ]
    },
    {
      path: 'other',
      title: '其它设置',
      exact: true,
      icon: RedditOutlined,
      childern: [
        {
          path: 'ShortMessage',
          title: '短信设置',
          exact: true,
          component: ShortMessage,
          icon: RedditOutlined,
        }
      ]
    }
    ]
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
  ...newWorkView,
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
