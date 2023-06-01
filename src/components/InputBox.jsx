import React from 'react'
import "antd/dist/reset.css";
import {
  DownloadOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";

export default function InputBox({placeholderText, inputValue, setInputValue, errorMessage, setErrorMessage, loading, initializeLink}) {
  return (
    <div className="download-form">
      <div className="download-form--input">
        <Input
          className="input"
          placeholder={`Paste ${placeholderText} video url here`}
          name={placeholderText}
          size="large"
          icon={<DownloadOutlined />}
          onChange={(e) => {
            setInputValue(e.target.value);
            setErrorMessage("");
          }}
          value={inputValue}
          allowClear
        />
        <small className="input-message">{errorMessage}</small>
      </div>
      <Button
        className="download-form--button"
        type="primary"
        icon={<DownloadOutlined />}
        loading={loading}
        onClick={initializeLink}
      >
        {`Initializ${loading ? "ing" : "e"} link`}
      </Button>
    </div>
  );
}
