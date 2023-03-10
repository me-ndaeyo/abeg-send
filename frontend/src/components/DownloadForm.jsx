import React, { useState } from "react";
import "antd/dist/reset.css";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import '../styles/DownloadForm.scss';

function DownloadForm() {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>{
    setInputValue(e.target.value)
  }

  return (
    <div className="Download-form">
      <Input
        placeholder="Paste video url here"
        size="large"
        icon={<DownloadOutlined />}
        onChange={handleChange}
        value={inputValue}
      />
      <Button type="primary" icon={<DownloadOutlined />} loading={loading}>
        Download
      </Button>
    </div>
  );
}

export default DownloadForm;
