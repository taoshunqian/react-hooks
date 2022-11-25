import React, {
  useRef, useState, useEffect, useReducer,
} from 'react';
import { HashRouter as Routers, useNavigate } from 'react-router-dom';
import 'antd/dist/reset.css';
import {
  MenuUnfoldOutlined, MenuFoldOutlined
} from '@ant-design/icons';
import { Col, Layout, Row } from 'antd';
import MenuLayer from './layer/index';
import Router from './layer/router';
import { Scrollbars } from 'react-custom-scrollbars';


const { Content, Header } = Layout;

const themes = {
  MenuLayer: {
    selectKeys: '',
  },
};
const store = {
  user: null,
  books: null,
  movies: null,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'setUser':
      return { ...state, user: action.user };
    default:
      throw new Error();
  }
}

//  承接上下文
const ThemeContext = React.createContext(themes.MenuLayer);
const ApiContext = React.createContext({});


function App() {
  const childRef = useRef('App');
  const [SelectedKeys, setSelectedKeys] = useState('home');
  const [isLogin, setLogin] = useState(false);
  const [state, dispatch] = useReducer(reducer, store);
  const [collapsed, setCollapsed] = useState(false);
  // const navigate = useNavigate();
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const api = { state, dispatch };
  // eslint-disable-next-line prefer-destructuring
  const hash = window.location.hash.split("#");
  const pathName: String[] = ['/login', '/error/403', '/error/404', '/error/500'];

  window.addEventListener("popstate", function (e) {
    if (pathName.includes(hash[1])) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, false);

  useEffect(() => {
    if (!isLogin) {
      FooterTest();
    } else {
      // navigate('/login');
    }
    if (pathName.includes(hash[1])) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  });

  // 开放给子组件使用此函数
  const getChildData = (value: React.SetStateAction<string>): void => {
    if (value === 'login') {
      setLogin(true);
    } else {
      setLogin(false);
    }
    setSelectedKeys(value);
  };

  //  点击使用子组件的函数
  const FooterTest = (): void => {
    const ref: any = childRef.current;
    ref.refresFunc();
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  }

  return (
    <Layout>
      <ApiContext.Provider value={api}>
        <div className="App">
          <Scrollbars style={{ height: '100vh', overflow: 'hidden' }}>
            {/* 左侧导航栏 */}
            <Content className="site-layout">
              <Routers>
                {/* <Row>
                  <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                    <Content style={{
                      width: '100%', height: '46px',
                    }}
                    >
                      <ThemeContext.Provider value={themes.MenuLayer}>
                        <MenuLayer mode="horizontal" SelectKey={SelectedKeys} collapsed={collapsed} ThemeContext={ThemeContext} getChildData={getChildData} ref={childRef} />
                      </ThemeContext.Provider>
                    </Content>
                  </Col>
                </Row> */}

                {/* 顶部导航栏 */}
                {
                  isLogin ?
                    <article>
                      <Router />
                    </article>
                    : <article>
                      <Content>
                        <Row>
                          <Col xs={0} sm={0} md={7} lg={5} xl={4}>
                            <ThemeContext.Provider value={themes.MenuLayer}>
                              <MenuLayer mode="inline" SelectKey={SelectedKeys} collapsed={collapsed} ThemeContext={ThemeContext} getChildData={getChildData} ref={childRef} />
                            </ThemeContext.Provider>
                          </Col>
                          <Col xs={24} sm={24} md={17} lg={19} xl={20} style={{ marginTop: '0rem' }}>
                            <Scrollbars style={{ height: '100vh', overflow: 'hidden' }}>
                              {/* <Header style={{ background: '#FFFFFF' }}>
                                <div onClick={toggleCollapsed}>
                                  {collapsed ? <MenuUnfoldOutlined style={{ fontSize: 20 }} /> : <MenuFoldOutlined style={{ fontSize: 20 }} />}
                                </div>
                              </Header> */}
                              <Router />
                            </Scrollbars>
                          </Col>
                        </Row>
                      </Content>
                    </article>
                }
              </Routers>
            </Content>
          </Scrollbars>
        </div>
      </ApiContext.Provider>
    </Layout>
  );
}

export default App;
