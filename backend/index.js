const express = require("express")
const https = require("https")
const ytdl = require("ytdl-core")
const getvidLink = require("anyviddl")
var cors = require("cors")

const app = express();
const port = process.env.PORT || 4000
app.use(cors())

https: app.get("/", async (req, res) => {
  // if(req.query.yturl){
  //   try {
  //     const yturl = req.query.yturl;
  //     const validate = await ytdl.validateURL(yturl);
  //     if (validate) {
  //       const videoID = await ytdl.getURLVideoID(yturl);
  //       const metaInfo = await ytdl.getInfo(yturl);
  //       let data = {
  //         url: `https://www.youtube.com/embed/${videoID}`,
  //         info: metaInfo.formats,
  //       };
  //       return res.send(data);
  //     } else {
  //       console.log(validate);
  //       res.status(400);
  //       res.send({ errorText: "Url is invalid. Paste a valid youtube url." });
  //     }
  //   } catch (err) {
  //     return res.status(500);
  //   }
  // }

  getvidLink
    .getVidLink("https://youtu.be/HY3lNkHbpS0")
    .then((res) => {
      console.log("res");
      console.log(res);
    })
    .catch((err) => {
      console.log("err");
      console.log(err);
    });
});

app.listen(port, function(){
    console.log(`Server up and running on PORT: ${port}`)
})