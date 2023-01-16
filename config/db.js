require("dotenv").config();
const URL = process.env.mongoURL;

const mongoose = require("mongoose");
const connection = mongoose.connect(URL);

module.export={
    connection
}