import express, {Express, Request, Response} from "express";
import Database from "./config/database.js";
import gameRoutes from "./routes/GameRoutes.js";

class Server {
    private app: Express;
    private port = process.env.PORT || 3000;

    constructor() {
        this.app = express();
        this.configureMiddleware();
        this.connectDatabase();
        this.setupRoutes();
    }

    private configureMiddleware(): void {
        this.app.use(express.json());
    }

    private async connectDatabase(): Promise<void> {
        await Database.connect();
    }

    private setupRoutes(): void {
        this.app.use('/games', gameRoutes);
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

const server = new Server();
server.start();