import React from "react";
import {
    Form, Card
} from 'antd';

const Mode: React.FC = () => {
    return (<div>
        <Card title="模式设置">
            <Form
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 10 }}
                layout="horizontal"
            >
            </Form>
        </Card>
    </div>);
}

export default Mode;