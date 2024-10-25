import {Colours} from "../enums/Colours.ts";

export class ButtonColour {
    public backgroundColor: string;
    public hoverColor: string;
    public focusColor: string
    public textColor: string;


    constructor(colour: Colours) {

        switch (colour) {
            case Colours.Primary: {
                this.backgroundColor = 'bg-primary';
                this.hoverColor = 'hover:bg-primary-2';
                this.focusColor = 'focus:ring-primary-3';
                this.textColor = 'text-background';
                break;
            }
            case Colours.Secondary: {
                this.backgroundColor = 'bg-secondary';
                this.hoverColor = 'hover:bg-secondary-2';
                this.focusColor = 'focus:ring-secondary-3';
                this.textColor = 'text-text';
                break;
            }
            case Colours.Accent: {
                this.backgroundColor = 'bg-accent';
                this.hoverColor = 'hover:bg-accent-2';
                this.focusColor = 'focus:ring-accent-3';
                this.textColor = 'text-background';
                break;
            }
            default:
                this.backgroundColor = 'bg-primary'; // or a sensible fallback
                this.hoverColor = 'hover:bg-primary'; // or a sensible fallback
                this.focusColor = 'focus:ring-primary'; // or a sensible fallback
                this.textColor = 'text-background';
                console.warn(`Unknown colour: ${colour}`);
        }
    }
}