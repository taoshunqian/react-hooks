import React , { useState } from "react";
import {
    Form, Card, Select, Input
} from 'antd';

interface OptionKey {
    value: String | number,
    label: String
}
const value:String[] = ["720x480@0", "720x576@1", "800x600@2", "1024x768@3", "1280x720@4", "1280x1024@5", "1366x768@6"];
const value2:String[] = ["PAL@0", "NTSC@1"];

const options:OptionKey[] = [{
    value: 'VGA',
    label: 'VGA',
},
{
    value: 'CVBS',
    label: 'CVBS',
}];

const options2:OptionKey[] = [];
const options3:OptionKey[] = [];

function optionFn() {
    let num:number = 0;
    for(num;num < value.length;num++) {
        let item = value[num].split("@");
        options2.push({
            value: item[1],
            label: item[0] 
        });
    }
    num = 0;
    for(num;num < value2.length;num++) {
        let item = value2[num].split("@");
        options3.push({
            value: item[1],
            label: item[0] 
        });
    }
}
optionFn();

const VideoOutput: React.FC = () => {
    const [selectVal] = useState("VGA");
    const [selectVal2] = useState("0");

    return (<div>
        <Card title="视频输出">
            <Form
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 10 }}
                layout="horizontal"
            >
                <Form.Item label="主显示屏" valuePropName="checked" name="username">
                    <Select  options={options} value={selectVal}></Select>
                </Form.Item>
                <Form.Item label="主显示屏" valuePropName="checked" name="username">
                    <Select  options={options2} value={selectVal2} ></Select>
                </Form.Item>
                <Form.Item label="CVBS制式" valuePropName="checked" name="username">
                    <Select  options={options3} value={selectVal2} ></Select>
                </Form.Item>
                <Form.Item label="上边距" name="username">
                    <Input suffix="0-100"></Input>
                </Form.Item>
                <Form.Item label="下边距" name="username">
                    <Input suffix="0-100"></Input>
                </Form.Item>
                <Form.Item label="左边距" name="username">
                    <Input suffix="0-100"></Input>
                </Form.Item>
                <Form.Item label="右边距" name="username">
                    <Input suffix="0-100"></Input>
                </Form.Item>
                <Form.Item label="亮度" name="username">
                    <Input suffix="0-100"></Input>
                </Form.Item>
                <Form.Item label="对比度" name="username">
                    <Input suffix="0-100"></Input>
                </Form.Item>
                <Form.Item label="色调" name="username">
                    <Input suffix="0-100"></Input>
                </Form.Item>
                <Form.Item label="饱和度" name="username">
                    <Input suffix="0-100"></Input>
                </Form.Item>
            </Form>
        </Card>
    </div>);
}

export default VideoOutput;