import React, { useRef, useState, useEffect } from 'react';
import { HashRouter as Routers } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import { Col, Layout, Row } from 'antd';
import MenuLayer from './layer/index';
import Router from './layer/router';

const { Content } = Layout;

const themes = {
  MenuLayer: {
    selectKeys: '',
  },
};

//  承接上下文
const ThemeContext = React.createContext(themes.MenuLayer);

function App() {
  const childRef = useRef('App');
  const [SelectedKeys, setSelectedKeys] = useState('home');

  useEffect(() => {
    FooterTest();
  });

  // 开放给子组件使用此函数
  const getChildData = (value: React.SetStateAction<string>): void => {
    setSelectedKeys(value);
  };

  //  点击使用子组件的函数
  const FooterTest = (): void => {
    const ref: any = childRef.current;
    ref.refresFunc();
  };

  return (
    <Layout>
      <div className="App">
        {/* 左侧导航栏 */}
        <Content className="site-layout">
          <Routers>
            {/* 顶部导航栏 */}
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
            <Content className="site-layout">
              <Row>
                <Col xs={0} sm={0} md={7} lg={5} xl={4}>
                  <ThemeContext.Provider value={themes.MenuLayer}>
                    <MenuLayer mode="inline" SelectKey={SelectedKeys} ThemeContext={ThemeContext} getChildData={getChildData} ref={childRef} />
                  </ThemeContext.Provider>
                </Col>
                <Col xs={24} sm={24} md={17} lg={19} xl={20} style={{ marginTop: '2rem' }}>
                  <Router />
                </Col>
              </Row>
            </Content>
          </Routers>
        </Content>

      </div>
    </Layout>
  );
}

export default App;