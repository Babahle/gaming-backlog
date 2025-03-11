import {Request, Response} from "express";
import {Game} from "../model/Game.js";
import GameModel from "../model/GameModel.js";

export default class GameController {

    /**
     * Creates a new game in the database.
     * @param req - The Express request object containing the game data.
     * @param res - The Express response object to send the result.
     * @returns A Promise that resolves to the Express response.
     */
    public static async createGames(req: Request, res: Response): Promise<Response> {
        let {name, platform, state} = req.body;

        if (!name || !platform) {
            return res.status(400).json({error: 'Game name and platform are required'});
        }

        try {
            const game = new Game(name, platform, state);
            const gameDoc = new GameModel(game);
            await gameDoc.save();

            console.log('Game inserted successfully');
            return res.status(200).json({message: "Game Inserted Successfully", game: game});
        } catch (err) {
            console.error('Error inserting game:', err);
            return res.status(500).send({message: 'Error inserting game:', error: err});
        }
    }

    /**
     * Retrieves all games from the database.
     * @param req - The Express request object.
     * @param res - The Express response object.
     * @returns A Promise that resolves to an array of `Game` objects.
     */
    public static async getAllGames(req: Request, res: Response): Promise<Game[]> {
        try {
            const games = Array.from(await GameModel.find());
            return games.map(game => {
                return new Game(game.name, game.platform, game.state, game.id, game.imageURL);
            });
        } catch (err) {
            console.log(`Error getting games: ${err}`);
        }
    }

    /**
     * Retrieves a game from the database.
     * @param req - The Express request object.
     * @param res - The Express response object.
     * @returns A Promise that resolves to the Express response.
     */
    public static async getGame(req: Request, res: Response): Promise<Response> {
        return undefined;
    }

    /**
     * Updates a game in the database.
     * @param req - The Express request object.
     * @param res - The Express response object.
     * @returns A Promise that resolves to the Express response.
     */
    public static async updateGame(req: Request, res: Response): Promise<Response> {
        return undefined;
    }

    /**
     * Deletes a game from the database.
     * @param req - The Express request object.
     * @param res - The Express response object.
     * @returns A Promise that resolves to the Express response.
     */
    public static async deleteGame(req: Request, res: Response): Promise<Response> {
        return undefined;
    }
}