require("dotenv").config();
const PORT= process.env.port;
const {connection} = require("./config/db")
const express = require("express");
const router = require("./routes/media_routes");
const app = express();
app.use(express.json());
app.use("/",router)

app.get("/",(req,res) => {
    res.send("welcome")
});

app.listen(PORT,async() => {
    try{
        await connection;
        console.log("DB is connected");
        console.log(`server is running at port : ${PORT}`)
    }catch(error){
        console.log(error);
        console.log("DB is not connected")
    }
})