import { Button, message, Popconfirm } from 'antd';
import React from 'react';
import './index.css'
const text = 'Are you sure to delete this task?';

const confirm = () => {
    message.info('Clicked on Yes.');
};

const App: React.FC = () => (
    <div className="demo">
        <div style={{ whiteSpace: 'nowrap' }}>
            <Popconfirm
                placement="bottomRight"
                title={text}
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
            >

            </Popconfirm>
        </div>
    </div>
);

export default App;