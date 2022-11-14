/* eslint-disable react/prop-types */
import React, { useReducer, useState, useMemo } from 'react';
import { Button, Card } from 'antd';

const initial = { n: 0 };
interface State {
  num?:Number,
  type?:String
}
const reducer = (state:any, action:State) => {
  if (action.type === 'add') {
    return { n: state.n + action.num };
  }
  throw new Error('unknown type');
};

function Home():any {
  const [state, dispatch] = useReducer(reducer, initial);
  const [m, setM] = useState(0);
  const { n } = state;
  const onClick = () => {
    dispatch({ type: 'add', num: 2 });
    setM(m + 2);
  };
  const onClickChild2 = useMemo(() => () => {
    console.log(m);
  }, [m]);

  return (
    <div>
      <nav>homeC</nav>
      <Button type="primary">{ `n: ${n}`}</Button>
      <Button type="primary" onClick={onClick}>home</Button>
      <Card>
        <Child data={m} onClick={onClickChild2}></Child>
      </Card>
    </div>
  );
}

const Child = React.memo((props:any) => (
  <Card style={{ width: 300 }}>
    <Button type="primary" onClick={props.onClick}>{ props.data }</Button>
  </Card>
));

export default Home;
