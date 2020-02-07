const mongoose = require('mongoose');

const counselorSchema = new mongoose.Schema({
    image: {
        type: String
    },
    counselorName:{
        type:String,
        required: true
    },
    
})