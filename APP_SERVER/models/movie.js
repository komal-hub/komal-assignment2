import { mongoose } from "mongoose";

const movieSchema = new Mongoose.Schema({

    name:{
        type:String,
        required:true,
        minlength:3
    },
        
    type:{
        type:String,
        required:true    },


    director:{
        type:String,
        required:true    },
       
    release_year:{
            type:Number,
            required:true
        },
    
    rating:{
        type:Number,
        required:true
    }


});

mongoose.model('Movie','movieSchema');
