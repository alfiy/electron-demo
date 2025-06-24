import React from 'react';
import { createRoot } from 'react-dom/client';
import { DownOutlined, PlusOutlined } from '@ant-design/icons';

function App() {
  return (
    <div>
      <h2>Ant Design Icons 示例</h2>
      <DownOutlined style={{ fontSize: 32, color: '#1677ff', marginRight: 16 }} />
      <PlusOutlined style={{ fontSize: 32, color: '#1677ff' }} />
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);