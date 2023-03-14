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
        const validate = await ytdl.validateURL(url)
        if(validate){
            const videoID = await ytdl.getURLVideoID(url)
            const metaInfo = await ytdl.getInfo(url)
            let data = {
                url: `https://www.youtube.com/embed/${videoID}`,
                info: metaInfo.formats
            }
            return res.send(data)
        } else {
            console.log(validate);
            res.status(400)
            res.send({errorText:'Url is invalid. Paste a valid youtube url.'})
        }
    } catch (err){
        return res.status(500)
    }
    
})

app.listen(port, function(){
    console.log(`Server up and running on PORT: ${port}`)
})