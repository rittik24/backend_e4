const mongoose=require("mongoose");
const mediaSchema= mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    password: String,
})

const mediaModel= mongoose.model("user",mediaSchema);

module.exports= {
    mediaModel
};