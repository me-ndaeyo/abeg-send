// const express = require("express");
// const https = require("https");
// const ytdl = require("ytdl-core");
// const getvidLink = require("anyviddl");
// const getTwitterMedia = require("get-twitter-media");
// var cors = require("cors");

// const app = express();
// const port = process.env.PORT || 4000;
// app.use(cors());

// app.get("/", async (req, res) => {
//   let media = await getTwitterMedia(
//     "https://twitter.com/cupcakedomingo1/status/1638873476709720065?s=20"
//   );
//   console.log(media)
//   // if(req.query.yturl){
//   //   try {
//   //     const yturl = req.query.yturl;
//   //     const validate = await ytdl.validateURL(yturl);
//   //     if (validate) {
//   //       const videoID = await ytdl.getURLVideoID(yturl);
//   //       const metaInfo = await ytdl.getInfo(yturl);
//   //       let data = {
//   //         url: `https://www.youtube.com/embed/${videoID}`,
//   //         info: metaInfo.formats,
//   //       };
//   //       return res.send(data);
//   //     } else {
//   //       console.log(validate);
//   //       res.status(400);
//   //       res.send({ errorText: "Url is invalid. Paste a valid youtube url." });
//   //     }
//   //   } catch (err) {
//   //     return res.status(500);
//   //   }
//   // }

// //   getvidLink
// //     .getVidLink({ link: "https://youtu.be/HY3lNkHbpS0" })
// //     .then((res) => {
// //       console.log("res");
// //       console.log(res);
// //     })
// //     .catch((err) => {
// //       console.log("err");
// //       console.log(err);
// //     });
// });

// app.listen(port, function () {
//   console.log(`Server up and running on PORT: ${port}`);
// });
