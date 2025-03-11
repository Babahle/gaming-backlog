import express from "express";
import GameController from "../controllers/GameController.js";
import {Request, Response} from "express";
import {Game} from "../model/Game.js";


const router = express.Router();

//GetAllGames
/**
 * Handles the GET request to retrieve all games.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @returns {Promise<void>} - A Promise that resolves when the response is sent.
 */
router.get('/', async (req, res) => {
    try {
        console.log("Getting All Games");
        const games: Game[] = await GameController.getAllGames(req, res);
        res.status(200).json(games);
    } catch (err) {
        console.log(err);
        res.status(500).send({message: "Could not get all games", error: err});
    }
})

//CreateGame
router.post('/', async (req: Request, res: Response) => {
    try {
        console.log("Creating Games");
        const response = await GameController.createGames(req, res);
    } catch (err) {
        console.log(err);
    }
})

//GetGameByID
router.put('/:id', (req, res) => {
})

export default router;