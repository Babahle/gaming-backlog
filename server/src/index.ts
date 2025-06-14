import express, {Express} from "express";
import Database from "./config/database.js";
import gameRoutes from "./routes/GameRoutes.js";
import dotenv from "dotenv";
import cors from 'cors';


class Server {
    private app: Express;
    private port: string | number = process.env.PORT || 3000;

    constructor() {
        this.app = express();
        this.configureCors();
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
        this.app.use('/', gameRoutes);
    }

    public start(): void {
        dotenv.config();
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }

    private configureCors() {
        this.app.use(cors({
            origin: ['http://localhost:3000', 'http://localhost:5173', 'http://127.0.0.1:27017'],
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            allowedHeaders: ['Content-Type', 'Authorization'],
            credentials: true
        }));
    }
}

const server = new Server();
server.start();