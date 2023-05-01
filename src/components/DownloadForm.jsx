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
  const [youtubeInputValue, setYoutubeInputValue] = useState("");
  const [facebookInputValue, setFacebookInputValue] = useState("");
  const [instagramInputValue, setInstagramInputValue] = useState("");
  const [twitterInputValue, setTwitterInputValue] = useState("");

  const [youtubeData, setYoutubeData] = useState("");
  const [facebookData, setFacebookData] = useState("");
  const [instagramData, setInstagramData] = useState("");
  const [twitterData, setTwitterData] = useState("");

  const [errMessageYt, setErrMessageYt] = useState("");
  const [errMessageIg, setErrMessageIg] = useState("");
  const [errMessageTw, setErrMessageTw] = useState("");
  const [errMessageFb, setErrMessageFb] = useState("");

  const [tab, setTab] = useState(1);
  const [loading, setLoading] = useState(false);

  const apiURL =
    "https://aiov-download-youtube-videos.p.rapidapi.com/GetVideoDetails";

  const initYtLink = async () => {
    const options = {
      method: "GET",
      url: apiURL,
      params: {
        URL: youtubeInputValue,
      },
      headers: {
        "X-RapidAPI-Key": "767534382amsh8eac27d49526885p1814d7jsna8cd3b55656a",
        "X-RapidAPI-Host": "aiov-download-youtube-videos.p.rapidapi.com",
      },
    };

    if (youtubeInputValue) {
      console.log("... init yt link");
      setLoading(true);
      await axios
        .request(options)
        .then((response) => {
          setYoutubeData(response.data);
          console.log(response.data);
          setYoutubeInputValue("");
        })
        .catch(function (error) {
          console.error(error);
          if (error.response.status === 500) {
            setErrMessageYt(
              "Internal server error just occured, please try again later."
            );
          } else if (
            error.response.status === 400 ||
            error.response.status === 404
          ) {
            setErrMessageYt(
              // `${error.response.data.error
              //   .split(" or")
              //   .slice(0, 1)}. Paste a valid link.`
              '404 error'
            );
          } else {
            setErrMessageYt(`${error.message} `);
          }
        });
      setLoading(false);
    } else {
      setErrMessageYt("Input field cannot stay empty");
    }
  };

  //   const options = {
  //   method: 'POST',
  //   url: 'https://downtube.p.rapidapi.com/api/Download/getUrlInfo',
  //   headers: {
  //     'content-type': 'application/json',
  //     'X-RapidAPI-Key': '767534382amsh8eac27d49526885p1814d7jsna8cd3b55656a',
  //     'X-RapidAPI-Host': 'downtube.p.rapidapi.com'
  //   },
  //   data: '{"url":"https://youtu.be/HY3lNkHbpS0"}'
  // };

  // axios.request(options).then(function (response) {
  // 	console.log(response.data);
  // }).catch(function (error) {
  // 	console.error(error);
  // });

  const initIgLink = async () => {
    const options = {
      method: "GET",
      url: "https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index",
      params: { url: instagramInputValue },
      headers: {
        "X-RapidAPI-Key": "767534382amsh8eac27d49526885p1814d7jsna8cd3b55656a",
        "X-RapidAPI-Host":
          "instagram-downloader-download-instagram-videos-stories.p.rapidapi.com",
      },
    };

    if (instagramInputValue) {
      console.log("... init ig link");
      setLoading(true);
      await axios
        .request(options)
        .then((response) => {
          setInstagramData(response.data);
          console.log(response.data);
          setInstagramInputValue("");
        })
        .catch(function (error) {
          console.log(error);
          if (error.response.status === 500) {
            setErrMessageIg(
              "Internal server error just occured, please try again later."
            );
          } else if (
            error.response.status === 400 ||
            error.response.status === 404
          ) {
            setErrMessageIg(
              `${error.response.data.error
                .split(" or")
                .slice(0, 1)}. Paste a valid link.`
            );
          } else {
            setErrMessageIg(`${error.message} `);
          }
        });
      setLoading(false);
    } else {
      setErrMessageIg("Input field cannot stay empty");
    }
  };

  const initFbLink = async () => {
    const options = {
      method: "GET",
      url: "https://facebook-reel-and-video-downloader.p.rapidapi.com/app/main.php",
      params: { url: facebookInputValue },
      headers: {
        "X-RapidAPI-Key": "767534382amsh8eac27d49526885p1814d7jsna8cd3b55656a",
        "X-RapidAPI-Host": "facebook-reel-and-video-downloader.p.rapidapi.com",
      },
    };

    if (facebookInputValue) {
      console.log("... init fb link");
      setLoading(true);
      await axios
        .request(options)
        .then((response) => {
          if (response.data === false) {
            setErrMessageFb("Link cannot be accessed");
          } else {
            setFacebookData(response.data);
            Object.entries(response.data.links).map((link) =>
              console.log(link)
            );
          }
          console.log(response.data);
          setFacebookInputValue("");
        })
        .catch(function (error) {
          console.log(error);
          if (error.response?.status === 500) {
            setErrMessageFb(
              "Internal server error just occured, please try again later."
            );
          } else if (
            error.response?.status === 400 ||
            error.response?.status === 404
          ) {
            setErrMessageFb(
              `${error.response?.data.error
                .split(" or")
                .slice(0, 1)}. Paste a valid link.`
            );
          }
        });
      setLoading(false);
    } else {
      setErrMessageFb("Input field cannot stay empty");
    }
  };

  const initTwitterLink = async () => {
    const options = {
      method: "GET",
      url: apiURL,
      params: {
        URL: twitterInputValue,
      },
      headers: {
        "X-RapidAPI-Key": "767534382amsh8eac27d49526885p1814d7jsna8cd3b55656a",
        "X-RapidAPI-Host": "aiov-download-youtube-videos.p.rapidapi.com",
      },
    };

    if (twitterInputValue) {
      console.log("... init tw link");
      setLoading(true);
      await axios
        .request(options)
        .then((response) => {
          setTwitterData(response.data);
          console.log(response.data);
          setTwitterInputValue("");
        })
        .catch(function (error) {
          console.log(error);
          if (error.response.status === 500) {
            setErrMessageTw(
              "Internal server error just occured, please try again later."
            );
          } else if (
            error.response.status === 400 ||
            error.response.status === 404
          ) {
            setErrMessageTw(
              `${error.response.data.error
                .split(" or")
                .slice(0, 1)}. Paste a valid link.`
            );
          }
        });
      setLoading(false);
    } else {
      setErrMessageTw("Input field cannot stay empty");
    }
  };

  return (
    <div className="container">
      <ul className="download-tab--titles">
        <li
          className={
            tab === 1
              ? "download-tab--title download-tab--title---active"
              : "download-tab--title"
          }
          onClick={() => setTab(1)}
        >
          Youtube
        </li>
        <li
          className={
            tab === 2
              ? "download-tab--title download-tab--title---active"
              : "download-tab--title"
          }
          onClick={() => setTab(2)}
        >
          IG/Reels
        </li>
        <li
          className={
            tab === 3
              ? "download-tab--title download-tab--title---active"
              : "download-tab--title"
          }
          onClick={() => setTab(3)}
        >
          Twitter
        </li>
        <li
          className={
            tab === 4
              ? "download-tab--title download-tab--title---active"
              : "download-tab--title"
          }
          onClick={() => setTab(4)}
        >
          Facebook/Reels
        </li>
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
                  setYoutubeInputValue(e.target.value);
                  setErrMessageYt("");
                }}
                value={youtubeInputValue}
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
          {youtubeData ? (
            <div className="download-video">
              {/* <iframe
                width="360"
                height="240"
                id="video"
                src={youtubeData.original_url}
              ></iframe> */}
              <h3>Choose download format:</h3>
              <div className="download-video--formats">
                {youtubeData.formats
                  ?.filter((format) => format.audio_channels)
                  .map((format, index) => (
                    <a
                      key={index}
                      className="video-format--btn"
                      href={format.url}
                      target="_blank"
                      download
                    >
                      {format.video_ext !== "none" ? (
                        <VideoCameraOutlined />
                      ) : (
                        <AudioOutlined />
                      )}
                      {format.video_ext === "none"
                        ? " " + format.audio_ext
                        : " " + format.format_note}
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
                placeholder="Paste instagram video url here"
                name="fburl"
                size="large"
                icon={<DownloadOutlined />}
                onChange={(e) => {
                  setInstagramInputValue(e.target.value);
                  setErrMessageIg("");
                }}
                value={instagramInputValue}
                allowClear
              />
              <small className="input-message">{errMessageIg}</small>
            </div>
            <Button
              className="download-form--button"
              type="primary"
              icon={<DownloadOutlined />}
              loading={loading}
              onClick={initIgLink}
            >
              {`Initializ${loading ? "ing" : "e"} link`}
            </Button>
          </div>
          {instagramData ? (
            <div className="download-video">
              <iframe
                id="video"
                src={instagramData.media}
              ></iframe>
              <h3 className="download-video--title">Choose download format:</h3>
              <div className="download-video--formats">
                <a
                  href={instagramData.media}
                  target="_blank"
                  className="video-format--btn"
                >
                  Download
                </a>
              </div>
            </div>
          ) : null}
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
                  setTwitterInputValue(e.target.value);
                  setErrMessageTw("");
                }}
                value={twitterInputValue}
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
          {twitterData ? (
            <div className="download-video">
              <h3 className="download-video--title">Choose download format:</h3>
              <div className="download-video--formats">
                {twitterData.formats.map((format, index) => (
                  <a
                    href={format.url}
                    key={index}
                    className="video-format--btn"
                  >
                    {format.video_ext !== "none" ? (
                      <VideoCameraOutlined />
                    ) : (
                      <AudioOutlined />
                    )}
                    {" " + format.width + "p"}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <div className={tab === 4 ? "download download-active" : "download"}>
          <div className="download-form">
            <div className="download-form--input">
              <Input
                className="input"
                placeholder="Paste facebook video url here"
                name="fburl"
                size="large"
                icon={<DownloadOutlined />}
                onChange={(e) => {
                  setFacebookInputValue(e.target.value);
                  setErrMessageFb("");
                }}
                value={facebookInputValue}
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
          {facebookData ? (
            <div className="download-video">
              {/* <iframe
                id="video"
                src={facebookData.thumbnail}
              ></iframe> */}
              <img className="download-video--iframe" src={facebookData.thumbnail} alt={facebookData.title} />
              <h3 className="download-video--title">Choose download format:</h3>
              <div className="download-video--formats">
                {Object.entries(facebookData.links).map((data, index) => (
                  <a href={data[1]} key={index} className="video-format--btn" download>
                    {data[0]}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default DownloadForm;
