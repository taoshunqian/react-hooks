import React from "react";
import {
    Form, Card, Radio, Input, Button
} from 'antd';

import type { CheckboxOptionType } from 'antd';

const options: CheckboxOptionType[] = [
    { label: '启用', value: '1' },
    { label: '关闭', value: '0' },
];

const DiAL: React.FC = () => {
    return (<div>
        <Card title="拨号">
            <Form
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 10 }}
                layout="horizontal"
            >
                <Form.Item label="使能" initialValue={"1"} name="value1" >
                    <Radio.Group
                        options={options}
                        buttonStyle="solid"
                    />
                </Form.Item>
                <Form.Item label="电话号码" name="value2" initialValue={"155512555"}>
                    <Input ></Input>
                </Form.Item>
                <Form.Item label="接入点" name="value3">
                    <Input ></Input>
                </Form.Item>
                <Form.Item label="用户名" name="value4">
                    <Input ></Input>
                </Form.Item>
                <Form.Item label="密码" name="value4">
                    <Input></Input>
                </Form.Item>
                <Form.Item label="MTU值 " name="value5">
                    <Input></Input>
                </Form.Item>
                <Form.Item label="操作">
                    <Button type="primary" style={{marginRight: 10}}>恢复出厂</Button>
                    <Button type="primary">默认设置</Button>
                </Form.Item>
            </Form>
        </Card>
    </div>);
}

export default DiAL;