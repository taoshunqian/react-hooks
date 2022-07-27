import {
  RedditOutlined,
} from '@ant-design/icons';
import Home from '../view/Home';
import About from '../view/About';

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
    component: About,
    icon: RedditOutlined,
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
