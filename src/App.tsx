import React, {
  useRef, useState, useEffect, useReducer,
} from 'react';
import { HashRouter as Routers } from 'react-router-dom';
import 'antd/dist/reset.css';
// import './assets/scss/varable.scss';
import { Col, Layout, Row } from 'antd';
import MenuLayer from './layer/index';
import Router from './layer/router';

const { Content } = Layout;

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
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const api = { state, dispatch };
  // eslint-disable-next-line prefer-destructuring
  const hash = window.location.hash;

  useEffect(() => {
    FooterTest();
    if (hash.indexOf('login') !== -1) {
      setLogin(true);
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

  return (
    <Layout>
      <ApiContext.Provider value={api}>
        <div className="App">
          {/* 左侧导航栏 */}
          <Content className="site-layout">
            <Routers>
              {/* 顶部导航栏 */}
              {
                !isLogin ? (
                  <Row>
                    <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                      <Content style={{
                        width: '100%', height: '1rem',
                      }}
                      >
                        <ThemeContext.Provider value={themes.MenuLayer}>
                          <MenuLayer mode="horizontal" SelectKey={SelectedKeys} ThemeContext={ThemeContext} getChildData={getChildData} ref={childRef} />
                        </ThemeContext.Provider>
                      </Content>
                    </Col>
                  </Row>
                ) : <div></div>
              }
              <Content>
                <Row>
                  <Col xs={0} sm={0} md={7} lg={5} xl={4}>
                    <ThemeContext.Provider value={themes.MenuLayer}>
                      <MenuLayer mode="inline" SelectKey={SelectedKeys} ThemeContext={ThemeContext} getChildData={getChildData} ref={childRef} />
                    </ThemeContext.Provider>
                  </Col>
                  <Col xs={24} sm={24} md={17} lg={19} xl={20} style={{ marginTop: '0rem' }}>
                    <Router />
                  </Col>
                </Row>
              </Content>
            </Routers>
          </Content>

        </div>
      </ApiContext.Provider>
    </Layout>
  );
}

export default App;
