const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ritiksingh7369:ritik123@cluster0.afyxl.mongodb.net/project');

const userSchema = mongoose.Schema({
    username : String,
    name : String,
    age : Number,
    email : String,
    password : String,
    posts : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "post"
    }],
    profilepic : {
        type : String,
        default : "default.jpg"
    }
});

module.exports = mongoose.model('user',userSchema);
