import React, { useContext,  useState } from 'react';
import { Form, Checkbox, Card, Table } from 'antd';
import type { FormInstance } from 'antd/es/form';

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
    key: string;
    channel: string;
    data1: string;
    data2: string;
    data3: string;
    data4: string;
    data5: string;
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

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                valuePropName="checked"
            >
                {
                    dataIndex === "channel"
                        ?
                        childNode
                        :
                        <Checkbox onChange={save} checked={true}  ></Checkbox>
                }

            </Form.Item>
        ) : (
            <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
                {dataIndex !== "channel" ? children : childNode}
            </div>
        );
    }

    return <td {...restProps}>
        {childNode}
    </td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

interface DataType {
    key: React.Key;
    channel: string;
    data1: string;
    data2: string;
    data3: string;
    data4: string;
    data5: string;
}

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

const ImageView: React.FC = () => {
    const [dataSource, setDataSource] = useState<DataType[]>([
        {
            key: '0',
            channel: '水平',
            data1: '1',
            data2: '1',
            data3: '1',
            data4: '1',
            data5: "1",
        },
        {
            key: '1',
            channel: '垂直',
            data1: '1',
            data2: '1',
            data3: '1',
            data4: '1',
            data5: "1",
        },
    ]);

    const defaultColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
        {
            title: '通道',
            dataIndex: 'channel',
            width: '15%',

        },
        {
            title: '1',
            dataIndex: 'data1',
            editable: true,
        },
        {
            title: '2',
            dataIndex: 'data2',
            editable: true,
        },
        {
            title: '3',
            dataIndex: 'data3',
            editable: true,
        },
        {
            title: '4',
            dataIndex: 'data4',
            editable: true,
        },
        {
            title: '5',
            dataIndex: 'data5',
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
            <Card title="镜像设置">
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

export default ImageView;