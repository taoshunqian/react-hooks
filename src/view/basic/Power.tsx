import React , { useState } from "react";
import {
    Form, Card, Select, Input
} from 'antd';

interface OptionKey {
    value: String | number,
    label: String
}

const options:OptionKey[] = [{
    value: 'VGA',
    label: 'VGA',
},
{
    value: 'CVBS',
    label: 'CVBS',
}];

const Power: React.FC = () => {
    const [selectVal] = useState("VGA");

    return (<div>
        <Card title="电源设置">
            <Form
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 10 }}
                layout="horizontal"
            >
                <Form.Item label="主显示屏" valuePropName="checked" name="username">
                    <Select  options={options} value={selectVal}></Select>
                </Form.Item>
                <Form.Item label="12V关机电压" name="power" initialValue={"8.5"}>
                    <Input suffix="V" ></Input>
                </Form.Item>
                <Form.Item label="12V开机电压" name="username">
                    <Input suffix="V"></Input>
                </Form.Item>
                <Form.Item label="24V关机电压" name="username">
                    <Input suffix="V"></Input>
                </Form.Item>
                <Form.Item label="24V开机电压" name="username">
                    <Input suffix="V"></Input> 
                </Form.Item>
            </Form>
        </Card>
    </div>);
}

export default Power;