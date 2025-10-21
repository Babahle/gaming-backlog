import {IGame} from "../interfaces/IGame.js";


export class Game implements IGame {
    public name: string;
    public platform: string;
    public state: string;
    public imageURL: string | undefined;
    public id: string | undefined;


    constructor(name: string, platform: string, state: string, id?: string, imageURL?: string) {
        this.name = name;
        this.platform = platform;
        this.state = state;
        this.imageURL = imageURL;
        this.id = id;
    }

}