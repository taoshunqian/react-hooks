import React, {
  useRef, useState, useEffect, useReducer,
} from 'react';
import { HashRouter as Routers } from 'react-router-dom';
import 'antd/dist/reset.css';
// import './assets/scss/varable.scss';
import { Col, Layout, Row } from 'antd';
import MenuLayer from './layer/index';
import Router from './layer/router';
import { registerMicroApps, start } from 'qiankun';

const app = [{
  name: "qkApp",
  entry: "//localhost:8081",
  container: '#vueDom',//微应用挂载的容器节点
  activeRule: '/vue',//微应用的激活规则
  props: { token: 'gaiery-token-xxxx' } //主应用需要传递给微应用的数据
}];
registerMicroApps(app);


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
  useEffect(() => {
    start({
      prefetch: false, //取消预加载
      sandbox: { experimentalStyleIsolation: true }, //沙盒模式
    });
  }, []);

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

              <Row>
                <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                  <Content style={{
                    width: '100%', height: '0rem',
                  }}
                  >
                    <ThemeContext.Provider value={themes.MenuLayer}>
                      <MenuLayer mode="horizontal" SelectKey={SelectedKeys} ThemeContext={ThemeContext} getChildData={getChildData} ref={childRef} />
                    </ThemeContext.Provider>
                  </Content>
                </Col>
              </Row>
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
                            <MenuLayer mode="inline" SelectKey={SelectedKeys} ThemeContext={ThemeContext} getChildData={getChildData} ref={childRef} />
                          </ThemeContext.Provider>
                        </Col>
                        <Col xs={24} sm={24} md={17} lg={19} xl={20} style={{ marginTop: '0rem' }}>
                          <Router />
                        </Col>
                      </Row>
                    </Content>
                  </article>
              }
            </Routers>
          </Content>

        </div>
      </ApiContext.Provider>
    </Layout>
  );
}

export default App;
