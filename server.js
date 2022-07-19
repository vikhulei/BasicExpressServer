const express = require ("express");
const app = express();
const port = 4000;
const cors = require("cors");
let fromServer = "";

app.use(express.json());
app.use(cors());

app.use(express.static("public"));
app.use(express.json());

app.get("/info", cors(), async(req, res) => {
    res.status(200).json({info: fromServer})
});

app.post("/", (req, res) => {
    const {parcel} = req.body;
    fromServer = parcel;
    if(!parcel) {
        res.status(400).send({status: "failed"})
    }
    res.status(200).send({status: "received"})
})

app.listen(port, () => {
    console.log(`Server is running on the port ${port}`)
});