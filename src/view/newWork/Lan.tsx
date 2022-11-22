import React from "react";
import {
    Form, Card, Radio, Input, Button
} from 'antd';

import type { CheckboxOptionType } from 'antd';

const options: CheckboxOptionType[] = [
    { label: '动态IP', value: '1' },
    { label: '静态IP', value: '0' },
];
const options2: CheckboxOptionType[] = [
    { label: '动态DNS', value: '1' },
    { label: '静态DNS', value: '0' },
];

const Lan: React.FC = () => {
    return (<div>
        <Card title="LAN">
            <Form
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 10 }}
                layout="horizontal"
            >
                <Form.Item label="IP类型" initialValue={"1"} name="value1" >
                    <Radio.Group
                        options={options}
                        buttonStyle="solid"
                    />
                </Form.Item>
                <Form.Item label="IP 地址" name="value2" initialValue={"155512555"}>
                    <Input ></Input>
                </Form.Item>
                <Form.Item label="子网掩码" name="value3">
                    <Input ></Input>
                </Form.Item>
                <Form.Item label="默认网关" name="value4">
                    <Input ></Input>
                </Form.Item>
                <Form.Item label="DNS 类型" name="value4" initialValue={"1"}>
                    <Radio.Group
                        options={options2}
                        buttonStyle="solid"
                    />
                </Form.Item>
                <Form.Item label="DNS 地址" name="value5">
                    <Input></Input>
                </Form.Item>
            </Form>
        </Card>
    </div>);
}

export default Lan;