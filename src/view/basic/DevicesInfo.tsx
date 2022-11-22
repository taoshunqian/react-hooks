/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-multi-spaces */
/* eslint-disable import/newline-after-import */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import {
    Form, Card, Select, Input
} from 'antd';
import './css/config.css';

const { Option } = Select;
function DevicesInfo() {
    return (
        <div>
            <Card title="车辆信息">
                <Form
                    labelCol={{ span: 2 }}
                    wrapperCol={{ span: 8 }}
                    layout="horizontal"
                >
                    <Form.Item label="终端ID" valuePropName="checked">
                        <Input className="itemStyle"></Input>
                    </Form.Item>
                    <Form.Item label="手机号码" valuePropName="checked">
                        <Input className="itemStyle"></Input>
                    </Form.Item>
                    <Form.Item label="车牌号" valuePropName="checked">
                        <Input className="itemStyle"></Input>
                    </Form.Item>
                    <Form.Item label="车牌颜色" valuePropName="checked">
                        <Select
                            placeholder="Select a option and change input text above"
                            allowClear
                            className="itemStyle"
                        >
                            <Option value="male">蓝色</Option>
                            <Option value="female">绿色</Option>
                            <Option value="other">其它</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="区域代码" valuePropName="checked">
                        <Input className="itemStyle"></Input>
                    </Form.Item>
                    <Form.Item label="制造商编号 " valuePropName="checked">
                        <Input className="itemStyle"></Input>
                    </Form.Item>
                    <Form.Item label="VIN车架号 " valuePropName="checked">
                        <Input className="itemStyle"></Input>
                    </Form.Item>
                    <Form.Item label="车牌分类 " valuePropName="checked">
                        <Input className="itemStyle"></Input>
                    </Form.Item>
                    <Form.Item label="发动机号 " valuePropName="checked">
                        <Input className="itemStyle"></Input>
                    </Form.Item>
                </Form>
            </Card>
        </div>

    );
}
export default DevicesInfo;
