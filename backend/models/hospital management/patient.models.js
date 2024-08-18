import mongoose from "mongoose";
const patientScheema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    diagonsedWith:{
        type: String,
        rquired: true
    },
    address:{
        type: String,
        rquired: true
    },
    age:{
        type: Number,
        rquired: true
    },
    bloodGroup:{
        type: String,
        rquired: true
    },
    gender:{
        type: String,
        enum: ['M','F','O'],        
        rquired: true
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hosptial'
    }

},{timestamps:true});
export const Patient = mongoose.model('Patient', patientScheema);