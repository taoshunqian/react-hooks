import React from "react";
import {
    Form, Card, Input
} from 'antd';



const Wan: React.FC = () => {
    return (<div>
        <Card title="WAN">
            <Form
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 10 }}
                layout="horizontal"
            >
                <Form.Item label="IP 地址" name="value1" initialValue={"155512555"}>
                    <Input ></Input>
                </Form.Item>
                <Form.Item label="默认网关" name="value2">
                    <Input ></Input>
                </Form.Item>
                <Form.Item label="DNS地址" name="value3">
                    <Input ></Input>
                </Form.Item>
            </Form>
        </Card>
    </div>);
}

export default Wan;