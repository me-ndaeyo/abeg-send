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
  const [data, setData] = useState("");
  const [errMessage, setErrMessage] = useState('');

  const initLink = async () => {
    if (inputValue) {
      console.log("... init link");
      setLoading(true);
      try {
        await axios
          .get(`http://localhost:4000/?url=${inputValue}`)
          .then((res) => {
            console.log(res);
            setData(res);
            setInputValue("");
          })
          .catch((err) => {
            console.log(err)
            setErrMessage(err.response.data.errorText)
          });
          setLoading(false);
          
      } catch (err) {
        setLoading(false);
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
        } else if (err.request) {
          console.log("request error", err.request);
        } else {
          console.log("other error", err);
        }
      }
    } else {
      setErrMessage("Input field cannot stay empty")
    }
  };

  return (
    <div className="download">
      <div className="download-form">
        <div className="download-form--input">
          <Input
            className="input"
            placeholder="Paste video url here"
            name="url"
            size="large"
            icon={<DownloadOutlined />}
            onChange={(e) => {
              setInputValue(e.target.value)
              setErrMessage("");
            }}
            value={inputValue}
            allowClear
          />
          <small className="input-message">{errMessage}</small>
        </div>
        <Button
          className="download-form--button"
          type="primary"
          icon={<DownloadOutlined />}
          loading={loading}
          onClick={initLink}
        >
          {`Initializ${loading ? "ing" : "e"} link`}
        </Button>
      </div>
      {data ? (
        <div className="download-video">
          <iframe
            width="360"
            height="240"
            id="video"
            src={data.data.url}
          ></iframe>
          <div className="download-video--formats">
            <h3>Available formats for download:</h3>
            {data.data?.info
              ?.filter((info) => info.hasAudio)
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
