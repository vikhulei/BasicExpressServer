const express = require ("express");
const cors = require("cors");
const app = express();
const port = 4000;
let exchangedData = "";

app.use(express.json());
app.use(cors());

app.use(express.static("public"));

app.get("/info", cors(), async(req, res) => {
    res.status(200).json({info: exchangedData})
});

app.post("/", (req, res) => {
    const {parcel} = req.body;
    exchangedData = parcel;
    if(!parcel) {
        res.status(400).send({status: "failed"})
    }
    res.status(200).send({status: "received"})
})

app.listen(port, () => {
    console.log(`Server is running on the port ${port}`)
});