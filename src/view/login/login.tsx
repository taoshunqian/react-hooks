import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Col, Row, Card } from 'antd';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = useCallback(
    () => {
      navigate('/home');
    },
    [],
  );


  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <article style={{ paddingTop: 200 }}>
        <Row>
          <Col span={8} offset={8}>
            <Card title="Login" bordered={false}>
              <Form
                name="basic"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </article></div>
  );
}

export default Login;
