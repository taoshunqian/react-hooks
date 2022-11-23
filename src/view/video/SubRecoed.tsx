import React, { useContext,  useState } from 'react';
import { Form, Checkbox, Card, Table, Select } from 'antd';
import type { FormInstance } from 'antd/es/form';
import type { SelectOption } from '../../config/tsConfig';
import { OptionFn } from '../../config/operationFn';


const options: SelectOption[] = OptionFn(["960H@1", "720P@2",
    "1080P@3", "TVI 720@4", "TVI 1080P@5",
    "CVI 720P@6", "CVI 1080P@7", "960P@8"]);
const options2: SelectOption[] = OptionFn(["1@1", "2@2",
    "3@3", "4@4", "5@5",
    "6@6", "7@7", "8@8"]);
const options3: SelectOption[] = OptionFn(["定码率@0", "变码率@1"]);
const options4: SelectOption[] = OptionFn(["很差@0", "较差@1", "一般@2", "好@3", "很好@4", "最好@5"]);
const options5: SelectOption[] = OptionFn(["264@0", "264+@1", "265@2", "265+@3"]);

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
                valuePropName="checked"
                initialValue="1"
            >
                <Checkbox checked={true} value="1" ></Checkbox>
            </Form.Item>);
        } else if (dataIndex === "resolvingPower") {
            return (<Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                initialValue="1"
            >
                <Select options={options} onChange={save} ></Select>
            </Form.Item>);
        } else if (dataIndex === "FrameRate") {
            return (<Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                initialValue="1"
            >
                <Select options={options2} onChange={save} ></Select>
            </Form.Item>);
        } else if (dataIndex === "BitRateType") {
            return (<Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                initialValue="1"
            >
                <Select options={options3} onChange={save} ></Select>
            </Form.Item>);
        } else if (dataIndex === "BitRate") {
            return (<Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                initialValue="1"
            >
                <Select options={options2} onChange={save} ></Select>
            </Form.Item>);
        } else if (dataIndex === "PictureQuality") {
            return (<Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                initialValue="1"
            >
                <Select options={options4} onChange={save} ></Select>
            </Form.Item>);
        }
        else {
            return (<Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                initialValue="1"
            >
                <Select options={options5} onChange={save} ></Select>
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

const SubRecoedView: React.FC = () => {
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
            title: '通道',
            dataIndex: 'channel',
            width: '15%',

        },
        {
            title: '音频叠加',
            dataIndex: 'audio',
            editable: true,
        },
        {
            title: '分辨率',
            dataIndex: 'resolvingPower',
            editable: true,
        },
        {
            title: '帧率',
            dataIndex: 'FrameRate',
            editable: true,
        },
        {
            title: '位率类型',
            dataIndex: 'BitRateType',
            editable: true,
        },
        {
            title: '位率',
            dataIndex: 'BitRate',
            editable: true,
        },
        {
            title: '画质',
            dataIndex: 'PictureQuality',
            editable: true,
        },
        {
            title: '编码标准',
            dataIndex: 'codeType',
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
            <Card title="子码流设置">
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

export default SubRecoedView;