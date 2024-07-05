require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();

const {router} = require('./router');

app.use(cors());
app.use("/v1", router)

const PORT = process.env.PORT || 3000;

//TODO [GET] http://localhost:3001/videos
// app.get('/videos', (req, res) => {
//     res.send({data: "Hola mundo"});
// });

app.listen(PORT, () => console.log("La api esta lista", PORT));