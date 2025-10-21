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
        let {name, platform, state, imageURL} = req.body;

        if (!name || !platform) {
            return res.status(400).json({error: 'Game name and platform are required'});
        }

        try {
            const game = new Game(name, platform, state, undefined, imageURL);
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
    public static async getAllGames(req: Request, res: Response): Promise<Game[] | undefined> {
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
     * Retrieves games from the database filtered by platform.
     * @param req - The Express request object containing the platform as a route parameter.
     * @param res - The Express response object.
     * @returns A Promise that resolves to an array of `Game` objects filtered by the specified platform.
     */
    public static async getGameByState(req: Request, res: Response): Promise<Game[]> {
        const state: string = req.params.state;
        const games = Array.from(await GameModel.find({state: state}));
        return games.map(game => {
            return new Game(game.name, game.platform, game.state, game.id, game.imageURL);
        })
    }

    /**
     * Deletes a game from the database by its ID.
     * @param req - The Express request object containing the game ID as a route parameter.
     * @returns A Promise that resolves when the game is deleted.
     */
    public static async deleteGame(req: Request): Promise<void> {
        const gameId: string = req.params.gameId;
        if (gameId) {
            try {
               await GameModel.findByIdAndDelete(gameId);
            } catch (err) {
                console.log(`Error deleting game: ${err}`);
            }
        }
    }

}