import {
  RedditOutlined,
} from '@ant-design/icons';
import Home from '../view/Home';
import About from '../view/About';
import HomeC from '../view/HomeC';

const RouterHSAE:RouterFace[] = [
  {
    path: 'home',
    title: 'home',
    exact: true,
    component: Home,
    icon: RedditOutlined,
  },
  {
    path: 'about',
    title: 'about',
    exact: true,
    icon: RedditOutlined,
    childern: [
      {
        path: 'HomeC',
        title: 'HomeC',
        exact: true,
        icon: RedditOutlined,
        childern: [
          {
            path: 'HomeA',
            title: 'HomeA',
            exact: true,
            component: HomeC,
            icon: RedditOutlined,
          },
        ]
      },
    ]
  },
];

interface RouterFace {
    path: string,
    title: string,
    exact: Boolean,
    component?: Object,
    icon: any,
    childern?: RouterFace[]
}

export {
  RouterHSAE,
};
