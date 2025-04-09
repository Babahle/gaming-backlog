import {Colours} from "../enums/Colours";

export class ButtonColour {
    public backgroundColour: string;
    public hoverColour: string;
    public hoverTextColour: string;
    public textColour: string;


    constructor(colour: Colours) {

        switch (colour) {
            case Colours.Primary: {
                this.backgroundColour = 'bg-primary';
                this.hoverColour = 'hover:bg-primary-2';
                this.textColour = 'text-background';
                this.hoverTextColour = 'hover:text-background';
                break;
            }
            case Colours.Secondary: {
                this.backgroundColour = 'bg-secondary';
                this.hoverColour = 'hover:bg-secondary-2';
                this.textColour = 'text-text';
                this.hoverTextColour = 'hover:text-text';
                break;
            }
            case Colours.Accent: {
                this.backgroundColour = 'bg-accent';
                this.hoverColour = 'hover:bg-accent-2';
                this.textColour = 'text-background';
                this.hoverTextColour = 'hover:text-background';
                break;
            }
            default:
                this.backgroundColour = 'bg-primary'; // or a sensible fallback
                this.hoverColour = 'hover:bg-primary'; // or a sensible fallback
                this.textColour = 'text-background';
                this.hoverTextColour = 'hover:text-background';
                console.warn(`Unknown colour: ${colour}`);
        }
    }
}