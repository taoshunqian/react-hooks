import React, { useContext, useState } from 'react';
import { Radio, Form, Input, Card, Table, Select } from 'antd';
import type { FormInstance } from 'antd/es/form';
import type { SelectOption } from '../../config/tsConfig';
import { OptionFn } from '../../config/operationFn';
import type { CheckboxOptionType } from 'antd';


const options2: SelectOption[] = OptionFn(["未检测到IPC@0", "禁用@1", "未连接@2", "已连接@3", "Nothing@4"]);
const options6: CheckboxOptionType[] = [
    { label: '启用', value: '1' },
    { label: '关闭', value: '0' },
];

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
    key: React.Key;
    channel: string;
    audio: string;
    resolvingPower: string;
    FrameRate: string;
    BitRateType: string;
    BitRate: string;
    PictureQuality: string;
    codeType: string;
}

interface EditableRowProps {
    index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

interface EditableCellProps {
    title: React.ReactNode;
    editable: boolean;
    children: React.ReactNode;
    dataIndex: keyof Item;
    record: Item;
    handleSave: (record: Item) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(true);
    const form = useContext(EditableContext)!;

    const toggleEdit = () => {
        setEditing(!editing);

        form.setFieldsValue({ [dataIndex]: record[dataIndex] });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    const renderFn = () => {
        if (dataIndex === "audio") {
            return (<Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                // valuePropName="checked"
                initialValue="1"
            >
                <Radio.Group
                    options={options6}
                    buttonStyle="solid"
                />
            </Form.Item>);
        } else if (dataIndex === "resolvingPower") {
            return (<Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                initialValue="1"
            >
                <Select options={options2} onChange={save} ></Select>
            </Form.Item>);
        }
        else {
            return (<Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                initialValue=""
            >
                <Input onPressEnter={save} onBlur={save} />
            </Form.Item>);
        }

    }

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            renderFn()
        ) : (
            <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
                {childNode}
            </div>
        );
    }

    return <td {...restProps}>
        {childNode}
    </td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

const IPCView: React.FC = () => {
    const [dataSource, setDataSource] = useState<Item[]>([
        {
            key: '0',
            channel: "AV 1",
            audio: "1",
            resolvingPower: "1",
            FrameRate: "1",
            BitRateType: "1",
            BitRate: "1",
            PictureQuality: "1",
            codeType: "1"
        },
        {
            key: '1',
            channel: "AV 1",
            audio: "1",
            resolvingPower: "1",
            FrameRate: "1",
            BitRateType: "1",
            BitRate: "1",
            PictureQuality: "1",
            codeType: "1"
        },
    ]);

    const defaultColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
        {
            title: 'IPC序号',
            dataIndex: 'channel',
        },
        {
            title: '是否启用',
            dataIndex: 'audio',
            width: '15%',
            editable: true,
        },
        {
            title: '连接状态',
            dataIndex: 'resolvingPower',
            editable: true,
        },
        {
            title: 'IP地址',
            dataIndex: 'FrameRate',
            editable: true,
        },
        {
            title: '用户名',
            dataIndex: 'BitRateType',
            editable: true,
        },
        {
            title: '密码',
            dataIndex: 'BitRate',
            editable: true,
        },
    ];

    const handleSave = (row: Item) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        setDataSource(newData);
    };

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };

    const columns = defaultColumns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: Item) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave,
            }),
        };
    });

    return (
        <div>
            <Card title="IPC">
                <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns as ColumnTypes}
                />
            </Card>
        </div>
    );
};

export default IPCView;