import mongoose from "mongoose";
const medicalRecordScheema = new mongoose.Schema({},{timestamps:true});
export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordScheema);