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
  const [errMessageYt, setErrMessageYt] = useState('');
  const [errMessageFb, setErrMessageFb] = useState('');
  const [errMessageTw, setErrMessageTw] = useState('');
  const [tab, setTab] = useState(1);

  const initYtLink = async () => {
    if (inputValue) {
      console.log("... init link");
      setLoading(true);
      try {
        await axios
          .get(`http://localhost:4000/?yturl=${inputValue}`)
          .then((res) => {
            console.log(res);
            setData(res);
            setInputValue("");
          })
          .catch((err) => {
            console.log('GET error')
            console.log(err)
            setErrMessageYt(err.response.data.errorText)
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
      setErrMessageYt("Input field cannot stay empty")
    }
  };
  const initFbLink = async () => {
    if (inputValue) {
      console.log("... init link");
      // setLoading(true);
      try {
        await axios
          .get(`http://localhost:4000/?fburl=${inputValue}`)
          .then((res) => {
            console.log(res);
            // setData(res);
            setInputValue("");
          })
          .catch((err) => {
            console.log('GET error')
            console.log(err)
            // setErrMessage(err.response.data.errorText)
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
      setErrMessageFb("Input field cannot stay empty")
    }
  };

  const initTwitterLink = async () => {
    if (inputValue) {
      console.log("... init link");
      // setLoading(true);
      try {
        await axios
          .get(`http://localhost:4000/?twurl=${inputValue}`)
          .then((res) => {
            console.log(res);
            // setData(res);
            setInputValue("");
          })
          .catch((err) => {
            console.log('GET error')
            console.log(err)
            setErrMessageTw(err.response.data.errorText)
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
      setErrMessageTw("Input field cannot stay empty")
    }
  };

  return (
    <div className="container">
      <ul className="download-tab--titles">
        <li className={tab === 1 ? "download-tab--title download-tab--title---active" : "download-tab--title"} onClick={() => setTab(1)}>Youtube</li>
        <li className={tab === 2 ? "download-tab--title download-tab--title---active" : "download-tab--title"} onClick={() => setTab(2)}>Reels</li>
        <li className={tab === 3 ? "download-tab--title download-tab--title---active" : "download-tab--title"} onClick={() => setTab(3)}>Twitter</li>
      </ul>

      <div className="download-tabs">
        <div className={tab === 1 ? "download download-active" : "download"}>
          <div className="download-form">
            <div className="download-form--input">
              <Input
                className="input"
                placeholder="Paste youtube video url here"
                name="yturl"
                size="large"
                icon={<DownloadOutlined />}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setErrMessageYt("");
                }}
                value={inputValue}
                allowClear
              />
              <small className="input-message">{errMessageYt}</small>
            </div>
            <Button
              className="download-form--button"
              type="primary"
              icon={<DownloadOutlined />}
              loading={loading}
              onClick={initYtLink}
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
          ) : null}
        </div>
        <div className={tab === 2 ? "download download-active" : "download"}>
          <div className="download-form">
            <div className="download-form--input">
              <Input
                className="input"
                placeholder="Paste facebook video url here"
                name="fburl"
                size="large"
                icon={<DownloadOutlined />}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setErrMessageFb("");
                }}
                value={inputValue}
                allowClear
              />
              <small className="input-message">{errMessageFb}</small>
            </div>
            <Button
              className="download-form--button"
              type="primary"
              icon={<DownloadOutlined />}
              loading={loading}
              onClick={initFbLink}
            >
              {`Initializ${loading ? "ing" : "e"} link`}
            </Button>
          </div>
        </div>
        <div className={tab === 3 ? "download download-active" : "download"}>
          <div className="download-form">
            <div className="download-form--input">
              <Input
                className="input"
                placeholder="Paste twitter video url here"
                name="twurl"
                size="large"
                icon={<DownloadOutlined />}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setErrMessageTw("");
                }}
                value={inputValue}
                allowClear
              />
              <small className="input-message">{errMessageTw}</small>
            </div>
            <Button
              className="download-form--button"
              type="primary"
              icon={<DownloadOutlined />}
              loading={loading}
              onClick={initTwitterLink}
            >
              {`Initializ${loading ? "ing" : "e"} link`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadForm;
