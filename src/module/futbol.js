import mongoose from "mongoose";

const futbolSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required: true},
    time : {type: String},
    artilheiro:{type:String}


}, {versiokey:false}
);

const futbol = mongoose.model('futbol',futbolSchema);

export default futbol;