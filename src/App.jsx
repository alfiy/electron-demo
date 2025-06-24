import React from "react";
import { DownOutlined, PlusOutlined } from "@ant-design/icons";

export default function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Ant Design Icons 示例</h2>
      <div style={{ fontSize: 40, color: "#1677ff", display: "flex", justifyContent: "center", gap: 24 }}>
        <DownOutlined />
        <PlusOutlined />
      </div>
      <div style={{ marginTop: 20, color: "#666" }}>
        上面显示了 DownOutlined 和 PlusOutlined 图标
      </div>
    </div>
  );
}