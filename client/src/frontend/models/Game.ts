import {GameStates} from "../enums/GameStates";
import {Platforms} from "../enums/Platforms";
import {Constants} from "../constants/Constants";

export class Game {
    public name: string;
    public platform: Platforms;
    public state: GameStates;
    public imageURL: string;

    constructor(name: string, platform: Platforms, state: GameStates, imageURL: string) {
        if (imageURL) {
            this.imageURL = imageURL;
        } else {
            this.imageURL = Constants.DEFAULT_IMAGE_URL;
        }
        this.name = name;
        this.platform = platform;
        this.state = state;
    }
}