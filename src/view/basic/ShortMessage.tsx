import React from "react";
import {
    Form, Card, Radio, Input
} from 'antd';

import type { CheckboxOptionType } from 'antd';

const options: CheckboxOptionType[] = [
    { label: '启用', value: '1' },
    { label: '关闭', value: '0' },
];

const ShortMessage: React.FC = () => {

    return (<div>
        <Card title="短信设置">
            <Form
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 10 }}
                layout="horizontal"
            >
                <Form.Item label="自动回复" initialValue={"1"} name="value1" >
                    <Radio.Group
                        options={options}
                        buttonStyle="solid"
                    />
                </Form.Item>
                <Form.Item label="白名单" initialValue={"1"} name="value2">
                    <Radio.Group
                        options={options}
                        buttonStyle="solid"
                    />
                </Form.Item>
                <Form.Item label="白名单序号1 号码" initialValue={"1111111111"} name="value3">
                    <Input />
                </Form.Item>
            </Form>
        </Card>
    </div>);
}
export default ShortMessage;