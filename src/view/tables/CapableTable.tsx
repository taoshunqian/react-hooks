/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
import type { InputRef } from 'antd';
// eslint-disable-next-line object-curly-newline
import { Button, Form, Input, Popconfirm, Table, Divider, Card } from 'antd';
import type { FormInstance } from 'antd/es/form';
// eslint-disable-next-line object-curly-newline
import React, { useContext, useEffect, useRef, useState } from 'react';

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
    key: string;
    name: string;
    age: string;
    address: string;
}

interface EditableRowProps {
    index: number;
}

// eslint-disable-next-line react/function-component-definition
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
    // eslint-disable-next-line no-unused-vars
    handleSave: (record: Item) => void;
}

// eslint-disable-next-line react/function-component-definition
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
    const inputRef = useRef<InputRef>(null);
    const form = useContext(EditableContext)!;

    useEffect(() => {
        if (editing) {
            inputRef.current!.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
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
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

interface DataType {
    key: React.Key;
    name: string;
    age: string;
    address: string;
}

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

// eslint-disable-next-line react/function-component-definition
const CapableTable: React.FC = () => {
    const [dataSource, setDataSource] = useState<DataType[]>([
        {
            key: '0',
            name: 'Edward King 0',
            age: '32',
            address: 'London, Park Lane no. 0',
        },
        {
            key: '1',
            name: 'Edward King 1',
            age: '32',
            address: 'London, Park Lane no. 1',
        },
    ]);

    const [count, setCount] = useState(2);

    const handleDelete = (key: React.Key) => {
        const newData = dataSource.filter((item: any) => item.key !== key);
        setDataSource(newData);
    };

    const defaultColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
        {
            title: 'name',
            dataIndex: 'name',
            width: '30%',
            editable: true,
        },
        {
            title: 'age',
            dataIndex: 'age',
            width: '20%',
            editable: true,
        },
        {
            title: 'address',
            dataIndex: 'address',
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record: any) => (dataSource.length >= 1 ? (
                <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                    <a>Delete</a>
                </Popconfirm>
            ) : null),
        },
    ];

    const handleAdd = () => {
        const newData: DataType = {
            key: count,
            name: `Edward King ${count}`,
            age: '32',
            address: `London, Park Lane no. ${count}`,
        };
        setDataSource([...dataSource, newData]);
        setCount(count + 1);
    };

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
            <Card>
                <div style={{ float: 'left', padding: 15 }}>
                    <Button onClick={handleAdd} type="primary">
                        添加
                    </Button>
                    <Button onClick={handleAdd} type="primary" style={{ marginLeft: 15 }}>
                    </Button>
                </div>
                <Divider />
                <Table
                    components={components}
                    rowClassName={() => '添加'}
                    bordered
                    dataSource={dataSource}
                    columns={columns as ColumnTypes}
                />
            </Card>
        </div>
    );
};

export default CapableTable;