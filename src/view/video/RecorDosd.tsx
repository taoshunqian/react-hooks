import React, { useContext, useState } from 'react';
import { Col, Form, Checkbox, Input, Table, Row, Card } from 'antd';
import type { FormInstance } from 'antd/es/form';


const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
    key: React.Key;
    channel: string;
    channelName: string;
    superposition: string;
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
            dataIndex !== "superposition" ?
                <Form.Item
                    style={{ margin: 0 }}
                    name={dataIndex}
                    initialValue = {"AV"}
                >
                    <Input onPressEnter={save} onBlur={save} />
                </Form.Item> :
                <Form.Item
                    style={{ margin: 0 }}
                    name={dataIndex}
                    valuePropName="checked"
                >
                    <Checkbox.Group>
                        <Row>
                            <Col span={8}><Checkbox checked={true} >车牌号码</Checkbox></Col>
                            <Col span={8}><Checkbox checked={true} >通道名</Checkbox></Col>
                            <Col span={8}><Checkbox checked={true} >GPS速度</Checkbox></Col>
                            <Col span={8}><Checkbox checked={true} >经纬度</Checkbox></Col>
                            <Col span={8}><Checkbox checked={true} >时间</Checkbox></Col>
                            <Col span={8}><Checkbox checked={true} >驾驶习惯</Checkbox></Col>
                            <Col span={8}><Checkbox checked={true} >连续驾驶时间</Checkbox></Col>
                            <Col span={8}><Checkbox checked={true} >行驶记录速度</Checkbox></Col>
                        </Row>
                    </Checkbox.Group>

                </Form.Item>
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

const RecorDosdView: React.FC = () => {
    const [dataSource, setDataSource] = useState<Item[]>([
        {
            key: '0',
            channel: "AV 1",
            channelName: "1",
            superposition: "1",
        },
        {
            key: '1',
            channel: "AV 1",
            channelName: "1",
            superposition: "1",
        },
    ]);

    const defaultColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
        {
            title: '通道',
            dataIndex: 'channel',
            width: '15%',

        },
        {
            title: '通道名称',
            dataIndex: 'channelName',
            editable: true,
        },
        {
            title: '叠加',
            dataIndex: 'superposition',
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
            <Card title="录像叠加">
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

export default RecorDosdView;