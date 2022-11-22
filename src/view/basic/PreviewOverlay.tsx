/* eslint-disable max-len */
/* eslint-disable no-multi-spaces */
/* eslint-disable import/newline-after-import */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import {
    Form, Card, Checkbox,
} from 'antd';
import React from 'react';
import { useState } from 'react';
import './css/config.css';
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['车牌号码', '通道名', '日期时间',
    '经纬度', 'GPS速度', '超速报警', 'IO消息', '磁盘状态', '疲劳驾驶'];
function PreviewOverlay() {
    const [checkedList] = useState<any[]>(plainOptions.slice(5));
    const onChange = () => {
    };
    return (
        <div>
            <Card title="预览叠加">
                <Form
                    labelCol={{ span: 2 }}
                    wrapperCol={{ span: 20 }}
                    layout="horizontal"
                >
                    <Form.Item label="项目" valuePropName="checked">
                        <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} style={{ marginBottom: 5 }} />
                    </Form.Item>
                </Form>
            </Card>
        </div>

    );
}
export default PreviewOverlay;
