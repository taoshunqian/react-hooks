/* eslint-disable no-multi-spaces */
/* eslint-disable import/newline-after-import */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import {
    Form, Card, Select,
} from 'antd';
import './css/config.css';

const { Option } = Select;
function Language() {
    return (
        <div>
            <Card>
                <Form
                    labelCol={{ span: 2 }}
                    wrapperCol={{ span: 5 }}
                    layout="horizontal"
                >
                    <Form.Item label="语言" valuePropName="checked">
                        <Select
                            placeholder="Select a option and change input text above"
                            allowClear
                            className="itemStyle"
                        >
                            <Option value="male">简体中文</Option>
                            <Option value="female">英文</Option>
                            <Option value="other">繁体中文</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Card>
        </div>

    );
}
export default Language;
