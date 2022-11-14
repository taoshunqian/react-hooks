/* eslint-disable for-direction */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { RouterHSAE } from '../router';

const { SubMenu } = Menu;

const MenuLayer = forwardRef((props: Props | any, ref: React.ForwardedRef<unknown>): JSX.Element => {
  const navigate = useNavigate();
  const [openKey, useOpenKey] = useState(['']);

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
    props.getChildData(herf.substring(1));
    navigate(herf, { replace: true });
    const arrKey = herf.split('/');
    if (arrKey.length > 2) {
      const open: any[] = openKeyFn(herf);
      useOpenKey(open);
    }
  };
  // 设置 展开的 SubMenu 菜单项
  const openKeyFn = (url: String) => {
    const arrKey = url.split('/');
    arrKey.shift();
    const activeKey: String[] = [];
    let index = arrKey.length - 1;
    arrKey.forEach(() => {
      const its = arrKey.slice(0, index).join('/');
      index--;
      activeKey.push(its);
    });
    activeKey.pop();
    return activeKey;
  };
  // 点击获取的菜单项key
  const handleClick = (e: { key: string; }): void => {
    props.getChildData(e.key);
    const rou:String = e.key;
    if (rou.indexOf('login') !== -1) {
      // window.open(`${window.location.origin}/#/${e.key}`, '_self');
      window.location.replace(`${window.location.origin}/#/${e.key}`);
    } else {
      navigate(e.key, { replace: true });
    }
  };

  return (
    <div className={props.mode === 'horizontal' ? '' : 'Menu'}>
      <Menu
        onClick={handleClick}
        mode={props.mode}
        key={Math.random()}
        defaultSelectedKeys={[props.SelectKey]}
        defaultOpenKeys={openKey}
        selectedKeys={[props.SelectKey]}
        subMenuOpenDelay={2000}
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
      // eslint-disable-next-line no-unsafe-optional-chaining, react/jsx-first-prop-new-line, react/jsx-max-props-per-line
      <SubMenu key={router.path} title={router.title} icon={router.icon ? <router.icon></router.icon> : <AppstoreOutlined></AppstoreOutlined>} style={{ display: router?.show === undefined || router?.show === true ? 'black' : 'none' }}>
        {
          router.childern.map((item: any) => {
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
    <Menu.Item key={router.component ? router.path : Math.random()} icon={router.icon ? <router.icon></router.icon> : <AppstoreOutlined></AppstoreOutlined>} style={{ display: router?.show === undefined || router?.show === true ? 'black' : 'none' }}>
      <NavLink to={router.component ? router.path : ''} key={router.component ? router.path : Math.random()}>{router.title}</NavLink>
    </Menu.Item>
  );
}

export default MenuLayer;

interface Props {
  router: any,
  path?: string
}
