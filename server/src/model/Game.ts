import * as mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
    name: {type: String, required: true},
    platform: {type: String, required: true},
    state: {type: String, required: true},
    imageURL: {type: String},
})

export default mongoose.model("Game", GameSchema);