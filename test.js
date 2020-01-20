const { MongoClient } = require("./config/database");

const schema = new MongoClient.Schema({
    name: String,
    age: Number,
    email: String
});

const userModel = MongoClient.model("myUser", schema);

const Ron = new userModel({
    name: "Ron Michaels",
    age: 22,
    email: "ron.m@gmail.com"
});
