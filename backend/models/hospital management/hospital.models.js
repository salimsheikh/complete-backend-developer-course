import mongoose from "mongoose";
const hospitalScheema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    addressLine1:{
        type: String,
        required: true
    },
    addressLine2:{
        type: String,
        required: false
    },
    city:{
        type: String,
        required: true
    },
    pincode:{
        type: String,
        required: true
    },
    specializeIn:[
        {
            type: String,
        }
    ]
},{timestamps:true});
export const Hospital = mongoose.model('Hospital', hospitalScheema);