/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable semi */
/* eslint-disable react/function-component-definition */
import { Button, Tabs } from 'antd';
import React, { useRef, useState } from 'react';

const defaultPanes = new Array(2).fill(null).map((_, index) => {
    const id = String(index + 1);
    return { label: `Tab ${id}`, children: `Content of Tab Pane ${index + 1}`, key: id };
});

// eslint-disable-next-line arrow-body-style
const TabsView: React.FC = () => {
    const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
    const [items, setItems] = useState(defaultPanes);
    const newTabIndex = useRef(0);

    const onChange = (key: string | any) => {
        setActiveKey(key);
    };
    const add = () => {
        const newActiveKey = `newTab${newTabIndex.current++}`;
        setItems([...items, { label: 'New Tab', children: 'New Tab Pane', key: newActiveKey }]);
        setActiveKey(newActiveKey);
    };
    const remove = (targetKey: string) => {
        const targetIndex = items.findIndex((pane: any) => pane.key === targetKey);
        const newPanes = items.filter((pane: any) => pane.key !== targetKey);
        if (newPanes.length && targetKey === activeKey) {
            const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
            setActiveKey(key);
        }
        setItems(newPanes);
    };
    const onEdit = (targetKey: string | any, action: 'add' | 'remove') => {
        if (action === 'add') {
            add();
        } else {
            remove(targetKey);
        }
    };

    return (
        <div>
        </div>
    );
}

export default TabsView;
