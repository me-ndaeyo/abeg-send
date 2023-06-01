import React, { useState } from "react";
import "antd/dist/reset.css";
import {
  AudioOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import InputBox from "./InputBox";
import "../styles/DownloadForm.scss";
import axios from "axios";
import TabTitles from "./TabTitles";

function DownloadForm() {
  const [youtubeInputValue, setYoutubeInputValue] = useState("");
  const [facebookInputValue, setFacebookInputValue] = useState("");
  const [instagramInputValue, setInstagramInputValue] = useState("");
  const [twitterInputValue, setTwitterInputValue] = useState("");

  const [youtubeData, setYoutubeData] = useState("");
  const [facebookData, setFacebookData] = useState("");
  const [instagramData, setInstagramData] = useState("");
  const [twitterData, setTwitterData] = useState("");

  const [errorMessageYoutube, setErrorMessageYoutube] = useState("");
  const [errorMessageInstagram, setErrorMessageInstagram] = useState("");
  const [errorMessageTwitter, setErrorMessageTwitter] = useState("");
  const [errorMessageFacebook, setErrorMessageFacebook] = useState("");

  const [tab, setTab] = useState('youtube');
  const [loading, setLoading] = useState(false);

  const youtubeAndTwitterApiURL =
    "https://aiov-download-youtube-videos.p.rapidapi.com/GetVideoDetails";
  const youtubeAndTwitterApiHost =
    "aiov-download-youtube-videos.p.rapidapi.com";

  const youtubeLink = async () => {
    const options = {
      method: "GET",
      url: youtubeAndTwitterApiURL,
      params: {
        URL: youtubeInputValue,
      },
      headers: {
        "X-RapidAPI-Key": "767534382amsh8eac27d49526885p1814d7jsna8cd3b55656a",
        "X-RapidAPI-Host": youtubeAndTwitterApiHost,
      },
    };

    if (youtubeInputValue) {
      // console.log("... init yt link");
      setLoading(true);
      await axios
        .request(options)
        .then((response) => {
          setYoutubeData(response.data);
          console.log(response.data);
          setYoutubeInputValue("");
        })
        .catch(function (error) {
          // console.log(error);
          if (error.response.status === 500) {
            setErrorMessageYoutube(
              "Error: Internal server error occured, try again later."
            );
          } else if (
            error.response.status === 400 ||
            error.response.status === 404
          ) {
            setErrorMessageYoutube(
              `Error: ${error.response.data?.error
                ?.split(" or")
                .slice(0, 1)}.`
            );
          } else {
            setErrorMessageYoutube(`Error: ${error.message} `);
          }
        });
      setLoading(false);
    } else {
      setErrorMessageYoutube("Input field cannot stay empty");
    }
  };

  // ********** INSTAGRAM ***********
  const instagramLink = async () => {
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
          // console.log(response.data);
          setInstagramInputValue("");
        })
        .catch(function (error) {
          console.log(error);
          if (error.response.status === 500) {
            setErrorMessageInstagram(
              "Error: Internal server error occured, try again later."
            );
          } else if (
            error.response.status === 400 ||
            error.response.status === 404
          ) {
            setErrorMessageInstagram(
              `Error: ${error.response?.data.error
                .split(" or")
                .slice(0, 1)}.`
            );
          } else {
            setErrorMessageInstagram(`Error: ${error.message} `);
          }
        });
      setLoading(false);
    } else {
      setErrorMessageInstagram("Input field cannot stay empty");
    }
  };

  // ********** FACEBOOK ***********
  const facebookLink = async () => {
    const options = {
      method: "GET",
      url: "https://facebook-reel-and-video-downloader.p.rapidapi.com/app/main.php",
      params: { url: facebookInputValue },
      headers: {
        "X-RapidAPI-Key":  "767534382amsh8eac27d49526885p1814d7jsna8cd3b55656a",
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
            setErrorMessageFacebook("Error: Link cannot be accessed");
          } else if (response.data.success === false) {
            setErrorMessageFacebook("Error: Link isn't supported.");
            // console.log(response.data)
          } else {
            setFacebookData(response.data);
          }
          console.log(response.data);
          setFacebookInputValue("");
        })
        .catch(function (error) {
          // console.log(error);
          if (error.response?.status === 500) {
            setErrorMessageFacebook(
              "Error: Internal server error occured, try again later."
            );
          } else if (
            error.response?.status === 400 ||
            error.response?.status === 404
          ) {
            setErrorMessageFacebook(
              `Error: ${error.response?.data.error
                .split(" or")
                .slice(0, 1)}.`
            );
          }
        });
      setLoading(false);
    } else {
      setErrorMessageFacebook("Input field cannot stay empty");
    }
  };

  // ********** TWITTER ***********
  const twitterLink = async () => {
    const options = {
      method: "GET",
      url: youtubeAndTwitterApiURL,
      params: {
        URL: twitterInputValue,
      },
      headers: {
        "X-RapidAPI-Key": "767534382amsh8eac27d49526885p1814d7jsna8cd3b55656a",
        "X-RapidAPI-Host": youtubeAndTwitterApiHost,
      },
    };

    if (twitterInputValue) {
      // console.log("... init tw link");
      setLoading(true);
      await axios
        .request(options)
        .then((response) => {
          setTwitterData(response.data);
          console.log(response.data);
          setTwitterInputValue("");
        })
        .catch(function (error) {
          // console.log(error);
          if (error.response.status === 500) {
            setErrorMessageTwitter(
              "Error: Internal server error occured, try again later."
            );
          } else if (
            error.response.status === 400 ||
            error.response.status === 404
          ) {
            setErrorMessageTwitter(
              `Error: ${error.response.data.error
                .split(" or")
                .slice(0, 1)}.`
            );
          }
        });
      setLoading(false);
    } else {
      setErrorMessageTwitter("Input field cannot stay empty");
    }
  };

  return (
    <div className="container">
      <TabTitles tab={tab} setTab={setTab}/>

      <div className="download-tabs">
        <div className={tab === 'youtube' ? "download download-active" : "download"}>
          <InputBox
            placeholderText={"youtube"}
            inputValue={youtubeInputValue}
            setInputValue={setYoutubeInputValue}
            errorMessage={errorMessageYoutube}
            setErrorMessage={setErrorMessageYoutube}
            loading={loading}
            initializeLink={youtubeLink}
          />
          {youtubeData ? (
            <div className="download-video">
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
        <div className={tab === 'instagram' ? "download download-active" : "download"}>
          <InputBox
            placeholderText={"instagram"}
            inputValue={instagramInputValue}
            setInputValue={setInstagramInputValue}
            errorMessage={errorMessageInstagram}
            setErrorMessage={setErrorMessageInstagram}
            loading={loading}
            initializeLink={instagramLink}
          />
          {instagramData ? (
            <div className="download-video">
              <div className="download-video--formats">
                <a
                  href={instagramData.media}
                  target="_blank"
                  className="video-format--btn"
                >
                  Download Video
                </a>
              </div>
            </div>
          ) : null}
        </div>

        <div className={tab === 'twitter' ? "download download-active" : "download"}>
          <InputBox
            placeholderText={"twitter"}
            inputValue={twitterInputValue}
            setInputValue={setTwitterInputValue}
            errorMessage={errorMessageTwitter}
            setErrorMessage={setErrorMessageTwitter}
            loading={loading}
            initializeLink={twitterLink}
          />
          {twitterData ? (
            <div className="download-video">
              <h3 className="download-video--title">Choose download format:</h3>
              <div className="download-video--formats">
                {twitterData.formats
                  .filter(
                    (format) =>
                      format.video_ext === "mp4" &&
                      format.manifest_url !== null &&
                      format.width != null &&
                      !format.format_note?.includes(",")
                  )
                  .map((format, index) => (
                    <a
                      href={format.url}
                      key={index}
                      className="video-format--btn"
                      target="_blank"
                    >
                      {format.video_ext !== "none" ? (
                        <VideoCameraOutlined />
                      ) : (
                        <AudioOutlined />
                      )}
                      {" " + (format.format_note || format.width)}
                    </a>
                  ))}
              </div>
            </div>
          ) : null}
        </div>

        <div className={tab === 'facebook' ? "download download-active" : "download"}>
          <InputBox
            placeholderText={"facebook"}
            inputValue={facebookInputValue}
            setInputValue={setFacebookInputValue}
            errorMessage={errorMessageFacebook}
            setErrorMessage={setErrorMessageFacebook}
            loading={loading}
            initializeLink={facebookLink}
          />
          {facebookData ? (
            <div className="download-video">
              <h3 className="download-video--title">Choose download format:</h3>
              <div className="download-video--formats">
                {Object?.entries(facebookData?.links)?.map((data, index) => (
                  <a
                    href={data[1]}
                    key={index}
                    className="video-format--btn"
                    download
                  >
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
