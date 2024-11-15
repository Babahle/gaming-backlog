import {GameStates} from "../enums/GameStates.ts";
import {Platforms} from "../enums/Platforms.ts";

export class Game {
    public name: string;
    public platform: Platforms;
    public state: GameStates;
    public imageURL: string;

    constructor(name: string, platform: Platforms, state: GameStates, imageURL: string) {
        this.name = name;
        this.platform = platform;
        this.state = state;
        this.imageURL = imageURL;
    }
}