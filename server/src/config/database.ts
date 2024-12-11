import mongoose from 'mongoose';

class Database {
    static async connect(): Promise<typeof mongoose> {
        try {
            const connection = await mongoose.connect('mongodb://localhost:27017/blogdb');
            console.log('MongoDB connected successfully!');
            return connection;
        } catch (error) {
            console.error('MongoDB connection error:', error);
            process.exit(1);
        }
    }
}

export default Database;