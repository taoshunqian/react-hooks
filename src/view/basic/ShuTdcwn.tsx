import React from "react";
import {
    Form, Card, Input, Radio, TimePicker
} from 'antd';
import type { CheckboxOptionType } from 'antd';

const options:CheckboxOptionType[] = [
    { label: '延迟关机', value: '1' },
    { label: '不关机', value: '0' },
];

const ShuTdcwn: React.FC = () => {
    const format = 'HH:mm';

    return (<div>
        <Card title="定时重启">
            <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 10 }}
                layout="horizontal"
            >
                <Form.Item label="延迟关机" name="power" initialValue={"1"}>
                    <Radio.Group
                        options={options}
                        buttonStyle="solid"
                    />
                </Form.Item>
                <Form.Item label="延时时长" name="username">
                    <TimePicker format={format}></TimePicker>
                </Form.Item>
                <Form.Item label="启用休眠" name="power2" initialValue={"1"}>
                    <Radio.Group
                        options={options}
                        buttonStyle="solid"
                    />
                </Form.Item>
                <Form.Item label="位置上报频率" name="username">
                    <Input ></Input>
                </Form.Item>
                
                
            </Form>
        </Card>
    </div>);
}

export default ShuTdcwn;