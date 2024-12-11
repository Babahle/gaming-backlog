import express from "express";

const router = express.Router();
//GetAllGames
router.get('/', (req, res) => {
    res.send("Hello Games!!!!!!");
})

//CreateGame
router.post('/', (req, res) => {})

//GetGameByID
router.put('/:id', (req, res) => {})

export default router;