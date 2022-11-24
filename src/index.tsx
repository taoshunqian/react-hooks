/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let root:any = null;
function render(){
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
  
}
reportWebVitals();

let __webpack_public_path__;

if (window.__POWERED_BY_QIANKUN__) { // 动态添加publicPath
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

if (!window.__POWERED_BY_QIANKUN__) { // 默认独立运行
  render();
}


const storeChange = async (props: any) => {
  props.onGlobalStateChange && (await props.onGlobalStateChange(async (value: any) => {
    render()
  },true))
}

export async function bootstrap(props:any){
  storeChange(props);
}
export async function mount(props:any) {
  storeChange(props);
}
export async function unmount(){
  root.unmount();  // 卸载节点
}
