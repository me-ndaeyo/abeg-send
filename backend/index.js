const express = require("express")
const https = require("https")
const ytdl = require("ytdl-core")
var cors = require("cors")

const app = express();
const port = process.env.PORT || 4000
app.use(cors())

app.get("/", async (req, res) => {
    try{
        const url = req.query.url
        const videoID = await ytdl.getURLVideoID(url)
        const metaInfo = await ytdl.getInfo(url)
        let data = {
            url: `https://www.youtube.com/embed/${videoID}`,
            info: metaInfo.formats
        }
        return res.send(data)
    } catch (err){
        return res.status(500)
    }
    
})

app.listen(port, function(){
    console.log(`Server up and running on PORT: ${port}`)
})