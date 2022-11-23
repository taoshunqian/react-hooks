/* eslint-disable import/newline-after-import */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Form,
  Radio, Card, RadioChangeEvent,
} from 'antd';

const Home:React.FC = () => {
  const optionsWithDisabled = [
    { label: '屏蔽显示', value: '1' },
    { label: '声音播报', value: '2' },
  ];
  const [value4, setValue4] = useState('1');
  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    setValue4(value);
  };

  return (
    <div>
      <Card>
        <Form
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >
          <Form.Item label="类型" valuePropName="checked">
            <Radio.Group
              options={optionsWithDisabled}
              onChange={onChange}
              value={value4}
              buttonStyle="solid"
              style={{ float: 'left', marginLeft: 20 }}
            />
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

// const Child = React.memo((props: any) => (
//   <Card style={{ width: 300 }}>
//     <Button type="primary" onClick={props.onClick}>{props.data}</Button>
//   </Card>
// ));

export default Home;
