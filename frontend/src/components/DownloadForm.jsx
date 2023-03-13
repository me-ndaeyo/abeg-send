import React, { useState } from "react";
import "antd/dist/reset.css";
import {
  DownloadOutlined,
  AudioOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import "../styles/DownloadForm.scss";
import axios from "axios";

function DownloadForm() {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const initLink = async () => {
    console.log("... init link");
    setLoading(true);
    const apiData = await axios.get(`http://localhost:4000/?url=${inputValue}`);

    setData(apiData);
    setInputValue("");
    setLoading(false);
    console.log(data);

    // setTimeout(()=>{
    //   setLoading(false)
    // }, 2000)
  };

  return (
    <div className="download">
      <div className="download-form">
        <Input
          className="download-form--input"
          placeholder="Paste video url here"
          name="url"
          size="large"
          icon={<DownloadOutlined />}
          onChange={(e) => setInputValue(e.target.value)}
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
      {data ? (
        <div className="download-video">
          <iframe
            width="384"
            height="240"
            id="video"
            src={data.data.url}
          ></iframe>
          <div className="download-video--formats">
            {data.data.info
              .filter((info) => info.hasAudio)
              .map((info, index) => (
                <a
                  key={index}
                  className="video-format--btn"
                  href={info.url}
                  target="_blank"
                  download
                >
                  {info.mimeType.includes("video") ? (
                    <VideoCameraOutlined />
                  ) : (
                    <AudioOutlined />
                  )}
                  {info.hasAudio
                    ? ` ${info.mimeType.split(";").splice(0, 1)} ${
                        info.mimeType.includes("video")
                          ? `(${info.qualityLabel})`
                          : ""
                      }`
                    : null}
                </a>
              ))}
          </div>
        </div>
      ) : (
        <div className="download-video">
          <p>No downloads yet...</p>
        </div>
      )}
    </div>
  );
}

export default DownloadForm;
