import React from "react";
import {
    Form, Card, Input
} from 'antd';


const GpsUpdate: React.FC = () => {

    return (<div>
        <Card title="GPS 上报设置">
            <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 10 }}
                layout="horizontal"
            >
                <Form.Item label="正常上传间隔 " name="username" initialValue={"1"}>
                    <Input ></Input>
                </Form.Item>
                <Form.Item label="休眠上传间隔 " name="username">
                    <Input ></Input>
                </Form.Item>
                <Form.Item label="驾驶员未登陆上传间隔 " name="username">
                    <Input ></Input>
                </Form.Item>
                <Form.Item label="紧急报警上传间隔 " name="username">
                    <Input ></Input>
                </Form.Item>
                
            </Form>
        </Card>
    </div>);
}

export default GpsUpdate;