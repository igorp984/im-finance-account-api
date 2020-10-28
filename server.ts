import dotenv from 'dotenv';
import express from 'express';
import { Router } from './src/routes';

dotenv.config();
const server = express();
const PORT: string = process.env.PORT || '8001';

server.use('/account', Router);

server.listen(PORT, () => {
	console.log(`Server listening in ${PORT}`);
});
