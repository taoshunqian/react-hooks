import React , { useState } from "react";
import {
    Form, Card, Select
} from 'antd';

const options = [{
    value: '低',
    label: '低',
},
{
    value: '中',
    label: '中',
},
{
    value: '高',
    label: '高',
},];

const Transparency: React.FC = () => {
    const [selectVal] = useState("高");

    return (<div>
        <Card title="菜单透明度">
            <Form
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 5 }}
                layout="horizontal"
            >
                <Form.Item label="菜单透明度" valuePropName="checked">
                    <Select  options={options} defaultValue={selectVal}></Select>
                </Form.Item>
            </Form>
        </Card>
    </div>);
}

export default Transparency;