export class Game {
    public name: string;
    public platform: string;
    public state: GameStates;
    public imageURL: string;

    constructor(name: string, platform: string, state: GameStates, imageURL: string) {
        this.name = name;
        this.platform = platform;
        this.state = state;
        this.imageURL = imageURL;
    }
}