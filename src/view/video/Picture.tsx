import React, { useContext, useEffect, useRef, useState } from 'react';
import { Form, Card, Select, Table, InputNumber } from 'antd';
import type { FormInstance } from 'antd/es/form';
import type { SelectOption } from '../../config/tsConfig';
const options:SelectOption[] = [
    {
        label: "自定义",
        value: "0",
    },
    {
        label: "标准",
        value: "1",
    }
];

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
    key: string;
    quality: string;
    Luminance: string;
    contrastRatio: string;
    hue: string;
    saturationLevel: string;
    av: string;
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
    const [editing, setEditing] = useState(false);
    const inputRef = useRef<any>(null);
    const form = useContext(EditableContext)!;

    useEffect(() => {
        if (editing) {
            inputRef.current!.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        console.log(
            dataIndex === "quality"
        )
        form.setFieldsValue({ [dataIndex]: record[dataIndex] });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                {
                dataIndex !== "quality"
                    ?
                    <InputNumber ref={inputRef} onPressEnter={save} onBlur={save} />
                    :
                    <Select  ref={inputRef} options={options} onBlur={save} />
                }

            </Form.Item>
        ) : (
            <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
                { dataIndex !== "quality" ? children : childNode }
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

interface DataType {
    key: React.Key;
    quality: string;
    Luminance: string;
    contrastRatio: string;
    hue: string;
    saturationLevel: string;
    av: string;
}

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

const PictureView: React.FC = () => {
    const [dataSource, setDataSource] = useState<DataType[]>([
        {
            key: '0',
            quality: '1',
            Luminance: '1',
            contrastRatio: '22',
            hue: '32',
            saturationLevel: '22',
            av: "AV 1",
        },
        {
            key: '1',
            quality: '2',
            Luminance: '32',
            contrastRatio: '22',
            hue: '32',
            saturationLevel: '22',
            av: "AV 2",
        },
    ]);

    const defaultColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
        {
            title: 'AV',
            dataIndex: 'av',
            width: '15%',

        },
        {
            title: '画质',
            dataIndex: 'quality',
            editable: true,
        },
        {
            title: '亮度',
            dataIndex: 'Luminance',
            editable: true,
        },
        {
            title: '对比度',
            dataIndex: 'contrastRatio',
            editable: true,
        },
        {
            title: '色调',
            dataIndex: 'hue',
            editable: true,
        },
        {
            title: '饱和度',
            dataIndex: 'saturationLevel',
            editable: true,
        },
    ];

    const handleSave = (row: DataType) => {
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
            onCell: (record: DataType) => ({
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
            <Card title="图像设置">
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

export default PictureView;