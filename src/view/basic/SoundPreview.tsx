/* eslint-disable max-len */
/* eslint-disable no-multi-spaces */
/* eslint-disable import/newline-after-import */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import {
    Form, Card, Radio, RadioChangeEvent,
} from 'antd';
import { useState } from 'react';
import './css/config.css';
const options = [
    { label: '启动', value: '1' },
    { label: '关闭', value: '0' },
];
function SoundPreview() {
    const [value4, setValue4] = useState('1');
    const onChange4 = ({ target: { value } }: RadioChangeEvent) => {
        console.log('radio4 checked', value);
        setValue4(value);
    };
    return (
        <div>
            <Card title="声音预览">
                <Form
                    labelCol={{ span: 2 }}
                    wrapperCol={{ span: 5 }}
                    layout="horizontal"
                >
                    <Form.Item label="声音预览" valuePropName="checked">
                        <Radio.Group
                            options={options}
                            onChange={onChange4}
                            value={value4}
                            buttonStyle="solid"
                        />
                    </Form.Item>
                </Form>
            </Card>
        </div>

    );
}
export default SoundPreview;
