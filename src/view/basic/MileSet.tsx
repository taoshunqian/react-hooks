import React from "react";
import {
    Form, Card, Input
} from 'antd';


const MileSet: React.FC = () => {

    return (<div>
        <Card title="修改里程">
            <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 10 }}
                layout="horizontal"
            >
                <Form.Item label="里程数 " name="username" initialValue={"1"}>
                    <Input ></Input>
                </Form.Item>
                
            </Form>
        </Card>
    </div>);
}
export default MileSet;