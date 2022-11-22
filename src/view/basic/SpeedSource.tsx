import React from "react";
import {
    Form, Card, Select
} from 'antd';

const option = [
    {
        "value": "1",
        "label": "GPS"
    },
    {
        "value": "2",
        "label": "脉冲"
    }
];

const SpeedSource: React.FC = () => {

    return (<div>
        <Card title="速度源设置">
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 10 }}
                layout="horizontal"
            >
                <Form.Item label="里程数 " name="username" initialValue={"1"}>
                    <Select options={option}></Select>
                </Form.Item>
                
            </Form>
        </Card>
    </div>);
}
export default SpeedSource;