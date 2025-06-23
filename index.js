import React from 'react';
import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'; // 引入 Ant Design 样式
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
      <h1>Electron SVG Icon Demo</h1>
      <DownOutlined style={{ fontSize: 24 }} />
      <PlusOutlined style={{ fontSize: 24 }} />
    </div>
  );
}

// 挂载 React 应用
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);