import express from "express";
import GameController from "../controllers/GameController.js";
import {Request, Response} from "express";


const router = express.Router();
//GetAllGames
router.get('/', (req, res) => {
    res.send("Hello Games!!!!!!");
})

//CreateGame
router.post('/', async (req: Request, res: Response) => {
    try {
        console.log("Creating Games");
        const response = await GameController.createGames(req, res);
        res.send(response);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
})

//GetGameByID
router.put('/:id', (req, res) => {
})

export default router;