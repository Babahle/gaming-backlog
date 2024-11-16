import express, {Express, Request, Response} from "express";

const port = process.env.PORT || 3000;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!!!!!!");
})

app.listen(port, () => {
    console.log("Server started on port " + port);
})