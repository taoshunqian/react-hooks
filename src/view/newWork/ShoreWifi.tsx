import React from "react";
import {
    Form, Card, Radio, Input
} from 'antd';

import type { CheckboxOptionType } from 'antd';

const options: CheckboxOptionType[] = [
    { label: '启用', value: '1' },
    { label: '关闭', value: '0' },
];

const ShoreWifi: React.FC = () => {
    return (<div>
        <Card title="WIFI 共享">
            <Form
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 10 }}
                layout="horizontal"
            >
                <Form.Item label="是否开启" initialValue={"1"} name="value1" >
                    <Radio.Group
                        options={options}
                        buttonStyle="solid"
                    />
                </Form.Item>
                <Form.Item label="ESSID" name="value2" initialValue={"155512555"}>
                    <Input ></Input>
                </Form.Item>
                <Form.Item label="密码" name="value3">
                    <Input ></Input>
                </Form.Item>
                <Form.Item label="默认网关" name="value4">
                    <Input ></Input>
                </Form.Item>
                <Form.Item label="子网掩码" name="value5">
                    <Input ></Input>
                </Form.Item>
                <Form.Item label="DNS服务器地址" name="value6">
                    <Input ></Input>
                </Form.Item>
            </Form>
        </Card>
    </div>);
}

export default ShoreWifi;