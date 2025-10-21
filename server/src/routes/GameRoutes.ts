import express, {Request, Response} from "express";
import GameController from "../controllers/GameController.js";
import {Game} from "../model/Game.js";


const router = express.Router();

//GetAllGames
/**
 * Handles the GET request to retrieve all games.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @returns {Promise<void>} - A Promise that resolves when the response is sent.
 */
router.get('/', async (req, res): Promise<void> => {
    try {
        console.log("Getting All Games");
        const games: Game[] | undefined = await GameController.getAllGames(req, res);
        res.status(200).json(games);
    } catch (err) {
        console.log(err);
        res.status(500).send({message: "Could not get all games", error: err});
    }
})

//CreateGame
router.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
        console.log("Creating Games");
        const response = await GameController.createGames(req, res);
    } catch (err) {
        console.log(err);
    }
})

//GetGameByState
/**
 * Handles the GET request to retrieve games by their state.
 * @param {Request} req - The Express request object containing the state as a route parameter.
 * @param {Response} res - The Express response object.
 * @returns {Promise<void>} - A Promise that resolves when the response is sent.
 */
router.get('/state/:state', async (req: Request, res: Response): Promise<void> => {
    try {
        console.log("Getting Games");
        const games: Game[] = await GameController.getGameByState(req, res);
        res.status(200).json(games);
    } catch (err) {
        console.log(err);
        res.status(500).send({message: "Could not get games by state", error: err});
    }
})

router.delete('/games/:gameId', async (req: Request, res: Response): Promise<void> => {
    try {
        console.log("Deleting Game");
        await GameController.deleteGame(req);
    } catch (e) {
        console.log(e);
        res.status(500).send({message: "Could not delete Game", error: e});
    }
})

export default router;