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
  const initLink = () => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="download-form">
      <Input
        className="download-form--input"
        placeholder="Paste video url here"
        size="large"
        icon={<DownloadOutlined />}
        onChange={handleChange}
        value={inputValue}
        allowClear
      />
      <Button
        className="download-form--button"
        type="primary"
        icon={<DownloadOutlined />}
        loading={loading}
        onClick={initLink}
      >
        Download
      </Button>
    </div>
  );
}

export default DownloadForm;
