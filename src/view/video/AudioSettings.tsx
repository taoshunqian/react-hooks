import React from "react";
import {
    Form, Card, Select, Input
} from 'antd';
import type { SelectOption } from '../../config/tsConfig';

const audioFormat = ["ADPCM@0", "IMA@1", "DVI4@2", "MG726@3", "G711A@4", "G711U@5", "G726@6"];
const audioBps = ["@0", "16K@1", "24K@2", "32K@3", "40K@4"];
const options:SelectOption[] = [];
const options2:SelectOption[] = [];

function setOptions() {
    let num = 0;
    for (num; num < audioFormat.length; num++) {
        let item = audioFormat[num].split("@");
        options.push({
            value: item[1],
            label: item[0],
        })
    }
    num = 0;
    for (num; num < audioBps.length; num++) {
        let item = audioBps[num].split("@");
        options2.push({
            value: item[1],
            label: item[0],
        })
    }
}
setOptions();


const AudioSettings: React.FC = () => {

    return (<div>
        <Card title="音频设置">
            <Form
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 10 }}
                layout="horizontal"
            >
                <Form.Item label="输入增益" initialValue={"4"} name="value1">
                    <Input />
                </Form.Item>
                <Form.Item label="输出增益" initialValue={"4"} name="value2">
                    <Input />
                </Form.Item>
                <Form.Item label="音频格式" initialValue={"1"} name="value3" >
                    <Select options={options} ></Select>
                </Form.Item>
                <Form.Item label="bps" initialValue={"1"} name="value4" >
                    <Select options={options2} ></Select>
                </Form.Item>
                <Form.Item label="TTS音量值" initialValue={"4"} name="value5">
                    <Input />
                </Form.Item>
                
            </Form>
        </Card>
    </div>);
}
export default AudioSettings;