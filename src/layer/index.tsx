/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
import React, { forwardRef, useImperativeHandle } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { RouterHSAE } from '../router';

const { SubMenu } = Menu;

const MenuLayer = forwardRef((props: Props | any, ref: React.ForwardedRef<unknown>): JSX.Element => {
  const navigate = useNavigate();

  useImperativeHandle(ref, () => ({
    refresFunc,
  }));

  //  开放给父组件使用此函数
  const refresFunc = () => {
    const herf = window.location.hash.split('#')[1];
    if (herf === '/' || herf === undefined) {
      props.getChildData('home');
      navigate('/home', { replace: true });
      return false;
    }
    props.getChildData(herf.split('/')[1]);
    navigate(herf, { replace: true });
  };

  const handleClick = (e: { key: string; }): void => {
    props.getChildData(e.key);
    navigate(e.key, { replace: true });
  };

  return (
    <div className={props.mode === 'horizontal' ? '' : 'Menu'}>
      <Menu
        onClick={handleClick}
        mode={props.mode}
        defaultSelectedKeys={[props.SelectedKey]}
        selectedKeys={[props.SelectKey]}
      >
        {
          RouterHSAE.map((router) => (
            router?.childern
              ? MenuLayChild({ router })
              : MenuLayerChild({ router })
          ))
        }
      </Menu>
    </div>
  );
});

function MenuLayChild(props: Props | any): any {
  const { router } = props;
  return (
    router?.childern ? (
      <SubMenu key={router.path} title={router.title} icon={router.icon ? <router.icon></router.icon> : <AppstoreOutlined></AppstoreOutlined>}>
        {
          router.childern.map((item:any) => {
            const { path } = router;
            if (!item.path.includes('/')) {
              item.path = `${path}/${item.path}`;
            }
            return (
              MenuLayChild({ router: item })
            );
          })
        }
      </SubMenu>
    ) : MenuLayerChild({ router })
  );
}

function MenuLayerChild(props: Props | any) {
  const { router } = props;
  return (
    <Menu.Item key={router.component ? router.path : Math.random()} icon={router.icon ? <router.icon></router.icon> : <AppstoreOutlined></AppstoreOutlined>}>
      <NavLink to={router.component ? router.path : ''} key={router.component ? router.path : Math.random()}>{router.title}</NavLink>
    </Menu.Item>
  );
}

export default MenuLayer;

interface Props {
  router: any,
  path?: string
}
