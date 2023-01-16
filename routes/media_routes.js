const express =require("express");
const bcrypt = require("bcrypt");
const {mediaModel} = require("../model/media_model");

const router= express.Router();

router.post("/register",(req,res)=>{
    const{name,email,gender,password}= req.body;
    bcrypt.hash(password, 8, (err,secured_password)=>{
        if(err){
            console.log(err);
        }else{
            try{
                const userData = mediaModel({
                    name,
                    email,
                    gender,
                    password: secured_password,
                });
                userData.save();
                console.log("register succesfull");
                res.json(userData);
            }catch(error){
                console.log(error);
                res.json(error);
            }
        }
    });
});



module.exports= router;