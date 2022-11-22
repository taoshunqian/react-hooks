import React , { useState } from "react";
import {
    Form, Card, DatePicker, TimePicker, Select
} from 'antd';

interface OptionKey {
    value: String | number,
    label: String
}

const options:OptionKey[] = [{
    value: '1',
    label: 'YYYY-MM-DD',
},
{
    value: '2',
    label: 'MM-DD-YYYY',
},
{
    value: '3',
    label: 'DD-MM-YYYY',
}];
const options2:OptionKey[] = [{
    value: '1',
    label: '否',
},
{
    value: '2',
    label: '北斗',
}];
const options3:OptionKey[] = [{
    value: '1',
    label: '东时区',
},
{
    value: '2',
    label: '西时区',
}];

const SystemTime: React.FC = () => {
    const [selectVal] = useState("1");
    const format = 'HH:mm';

    return (<div>
        <Card title="系统时间设置">
            <Form
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 10 }}
                layout="horizontal"
            >
                <Form.Item label="系统日期" valuePropName="checked">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="系统时间" valuePropName="checked">
                    <TimePicker />
                </Form.Item>
                <Form.Item label="日期格式" valuePropName="checked">
                    <Select options={options} value={selectVal} />
                </Form.Item>
                <Form.Item label="时间同步" valuePropName="checked">
                    <Select options={options2} value={selectVal} />
                </Form.Item>
                <Form.Item label="选择时区" valuePropName="checked">
                    <Select options={options3} value={selectVal} />
                </Form.Item>
                <Form.Item label="时:分" valuePropName="checked">
                    <TimePicker format={format} />
                </Form.Item>
            </Form>
        </Card>
    </div>);
}

export default SystemTime;