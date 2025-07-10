import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/db.js';
import authRoutes from './routes/auth.js';
import profileRoutes from './routes/profile.js';

dotenv.config();
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

sequelize.sync().then(() => {
    console.log('Database synced successfully');
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running at http://0.0.0.0:${PORT}`);
    });
}).catch((error) => {
    console.error('Failed to sync database: ', error);
});
