import * as mongoose from "mongoose";
import {IGame} from "../interfaces/IGame.js";
import {Model} from "mongoose";

const gameSchema = new mongoose.Schema<IGame>({
    name: {type: String, required: true},
    platform: {type: String, required: true},
    state: {type: String, required: true},
    imageURL: {type: String},
})

export const GameModel: Model<IGame> = mongoose.model<IGame>("Game", gameSchema);
export default GameModel;