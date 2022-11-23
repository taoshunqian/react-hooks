
1. 支持多级路由
2. 支持点击行内 修改
3. 支持 行内直接通过 输入框, 单选琦，多选器，下拉输入框 修改数据

```
  src:
  ├─assets
  ├─config
  │  ├─operationFn.tsx  // options 公共操作方法
  │  └─tsConfig.tsx // 接口定义
  ├─layer
  │  ├─index.tsx   // 左侧导航栏
  │  └─router.tsx  // 注册路由
  ├─router
  │  └─index.tsx   //  配置路由
  ├─view
  │  └─.......     // 页面
  ├─App.tsx        // 承接上下文，应用于 不同尺寸页面时，切换导航栏

```

```
npx create-react-app my-app --template typescript
```

```
npx eslint --init
```

```
npm install react-app-rewired customize-cra --save-dev
```

```
create config-overrides.js
```

```
npm install node-sass
```

```
npm install sass-resources-loader
```



tsconfig.json

```
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
```

.eslintrc.js

```
    'react/jsx-filename-extension': [
      2,
      { extensions: ['ts', 'tsx'] },
    ],
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'linebreak-style': ['off', 'windows'],
    // 最后一个对象属性要有逗号
    'comma-dangle': 1,

    // 定义但从未使用的变量
    'no-unused-vars': 1,

    // 赋值但从未使用
    'react/jsx-no-bind': 1,

    // 空标签
    'react/self-closing-comp': 0,

    // 具有单击处理程序的可见非交互元素必须至少有一个键盘侦听器
    'jsx-a11y/click-events-have-key-events': 0,

    // 具有“按钮”交互作用的元素必须是可聚焦的
    'jsx-a11y/interactive-supports-focus': 0,

    // 带有事件处理程序的静态HTML元素需要一个角色
    'jsx-a11y/no-static-element-interactions': 0,

    // return ;
    'semi-spacing': 0,

    // <>只包含不能只包含一个标签
    'react/jsx-no-useless-fragment': 0,

    // 值对于布尔属性必须省略
    'react/jsx-boolean-value': 0,

    // 必须默认导出
    'import/prefer-default-export': 0,

    // 默认变量放到最后一个
    'default-param-last': 0,

    // 对参数进行赋值
    'no-param-reassign': 0,

    // 使用未声明的函数
    'no-use-before-define': 0,

    'no-new': 0,

    // 不能使用自增
    'no-plusplus': 0,

    // button必须是静态type
    'react/button-has-type': 0,
```


### useState

```
  const [n, setN] = React.useState(0)
```

  1. 无局部更新能力
  2. 创建一个动态的属性

### setState

  1. 接受函数，用于更新属性

### useReducer

  1. 创建初始值initialState
  2. 创建所有操作reducer(state, action);
  3. 传给userReducer，得到读和写API
  4. 调用写({type: '操作类型'})

  总的来说，useReducer 是 useState 的复杂版

  如何代替 Redux

  1. 将数据集中在一个 store 对象
  2. 将所有操作集中在 reducer
  3. 创建一个 Context
  4. 创建对数据的读取 API
  5. 将第四步的内容放到第三步的 Context
  6. 用 Context.Provider 将 Context 提供给所有组件
  7. 各个组件用 useContext 获取读写API

### useContext

  1. 使用 C = createContext(initial) 创建上下文
  2. 使用 <C.Provider> 圈定作用域
  3. 在作用域内使用 useContext(C)来使用上下文


### useEffect , useLayoutEffect

  1. useEffect 在浏览器渲染完成后执行
  2. useLayoutEffect 在浏览器渲染前执行, 总比 useEffect 先执行

### useMemo

  1. 如果 props 不变，就没有必要再次执行一个函数组件最终代码

### useCallback

  1. useCallback(x => console.log(x), [m]) 等价于 useMemo( () => x => console.log(x), [m])

### forwardRef

  1. 可以用来引用 DOM 对象， 也可以用来引用普通对象
  2. props 无法传递 ref 属性

