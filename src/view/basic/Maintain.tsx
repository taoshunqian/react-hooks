import React, { useState } from "react";
import {
    Form, Card, Select, Radio, TimePicker
} from 'antd';
import type { CheckboxOptionType } from 'antd';

const options:CheckboxOptionType[] = [
    { label: '启动', value: '1' },
    { label: '关闭', value: '0' },
];

const Maintain: React.FC = () => {
    const [selectVal] = useState("VGA");
    const format = 'HH:mm';

    return (<div>
        <Card title="定时重启">
            <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 10 }}
                layout="horizontal"
            >
                <Form.Item label="定重启当天的时间点" name="power" initialValue={"8.5"}>
                    <Radio.Group
                        options={options}
                        buttonStyle="solid"
                    />
                </Form.Item>
                <Form.Item label="定时重启频率 " valuePropName="checked" name="username">
                    <Select options={options} value={selectVal}></Select>
                </Form.Item>
                
                <Form.Item label="定重启当天的时间点 " name="username">
                    <TimePicker format={format}></TimePicker>
                </Form.Item>
            </Form>
        </Card>
    </div>);
}

export default Maintain;